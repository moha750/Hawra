var
  words = ['✨اهلاً أهلاً بِـ ريشة أدِيب',
  '🤍إن شاء الله تكوني بخير',
  '!🌚بقولك سر بس لا أحد يدري',
  '👨🏽‍💻بس قبلها كيف وانا مهكر كيبوردك',
  'المهم، تعرفي هالتاريخ🤔؟',
  '2003/12/03',
  '😍اييوه يوم ميلاد الي تطالع الشاشه',
  '🌻كُل عام وأنتي دائمًا مُتوردة',
  'تتوقعي خلصت على كذا😏؟',
  '!😎لا طبعًا مُفاجئاتي ما تخلص، وهاذي البدايه بس',
  '🎁انزلي تحت وأستمتعي بباقي المُفاجئات'],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 10,
  speed = 100;

var wordflick = function(){
  setInterval(function(){
      if (forwards) {
        if(offset >= words[i].length){
          ++skip_count;
          if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      }
      else {
         if(offset == 0){
            forwards = true;
            i++;
            offset = 0;
            if(i >= len){
              i=0;
            } 
         }
      }
      part = words[i].substr(0, offset);
      if (skip_count == 0) {
        if (forwards) {
          offset++;
        }
        else {
          offset--;
        }
      }
    	$('.word').text(part);
  },speed);
};

$(document).ready(function(){
  wordflick();
});

//جزء

window.open = function() {};
window.print = function() {};
// Support hover state for mobile.
if (false) {
    window.ontouchstart = function() {};
}