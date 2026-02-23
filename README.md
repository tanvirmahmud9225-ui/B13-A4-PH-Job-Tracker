
## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
    Ans: 
    #  getElementById() – এটি শুধু  একটি নির্দিষ্ট ID দিয়ে আমাদের খুঁজে বের করে দেয়। যদি element খুঁজে না পাই তাহালে null return করে। এটি খুবই দ্রুত কাজ করে। সবথেকে শক্তি বেশি।

    #  getElementsByClassName – একই class এর element গুলোকে select করে। এটা HTML collection return (array like object) করে। এটা live collection, dom পরিবর্তন হলে আপডেট হয়। যদি element খুঁজে না পায় তাহলে undefind return করে।

    #  querySelector() –এটি শুধুমাত্র প্রথম element দেয়।

    #  querySelectorAll() –এটি সবগুলো css selector কে রিটার্ন করে। Node List Return করে। এটা । dom পরিবর্তন হলে auto update হয় না।


### 2. How do you create and insert a new element into the DOM?
    Ans: document.creatElement('') –এটা দিয়ে আমরা নতুন element  তৈরি করতে পারি।
    তারপর আমরা appendChild() দিয়ে কোনো একটি নির্দিষ্ট element কে যুক্ত করতে পারি।


### 3. What is Event Bubbling? And how does it work?
   Ans: Event Bubbling  হলো যখন কোনো element এ event ঘটে তখন সেই event ধাপে ধাপে তার  parent  এ যেতে যেতে document পর্যন্ত চলে যায়। অর্থাৎ event নিচের element  থেকে bubble করে উপরের দিকে উঠে। এটি প্রথমে target event এ কাজ করে। তারপর তার parent এ তারপর তার parent এ এভাবে উপরের দিকে যাবে।




### 4. What is Event Delegation in JavaScript? Why is it useful?
   Ans: event delegation হলো এমন একটি প্রক্রিয়া যেখানে প্রতিটি element এ  event listener  না বসিয়ে শুধুমাত্র তার parent এ event listener বসানো হয়। এটি event bubbling ভিত্তিকে কাজে লাগিয়ে কাজ করে। এখানে event.target দিয়ে বোঝাতে পারি কোথায় click করা হয়েছে।



### 5. What is the difference between preventDefault() and stopPropagation() methods?
   Ans: 
    # preventDefault() – কোনো element এর উপর ব্রাউজারের যে default behaviour থাকে সেটা বন্ধ করে দেয়।

    # stopPropagation() – event এর bubbling বা capturing বন্ধ করে দেয়।


