//loading all lesssons from api
const loadLessons=()=>{
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res=>res.json())
    .then(data=>displayLessons(data.data))
};
//display all lessons
const displayLessons=lessons=>{

    const lessonContainer=document.querySelector('.lesson-container');
    lessons.forEach(lesson=>{
        const lessonDiv=document.createElement('div');
        // lessonDiv.classList.add('lesson', 'flex', 'items-center', 'gap-2', 'border', 'border-[#422AD5]', 'rounded-sm', 'px-5', 'py-2', 'cursor-pointer');
       
        lessonDiv.innerHTML=`

            <div onclick="loadWordsByLesson(${lesson.level_no})" class="flex items-center gap-2 border-3 border-[#422AD5] rounded-sm px-5 py-2 cursor-pointer">
            <img src="assets/fa-book-open.png" alt="">
            <p  class="text-x font-semibold">Lesson ${lesson.level_no}</p>
            </div>
        `;
        lessonContainer.appendChild(lessonDiv);
    });
}

// Call the function to load lessons when page loads
loadLessons();

const loadWordsByLesson=(lessonNo)=>{
    fetch(`https://openapi.programming-hero.com/api/level/${lessonNo}`)
    .then(res=>res.json())
    .then(data=>displayWords(data.data))
}

const displayWords=words=>{
 if(words.length===0){
    displayNoWordsFound();
    return;
}
    console.log(words);
    const wordContainer=document.getElementById('word-container');  
    wordContainer.innerHTML=''; // Clear previous words
    words.forEach(word=>{
        const wordDiv=document.createElement('div');
        
        wordDiv.innerHTML=`
            <div class="word-card shadow-sm space-y-8 text-center  max-w[547px] py-10 px-8 rounded-lg">
                <h1 class="text-4xl font-bold">${word.word ? word.word : "No word found"}</h1>
                <p class="font-medium">Meaning / Pronounciation</p>
                <p class="text-3xl font-bold text-gray-500">"${word.meaning ? word.meaning : "No meaning found"} / ${word.pronunciation}"</p>
                <div class="flex justify-between items-center mt-4">
                    <button id="word-info" onclick="loadWordInfo('${word.id}')" class="info bg-[#1A91FF10] p-2 rounded-lg"><i class="fa-solid fa-circle-info"></i></button>
                    <button id="word-voice" onclick="pronounceWord('${word.word}')" class="voice bg-[#1A91FF10] p-2 rounded-lg"><i class="fa-solid fa-volume-high"></i></button>
                </div>
            </div>
        `;
        wordContainer.appendChild(wordDiv);
    });
}

// load word info from api
const loadWordInfo=id=>{
    fetch(`https://openapi.programming-hero.com/api/word/${id}`)
    .then(res=>res.json())
    .then(data=>displayWordInfo(data.data))
}
//display word info in modal
const displayWordInfo=data=>{
    console.log(data);
    const modalContent=document.getElementById('modal-content');
    modalContent.innerHTML=`
        <h1>${data.word} /: ${data.pronunciation}</h1>
        <p>meaning</p>
        <p>${data.meaning}</p>
        <p>Example</p>
        <p>${data.sentence}</p>
        <p>সমার্থক শব্দ গুল</p>
       
        <div id="synonyms-container">
            ${createElement(data.synonyms)}
        </div>

    `;
    document.getElementById('showWordDetails').showModal();
}

const createElement = (arr) => {
    return arr.map(syn => `<span class="btn mx-1 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">${syn}</span>`).join(' ');
}

function pronounceWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-EN"; // English
  window.speechSynthesis.speak(utterance);
}


 function toggleFAQ(id) {
      const answer = document.getElementById(`answer-${id}`);
      const icon = document.getElementById(`icon-${id}`);
      
      if (answer.classList.contains("hidden")) {
        answer.classList.remove("hidden");
        icon.textContent = "-";
      } else {
        answer.classList.add("hidden");
        icon.textContent = "+";
      }
    };

const displayNoWordsFound=()=>{
    const wordContainer=document.getElementById('word-container');  
    wordContainer.innerHTML=`
        <section class="bg-[#F8F8F8] flex flex-col justify-center items-center py-10 w-[80vw] mx-auto rounded-lg my-10">
   <img src="assets/alert-error.png" alt="">
   <p>এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
   <h1 class="text-gray-500 text-3xl">নেক্সট Lesson এ যান</h1>

    </section>`;
    }
