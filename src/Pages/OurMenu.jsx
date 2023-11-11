import React from 'react';
import Cover from '../Components/Cover';
import menuBG from "../assets/menu/banner3.jpg"
import SectionTitle from '../Components/SectionTitle';
import useMenu from '../UseHook.jsx/useMenu';
import UseCategory from '../UseHook.jsx/useCategory';
import dessertBG from "../assets/menu/dessert-bg.jpeg"
import pizzaBG from "../assets/menu/pizza-bg.jpg"
import sopuBG from "../assets/menu/soup-bg.jpg"
import saladBG from "../assets/menu/salad-bg.jpg"


const OurMenu = () => {
    const [Food] = useMenu()
    const offer = Food?.filter(food => food.category ===  "offered")
    const dessert = Food?.filter(food => food.category ===  "dessert")
    const pizza = Food?.filter(food => food.category ===  "pizza")
    const soup = Food?.filter(food => food.category ===  "soup")
    const salad = Food?.filter(food => food.category ===  "salad")
    
    console.log(Food);
    return (
        <div>
            <div>
                <Cover
                    menuBg={menuBG}
                    title={"Our Menu"}
                    description={"Would you like to try a dish?"}
                >
                </Cover>
            </div>

            <div>
                <div>
                    <SectionTitle
                        heading={"TODAY'S OFFER"}
                        subHeading={"---Don't miss---"}
                    >
                    </SectionTitle>
                </div>
                <div>
                    <UseCategory
                    items={offer}
                    >

                    </UseCategory>
                </div>
            </div>

            <div>
                <div>
                    <Cover menuBg={dessertBG} title={"DESSERTS"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
                </div>
                <div>
                    <UseCategory
                    items={dessert}
                    >

                    </UseCategory>
                </div>
            </div>

            <div>
                <div>
                    <Cover menuBg={pizzaBG} title={"PIZZA"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
                </div>
                <div>
                    <UseCategory
                    items={pizza}
                    >

                    </UseCategory>
                </div>
            </div>

            <div>
                <div>
                    <Cover menuBg={sopuBG} title={"SOUP"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
                </div>
                <div>
                    <UseCategory
                    items={soup}
                    >

                    </UseCategory>
                </div>
            </div>
            <div>
                <div>
                    <Cover menuBg={saladBG} title={"SALAD"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
                </div>
                <div>
                    <UseCategory
                    items={salad}
                    >

                    </UseCategory>
                </div>
            </div>

        </div>
    );
};

export default OurMenu;