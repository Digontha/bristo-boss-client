import React, { useEffect, useState } from 'react';

const useMenu = () => {
    const [Food, setFood] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("http://localhost:5000/menu")
            .then(res => res.json())
            .then(data => {
                setFood(data)
                setLoading(false)

            })

    }, [])
    return [Food, loading]
};

export default useMenu;