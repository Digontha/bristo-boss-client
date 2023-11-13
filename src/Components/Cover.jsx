


const Cover = ({title,menuBg,description}) => {
    return (
        <div>
            <div className="hero h-[500px]" style={{ backgroundImage: `url(${menuBg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content  text-center text-neutral-content">
                    <div className="bg-slate-800 bg-opacity-80 p-10 px-10 rounded-xl">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5 uppercase">{description}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;