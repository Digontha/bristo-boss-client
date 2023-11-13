import React, { useState } from 'react';
import Cover from '../Components/Cover';
import orderBG from '../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../UseHook.jsx/useMenu';
import UseOrder from '../UseHook.jsx/UseOrder';
import { useParams } from 'react-router-dom';
const Order = () => {
    const [Food] = useMenu()
    const { category } = useParams()
    console.log(category);
    const dessert = Food?.filter(food => food.category === "dessert")
    const pizza = Food?.filter(food => food.category === "pizza")
    const soup = Food?.filter(food => food.category === "soup")
    const salad = Food?.filter(food => food.category === "salad")
    const drinks = Food?.filter(food => food.category === "drinks")
    const categories = ["salad", "pizza", " soup", "dessert", "drinks"]
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    return (
        <>
            <div>
                <Cover menuBg={orderBG} title={'OUR SHOP'} description={"Would you like to try a dish?"}></Cover>
            </div>

            <div>
                <Tabs className="text-center" defaultIndex={tabIndex} onSelect={(index)=>setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soups</Tab>
                        <Tab>desserts</Tab>
                        <Tab>drinks</Tab>
                    </TabList>

                    <TabPanel>
                        <UseOrder items={salad}></UseOrder>
                    </TabPanel>
                    <TabPanel>
                        <UseOrder items={pizza}></UseOrder>
                    </TabPanel>
                    <TabPanel>
                        <UseOrder items={soup}></UseOrder>
                    </TabPanel>
                    <TabPanel>
                        <UseOrder items={dessert}></UseOrder>
                    </TabPanel>
                    <TabPanel>
                        <UseOrder items={drinks}></UseOrder>
                    </TabPanel>

                </Tabs>
            </div>
        </>
    );
};

export default Order;