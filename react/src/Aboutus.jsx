import React from "react";
import aboutus from './assets/about/aboutus-cortado.jpg'

function Aboutus() {
    return (
        <main className="flex-fill">
            <div className="container">
                <br></br>
                <img src={aboutus} className="w-100 banner" alt="" />
                <hr></hr>
                <h2 className="text-center pb-3">
                    Como a ideia de criar um e-commerce surgiu na cabeça desses três amigos?
                </h2>

                <p className="text-center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non nam repellat assumenda debitis magni laudantium cum sit blanditiis molestias voluptatem id omnis dicta ea soluta cumque quas doloribus, in veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo corporis similique, dolores molestiae reiciendis repudiandae consequuntur adipisci dolorum, ex facere autem. Inventore provident eum nam vel repudiandae explicabo totam nisi? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquam neque possimus, atque repellat sit, perferendis ad rem accusantium temporibus expedita pariatur sint cupiditate. Fugit architecto beatae modi hic ducimus!

                </p>
                <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique at nulla magnam necessitatibus. Doloribus asperiores alias saepe error reprehenderit sequi placeat unde laborum odio inventore? Velit distinctio eum odio sed? Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae suscipit modi quam fugiat vero ipsum accusantium voluptate iusto minima corrupti tempora doloribus maiores ducimus consequuntur impedit, porro molestias iste consequatur?
                </p>

                <hr></hr>
            </div>
        </main>
    )
}

export default Aboutus