
let interviewList = [];
let rejectedList = [];
let currentStatus = "";

if (interviewList.length) {
    document.getElementById("noJob-section").classList.remove("hidden")
}


// all main div here
const allCardSection = document.getElementById("allCards");
const mainContainer = document.querySelector("main");
const filterSection = document.getElementById("filtered-section");
const noJobSection = document.getElementById("noJob-section")


// all filter btn here
const allFilterBtn = document.getElementById("all-filter-btn")
const interviewFilterBtn = document.getElementById("interview-filter-btn")
const rejectedFilterBtn = document.getElementById("rejected-filter-btn")


// total জবের সংখ্যা বের করা হয়েছে
const totalJobs = document.getElementById("totalJobs");
const total = document.getElementById("total");

//all count here
const interviewCount = document.getElementById("Interview")
const rejectedCount = document.getElementById("Rejected")

function calculateTotal() {
    // total.innerText = allCardSection.children.length;
    // totalJobs.innerText = allCardSection.children.length;
    const totalAllJobs = allCardSection.children.length;

    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

    // ======== Dynamic job text ==========//
    if (currentStatus === "interview-filter-btn") {
        if (interviewList.length === 0) {
            totalJobs.innerText = "0";
        } else {
            totalJobs.innerText = interviewList.length + " of " + totalAllJobs;
        }
    } else if (currentStatus === "rejected-filter-btn") {
        if (rejectedList.length === 0) {
            totalJobs.innerText = "0"
        } else {
            totalJobs.innerText = rejectedList.length + " of " + totalAllJobs;
        }
    }
    else {
        totalJobs.innerText = totalAllJobs;
    }
    total.innerText = totalAllJobs;
}
calculateTotal()


function toggleStyle(id) {
    currentStatus = id;


    allFilterBtn.classList.remove("bg-blue-500", "text-white");
    interviewFilterBtn.classList.remove("bg-blue-500", "text-white");
    rejectedFilterBtn.classList.remove("bg-blue-500", "text-white");

    allFilterBtn.classList.add("bg-gray-300", "text-black");
    interviewFilterBtn.classList.add("bg-gray-300", "text-black");
    rejectedFilterBtn.classList.add("bg-gray-300", "text-black");

    const selected = document.getElementById(id);
    selected.classList.remove("bg-gray-300", "text-black");
    selected.classList.add("bg-blue-500", "text-white");

    if (id === "interview-filter-btn") {
        allCardSection.classList.add("hidden");
        filterSection.classList.remove("hidden");
        renderInterview();
    } else if (id === "all-filter-btn") {
        allCardSection.classList.remove("hidden");
        filterSection.classList.add("hidden");
        noJobSection.classList.add("hidden")
    } else if (id === "rejected-filter-btn") {
        allCardSection.classList.add("hidden");
        filterSection.classList.remove("hidden");
        renderRejected();
    }

    calculateTotal()

}












































