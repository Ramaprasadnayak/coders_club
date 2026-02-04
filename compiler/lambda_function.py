import sys
import subprocess
import io


def execute_python_code(code):
    original_stdout = sys.stdout
    sys.stdout = output_capture = io.StringIO()
    try:
        exec(code, {})
        return output_capture.getvalue()
    except Exception as e:
        return str(e)
    finally:
        sys.stdout = original_stdout


def execute_java_code(code):
    try:
        with open("/tmp/Main.java", "w") as f:
            f.write(code)

        compile_res = subprocess.run(
            ["javac", "/tmp/Main.java"],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE
        )

        if compile_res.returncode != 0:
            return compile_res.stderr.decode()

        run_res = subprocess.run(
            ["java", "-classpath", "/tmp", "Main"],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE
        )

        return run_res.stdout.decode() or run_res.stderr.decode()

    except Exception as e:
        return str(e)


def execute_cpp_code(code):
    try:
        with open("/tmp/Main.cpp", "w") as f:
            f.write(code)

        compile_res = subprocess.run(
            ["g++", "/tmp/Main.cpp", "-o", "/tmp/a.out"],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE
        )

        if compile_res.returncode != 0:
            return compile_res.stderr.decode()

        run_res = subprocess.run(
            ["/tmp/a.out"],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE
        )

        return run_res.stdout.decode() or run_res.stderr.decode()

    except Exception as e:
        return str(e)


def handler(event, context):
    if event.get("httpMethod") == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "OPTIONS,POST"
            },
            "body": ""
        }

    language = event.get("language", "python")
    code = event.get("code", "")

    if language == "python":
        result = execute_python_code(code)
    elif language == "java":
        result = execute_java_code(code)
    elif language == "cpp":
        result = execute_cpp_code(code)
    else:
        result = f"Unsupported language: {language}"

    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "OPTIONS,POST"
        },
        "body": result
    }
