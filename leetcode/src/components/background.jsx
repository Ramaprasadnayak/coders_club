import { useMemo } from 'react';
import "./component_css/background.css"

export default function MyBackground({count=50,color="#04101a"}) {
    const comp = [
        { icon: "}", color: "rgb(245, 184, 0)" },
        { icon: ">", color: "rgba(245, 0, 221, 1)" },
        { icon: "+", color: "rgba(22, 179, 204, 1)" },
        { icon: "]", color: "rgba(23, 213, 227, 1)" },
        { icon: ")", color: "rgba(172, 0, 245, 1)" },
        { icon: "<", color: "rgba(255, 232, 250, 1)" },
        { icon: "{", color: "rgba(20, 245, 0, 1)" },
        { icon: "=", color: "rgba(245, 0, 0, 1)" },
    ];

    const drops = useMemo(() => {
        const rand = (min, max) => Math.random() * (max - min) + min;

        return Array.from({ length: count }).map(() => ({
            left: rand(0, 100).toFixed(2) + '%',
            delay: rand(0, 10).toFixed(2) + 's',
            duration: rand(3, 7).toFixed(2) + 's',
            comp: comp[Math.floor(Math.random() * comp.length)] 
        }));
    }, [count]);

    return (
        <div className="background-container" style={{backgroundColor:color}}>
            {drops.map((d, i) => (
                <div key={i} className="drop" style={{ color: d.comp.color, left: d.left, animationDelay: d.delay, animationDuration: d.duration }}>{d.comp.icon}</div>
            ))}
        </div>
    );
}