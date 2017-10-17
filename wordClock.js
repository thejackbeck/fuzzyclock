
module.exports = {
    currentTime : function() {
        const currentTime = new Date();
        const roundedMinutes = this.roundMinutes(currentTime.getMinutes());
        const minuteWords = this.minutesToWords(roundedMinutes);
        const roundedHours = this.roundHours(currentTime);
        const hourWords = this.hoursToWords(roundedHours);
        return `${minuteWords} ${hourWords}`;
    },

    minutesToWords : function (roundedMinutes) {
        return this.minutesWords[roundedMinutes/5];
    },

    hoursToWords : function (roundedHours) {
        return this.hourWords[roundedHours];
    },

    roundMinutes(minutes) {
        return Math.round(minutes/5) * 5 % 60;
    },

    roundHours(time) {
      if(time.getMinutes() > 30) {
          return (time.getHours() +1) % 12;
      } else {
          return time.getHours() % 12;
      }
    },
    minutesWords : ['', 'five after', 'ten after', 'quarter after',
        'twenty past', 'twenty-five past', 'half past', 'twenty-five til', 'twenty til', 'quarter til',
        'ten to', '5 til'],
    hourWords : ['twelve', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven']
};
