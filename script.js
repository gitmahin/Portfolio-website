function autoType(querySelector, word) {
    new Typed(querySelector, {
        strings: [word],
        typeSpeed: 30,
        backSpeed: 30,
        loop: false,
    })
}

autoType(".type-java", "Java")
autoType(".type-js", "Javascript")
autoType(".type-py", "Python")
autoType(".type-nextjs", "Next Js")
autoType(".type-jsx", "React")
autoType(".type-android", "Android Studio")

let typeMyTitle = new Typed(".type-my-title", {
    strings: ["Programmer", "Web developer", "App developer"],
    typeSpeed: 30,
    backSpeed: 30,
    loop: true
})

function elementAnimate(queryname, class1AR, class2AR) {
    const observer = new IntersectionObserver(e => {
        e.forEach((item) => {
            if (item.isIntersecting) {
                item.target.classList.add(class1AR)
                item.target.classList.add(class2AR)
            } else {
                item.target.classList.remove(class1AR)
                item.target.classList.remove(class2AR)
            }
        })
    })


    const hiddenElements = document.querySelectorAll(queryname)
    hiddenElements.forEach(element => {
        observer.observe(element)
    })

}

elementAnimate(".hidden", "visible", "animate")
elementAnimate(".animateCards", "animatedCards")
elementAnimate(".leftAni", "leftAnimated")

let menuSlider = document.querySelector('.active-menu-slider')
let menuList = document.querySelectorAll(".header-menu ul a")
let indexValue = 0
let leftPosition = 0

menuList.forEach((element, index) => {
    menuSlider.style.width = menuList[0].clientWidth + "px"
    menuSlider.style.left = leftPosition + "px"
    element.addEventListener("click", () => {
        menuSlider.style.width = element.clientWidth + "px"
        indexValue = index
        get_left_p_value()
        menuSlider.style.left = leftPosition + "px"
        leftPosition = 0
    })
})

function get_left_p_value() {
    for (let i = 0; i < indexValue; i++) {
        const element = menuList[i];
        leftPosition += element.clientWidth
    }
}

const button = document.querySelector(".log-btn")
button.addEventListener("click", () => {
    window.alert("Log in Clicked")
})
