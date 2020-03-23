<template>
  <div class="calendar">
    <div class="date-header">
      <div class="prev-month" @click="prevMonth" />
      <div class="show-date">{{year}}年{{month}}月{{day}}日</div>
      <div class="next-month" @click="nextMonth" />
    </div>
    <div class="date-content">
      <div class="week-header">
        <!-- 星期几 -->
        <div v-for="item in week" :key="item">{{item}}</div>
      </div>
      <div class="week-day">
        <div class="every-day" v-for="item in 42" :key="item">
          <div
            v-if="item - beginDay > 0 && item - beginDay <= lastDay"
            :class="{'now-day': item - beginDay == day, 'active-day' :item - beginDay==day}"
            @click="handle"
            :data-day="item - beginDay"
          >{{item - beginDay}}</div>
          <div v-else-if="item - beginDay <= 0" class="other-day">{{item - beginDay + pervMonthDay}}</div>
          <div v-else class="other-day">{{item - beginDay - lastDay}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      week: ["一", "二", "三", "四", "五", "六", "日"],
      year: null,
      month: null,
      day: null
    };
  },
  created() {
    this.getInitTime();
  },
  methods: {
    getInitTime() {
      const date = new Date();
      this.year = date.getFullYear();
      this.month = date.getMonth() + 1;
      this.day = date.getDate();
    },
    handle(e) {
      this.day = e.target.dataset.day;
    },
    prevMonth() {
      if (this.month == 1) {
        this.month = 13;
        this.year--;
      }
      this.month--;
    },
    nextMonth() {
      if (this.month == 12) {
        this.month = 0;
        this.year++;
      }
      this.month++;
      console.log(this.month);
    }
  },
  computed: {
    beginDay() {
      let day = new Date(this.year, this.month - 1, 1).getDay();
      if (day === 0) {
        day = 7;
      }
      return day - 1;
    },
    lastDay() {
    //   let day = new Date(this.year, this.month, 0).getDate();
    //   console.log(day);
      return new Date(this.year, this.month, 0).getDate();
    },
    pervMonthDay() {
      let day = new Date(this.year, this.month - 1, 0).getDate();
      return day;
    }
  }
};
</script>

<style>
.calendar {
  width: 500px;
  margin-left: 100px;
}

.date-header {
  width: 100%;
  display: flex;
  line-height: 30px;
}

.prev-month,
.next-month {
  border: 15px solid transparent;
  width: 0;
  height: 0;
  cursor: pointer;
}

.prev-month {
  border-right-color: #007fff;
}

.next-month {
  border-left-color: #007fff;
}

.show-date {
  flex: 1;
  text-align: center;
  color: #007fff;
}
.week-header {
  display: flex;
}

.week-header > div {
  flex: 1;
  text-align: center;
  line-height: 30px;
  background-color: #007fff;
  color: #fff;
  font-weight: 600;
}

.week-day {
  width: 100%;
}
.every-day {
  display: inline-block;
  width: 14.28%;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
}
.other-day {
  color: #ccc;
}
.now-day {
  background-color: #007fff;
  color: #fff;
  font-weight: 600;
}
.active-day:not(.now-day) {
  color: #007fff;
  border: 2px solid #007fff;
  line-height: 46px;
}
</style>