const searchWrapper = document.querySelector(".wrapper");
const inputBox = document.querySelector("input");
const sugBox = document.querySelector(".suggaiton__area");

document.querySelector("input").addEventListener("keyup",function(e){

    let userData = e.target.value;

    let emptArry =[];
    if(userData){
        emptArry= suggestion.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });

        emptArry= emptArry.map((data)=>{
            return  data= "<li>"+data+"</li>";
        })

        searchWrapper.classList.add("active");


    }else{
        searchWrapper.classList.remove("active");
    }

    showSuggestions(emptArry);

})

function showSuggestions(list){

    let listData;
    if(!list.length){
        userValue=inputBox.value;
        listData="<li>"+userValue+"</li>";
    }else{
        listData=list.join("");
    }

    sugBox.innerHTML=listData;

    console.log(listData)

}