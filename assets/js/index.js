// console.log("hi")


//Question 1
const button = document.querySelector('.button');

let clickCount = 0
let checkNo = true

const isEven = (num) => {
    if(num%2 === 0){
        checkNo = true
    }else {
        checkNo = false
    }
}

document.addEventListener("click", () => {
    clickCount += 1

    isEven(clickCount)

    if(checkNo === false){
        button.setAttribute('style', 'background-color:#d9534f !important');
        let color = button.style.color = "white";
    }
    
    if(checkNo === true){
        button.setAttribute('style', 'background-color:white !important');
        button.style.color = "black";
    }

   
});

//Question 2

fetch("https://jsonplaceholder.typicode.com/todos")
.then(res => res.json())
.then(data => {

    console.log(data)

    let usersData = data.map(user => {
        return (
            `<div class="userCard">
                <h3>${user.title}</h3>
                <p>Id: <b>${user.id}</b></p>
                <p>Completed: <b>${user.completed}</b></p>
                <p>userId: <b>${user.userId}</b></p>
            </div>`
        )
    })

    let container = document.querySelector("#userContainer");
	container.innerHTML = usersData
})

//Question 3

fetch("https://jsonmock.hackerrank.com/api/articles")
.then(res => res.json())
.then(data => {

    console.log(data.data)

    let month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    let storyData = data.data.map(story => {

        if(story.story_id === null){
            let today = new Date()

            let dd = today.getDate()
            let mm = today.getMonth()+1
            let yyyy = today.getFullYear()
            let thisMonth = (month[mm - 1])

            today = mm+'/'+dd+'/'+yyyy+" ("+`${thisMonth} ${dd}, ${yyyy}`+")"
            
            story.created_at = today

            console.log(story.created_at)

            return (
                `<div class="storyCard">
                    <h3>${story.title}</h3>
                    <p>${story.author}</p>
                    <p class="story-date">Date Format Changed: <b>${story.created_at}</b></p>
                    <p>${story.num_comments}</p>
                    p>${story.url}</p>
                </div>`
            )
        }
    })
    
    let container = document.querySelector("#storyContainer");
	container.innerHTML = storyData
})