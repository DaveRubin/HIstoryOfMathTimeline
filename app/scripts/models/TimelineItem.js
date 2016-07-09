/**
 * Created by david on 04/07/2016.
 */
TimelineItem = function (jsonObject) {
    this.name = jsonObject.gsx$info;
    this.name = this.name ["$t"];
    this.yearName = jsonObject.gsx$time;
    this.yearName = this.yearName["$t"];
    this.yearStart = jsonObject.gsx$fromyear;
    this.yearStart = Number(this.yearStart["$t"]);
    this.yearEnd = jsonObject.gsx$toyear
    this.yearEnd = Number(this.yearEnd["$t"]);
};