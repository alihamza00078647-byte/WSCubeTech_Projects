const paragraphs = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid beatae iure officiis corporis voluptatem tempore quibusdam, minima porro ipsum rerum odit esse provident architecto sint reiciendis vitae at. Exercitationem, ullam!", 
"Dolore optio doloremque, neque dolorem, id qui quae non laborum corporis quas odio. Laudantium, sunt! Animi, voluptatum quasi unde repudiandae distinctio totam, delectus mollitia nostrum cumque, consectetur sed temporibus id.",
"Earum corrupti rerum vero nisi repellendus ab cum beatae quia reprehenderit sed sint, minus, nam aspernatur quos dolores error repudiandae veniam quas vel. Placeat necessitatibus facere accusamus illo dolores nostrum.",
" Odit deserunt enim aspernatur atque reiciendis consequatur sed, illo impedit dolorum delectus pariatur eos maiores minus itaque consequuntur animi ipsum mollitia expedita exercitationem, cumque aut, ut quas debitis. Tempore, modi.",
"Totam molestiae adipisci et voluptates dolorum fugiat ducimus consequatur, perferendis, dicta repellat saepe? Repudiandae assumenda libero soluta quasi suscipit hic dignissimos iure, earum itaque asperiores rem aut ratione? Voluptates, aut.",
"Temporibus repellat accusamus ipsum. Magnam, ipsum quae. Saepe, veritatis nemo voluptate voluptatibus totam asperiores nesciunt, unde animi, dolores iure vitae corrupti. Beatae, animi ex? Laboriosam sequi iste deserunt dignissimos earum!",
"Officia culpa incidunt saepe nisi quis tempora odio aspernatur, ullam, repellendus inventore quasi nulla neque odit quo molestias repudiandae similique amet. Fugit sunt, repellendus error quia magni rem ullam vel!",
"Corporis praesentium, possimus cupiditate neque sint soluta exercitationem sequi quidem enim laboriosam. In magnam eius libero impedit? Enim mollitia quia dolorem dolor aliquid aut aliquam minus omnis ipsam? Necessitatibus, vero.",
"Qui eligendi laudantium accusantium enim cumque atque iure molestiae at esse velit. Ducimus architecto animi, voluptatum, libero quas corrupti nihil, at perspiciatis accusamus praesentium aperiam nulla ut consequuntur omnis. Dolores.",
"Placeat nobis aperiam, totam cupiditate ipsam distinctio cum obcaecati neque inventore soluta? Labore molestias obcaecati, laboriosam suscipit voluptate iure dolores tenetur. Id quaerat eum expedita neque molestias ullam aliquid facere?"
];

const parah = document.querySelector(".parahs");
const inputArea = document.querySelector("#input-area");
const btn = document.querySelector(".btn");

const randomNum = () => {
    num = Math.floor(Math.random() * 9);
    return paragraphs[num];
}

btn.addEventListener("click", () => {
    parah.innerHTML = "";
    for (i = 0; i<inputArea.value; i++){
        let p = document.createElement("p");
        p.innerText = randomNum();
        parah.appendChild(p);
    }
});