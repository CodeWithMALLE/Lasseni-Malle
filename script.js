// basculer entre les diff sections

(
    () => {
        const nav_links = document.querySelectorAll('.nav-link')

        const sections = document.querySelectorAll('.section')

        function cacher_sections(indice) {
            sections[indice].classList.add('voir')

            for (let i = 0; i < sections.length; i++) {
                if (i !== indice) {
                    const my_bool = sections[i].classList.contains('voir')

                    if (my_bool) {
                        sections[i].classList.remove('voir')
                    }
                }
            }
        }
        const btn_engager = document.querySelector("#btn-engager")

        btn_engager.addEventListener('click', () => {
            cacher_sections(3)
            desactive_le_reste(nav_links[3])
        })

        const btn_a_propos = document.querySelector("#btn-a-propos")

        btn_a_propos.addEventListener('click', () => {
            cacher_sections(1)
            desactive_le_reste(nav_links[1])
        })

        function desactive_le_reste(target){
            if(!target.firstElementChild.classList.contains('entouree')){
                target.firstElementChild.classList.add('entouree')
            }

            for(link of nav_links){
                if(link !== target){
                    if(link.firstElementChild.classList.contains('entouree')){
                        link.firstElementChild.classList.remove('entouree')
                    }
                }
            }
        }

        for (let i = 0; i < nav_links.length; i++) {
            nav_links[i].addEventListener("click",
                () => {
                    cacher_sections(i)
                    // const menu_logo = nav_links[i].firstElementChild
                    desactive_le_reste(nav_links[i])
                })
        }
    }
)()

function obsetvateur() {

    const ratio = 1
    const options = {
        root: null,
        threshold: ratio,
        rootMargin: "0px"
    }

    const action = (entries, myObserver) => {
        entries.forEach((entry) => {
            if(entry.intersectionRatio === 1){
                entry.target.classList.add("defile-visible")
                myObserver.unobserve(entry.target)
            }
        });
    }

    const myObserver = new IntersectionObserver(action, options)
    const targets = document.querySelectorAll(".une-form")
    targets.forEach(
        (target) => {
            myObserver.observe(target)
        }
    )
}



function createForm() {
    let les_form = document.querySelectorAll('.une-form')
    // les_form.forEach((form) => {
    //     observer.observe(target);
    // })
    for (let i = 0; i < 20; i++) {
        const parent = les_form[0].parentNode;
        const copy = les_form[1].cloneNode(true)
        parent.appendChild(copy)
    }
}

createForm()
obsetvateur()

function entouree(){
    const menu_items = document.querySelector('nav-item')

    menu_items.forEach(
        (item) => {

        }
    )
}
