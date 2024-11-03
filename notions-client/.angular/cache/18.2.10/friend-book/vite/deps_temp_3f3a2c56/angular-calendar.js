import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-SYOHKKMM.js";
import {
  AsyncPipe,
  CommonModule,
  DOCUMENT,
  I18nPluralPipe,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  SlicePipe,
  formatDate,
  isPlatformBrowser
} from "./chunk-5JAL5523.js";
import {
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver$1,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  LOCALE_ID,
  NgModule,
  NgZone,
  Optional,
  Output,
  PLATFORM_ID,
  Pipe,
  Renderer2,
  ViewContainerRef,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵpureFunction6,
  ɵɵpureFunction7,
  ɵɵpureFunctionV,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-I2FEAVWX.js";
import {
  BehaviorSubject,
  Observable,
  ReplaySubject,
  Subject,
  combineLatest,
  count,
  distinctUntilChanged,
  filter,
  fromEvent,
  interval,
  map,
  merge,
  mergeMap,
  of,
  pairwise,
  share,
  startWith,
  switchMap,
  switchMapTo,
  take,
  takeLast,
  takeUntil,
  tap,
  timer
} from "./chunk-J4ZQI5EQ.js";
import "./chunk-WKWW5KYN.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// node_modules/positioning/dist/positioning.js
var Positioning = (
  /** @class */
  function() {
    function Positioning2() {
    }
    Positioning2.prototype.getAllStyles = function(element) {
      return window.getComputedStyle(element);
    };
    Positioning2.prototype.getStyle = function(element, prop) {
      return this.getAllStyles(element)[prop];
    };
    Positioning2.prototype.isStaticPositioned = function(element) {
      return (this.getStyle(element, "position") || "static") === "static";
    };
    Positioning2.prototype.offsetParent = function(element) {
      var offsetParentEl = element.offsetParent || document.documentElement;
      while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
        offsetParentEl = offsetParentEl.offsetParent;
      }
      return offsetParentEl || document.documentElement;
    };
    Positioning2.prototype.position = function(element, round) {
      if (round === void 0) {
        round = true;
      }
      var elPosition;
      var parentOffset = {
        width: 0,
        height: 0,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      };
      if (this.getStyle(element, "position") === "fixed") {
        elPosition = element.getBoundingClientRect();
        elPosition = {
          top: elPosition.top,
          bottom: elPosition.bottom,
          left: elPosition.left,
          right: elPosition.right,
          height: elPosition.height,
          width: elPosition.width
        };
      } else {
        var offsetParentEl = this.offsetParent(element);
        elPosition = this.offset(element, false);
        if (offsetParentEl !== document.documentElement) {
          parentOffset = this.offset(offsetParentEl, false);
        }
        parentOffset.top += offsetParentEl.clientTop;
        parentOffset.left += offsetParentEl.clientLeft;
      }
      elPosition.top -= parentOffset.top;
      elPosition.bottom -= parentOffset.top;
      elPosition.left -= parentOffset.left;
      elPosition.right -= parentOffset.left;
      if (round) {
        elPosition.top = Math.round(elPosition.top);
        elPosition.bottom = Math.round(elPosition.bottom);
        elPosition.left = Math.round(elPosition.left);
        elPosition.right = Math.round(elPosition.right);
      }
      return elPosition;
    };
    Positioning2.prototype.offset = function(element, round) {
      if (round === void 0) {
        round = true;
      }
      var elBcr = element.getBoundingClientRect();
      var viewportOffset = {
        top: window.pageYOffset - document.documentElement.clientTop,
        left: window.pageXOffset - document.documentElement.clientLeft
      };
      var elOffset = {
        height: elBcr.height || element.offsetHeight,
        width: elBcr.width || element.offsetWidth,
        top: elBcr.top + viewportOffset.top,
        bottom: elBcr.bottom + viewportOffset.top,
        left: elBcr.left + viewportOffset.left,
        right: elBcr.right + viewportOffset.left
      };
      if (round) {
        elOffset.height = Math.round(elOffset.height);
        elOffset.width = Math.round(elOffset.width);
        elOffset.top = Math.round(elOffset.top);
        elOffset.bottom = Math.round(elOffset.bottom);
        elOffset.left = Math.round(elOffset.left);
        elOffset.right = Math.round(elOffset.right);
      }
      return elOffset;
    };
    Positioning2.prototype.positionElements = function(hostElement, targetElement, placement, appendToBody) {
      var _a = placement.split("-"), _b = _a[0], placementPrimary = _b === void 0 ? "top" : _b, _c = _a[1], placementSecondary = _c === void 0 ? "center" : _c;
      var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
      var targetElStyles = this.getAllStyles(targetElement);
      var marginTop = parseFloat(targetElStyles.marginTop);
      var marginBottom = parseFloat(targetElStyles.marginBottom);
      var marginLeft = parseFloat(targetElStyles.marginLeft);
      var marginRight = parseFloat(targetElStyles.marginRight);
      var topPosition = 0;
      var leftPosition = 0;
      switch (placementPrimary) {
        case "top":
          topPosition = hostElPosition.top - (targetElement.offsetHeight + marginTop + marginBottom);
          break;
        case "bottom":
          topPosition = hostElPosition.top + hostElPosition.height;
          break;
        case "left":
          leftPosition = hostElPosition.left - (targetElement.offsetWidth + marginLeft + marginRight);
          break;
        case "right":
          leftPosition = hostElPosition.left + hostElPosition.width;
          break;
      }
      switch (placementSecondary) {
        case "top":
          topPosition = hostElPosition.top;
          break;
        case "bottom":
          topPosition = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
          break;
        case "left":
          leftPosition = hostElPosition.left;
          break;
        case "right":
          leftPosition = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
          break;
        case "center":
          if (placementPrimary === "top" || placementPrimary === "bottom") {
            leftPosition = hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2;
          } else {
            topPosition = hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2;
          }
          break;
      }
      targetElement.style.transform = "translate(" + Math.round(leftPosition) + "px, " + Math.round(topPosition) + "px)";
      var targetElBCR = targetElement.getBoundingClientRect();
      var html = document.documentElement;
      var windowHeight = window.innerHeight || html.clientHeight;
      var windowWidth = window.innerWidth || html.clientWidth;
      return targetElBCR.left >= 0 && targetElBCR.top >= 0 && targetElBCR.right <= windowWidth && targetElBCR.bottom <= windowHeight;
    };
    return Positioning2;
  }()
);
var placementSeparator = /\s+/;
var positionService = new Positioning();
function positionElements(hostElement, targetElement, placement, appendToBody, baseClass) {
  var placementVals = Array.isArray(placement) ? placement : placement.split(placementSeparator);
  var allowedPlacements = ["top", "bottom", "left", "right", "top-left", "top-right", "bottom-left", "bottom-right", "left-top", "left-bottom", "right-top", "right-bottom"];
  var classList = targetElement.classList;
  var addClassesToTarget = function(targetPlacement) {
    var _a = targetPlacement.split("-"), primary = _a[0], secondary = _a[1];
    var classes = [];
    if (baseClass) {
      classes.push(baseClass + "-" + primary);
      if (secondary) {
        classes.push(baseClass + "-" + primary + "-" + secondary);
      }
      classes.forEach(function(classname) {
        classList.add(classname);
      });
    }
    return classes;
  };
  if (baseClass) {
    allowedPlacements.forEach(function(placementToRemove) {
      classList.remove(baseClass + "-" + placementToRemove);
    });
  }
  var hasAuto = placementVals.findIndex(function(val) {
    return val === "auto";
  });
  if (hasAuto >= 0) {
    allowedPlacements.forEach(function(obj) {
      if (placementVals.find(function(val) {
        return val.search("^" + obj) !== -1;
      }) == null) {
        placementVals.splice(hasAuto++, 1, obj);
      }
    });
  }
  var style2 = targetElement.style;
  style2.position = "absolute";
  style2.top = "0";
  style2.left = "0";
  style2["will-change"] = "transform";
  var testPlacement;
  var isInViewport = false;
  for (var _i = 0, placementVals_1 = placementVals; _i < placementVals_1.length; _i++) {
    testPlacement = placementVals_1[_i];
    var addedClasses = addClassesToTarget(testPlacement);
    if (positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody)) {
      isInViewport = true;
      break;
    }
    if (baseClass) {
      addedClasses.forEach(function(classname) {
        classList.remove(classname);
      });
    }
  }
  if (!isInViewport) {
    testPlacement = placementVals[0];
    addClassesToTarget(testPlacement);
    positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody);
  }
  return testPlacement;
}

// node_modules/calendar-utils/calendar-utils.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __spreadArray = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var DAYS_OF_WEEK;
(function(DAYS_OF_WEEK2) {
  DAYS_OF_WEEK2[DAYS_OF_WEEK2["SUNDAY"] = 0] = "SUNDAY";
  DAYS_OF_WEEK2[DAYS_OF_WEEK2["MONDAY"] = 1] = "MONDAY";
  DAYS_OF_WEEK2[DAYS_OF_WEEK2["TUESDAY"] = 2] = "TUESDAY";
  DAYS_OF_WEEK2[DAYS_OF_WEEK2["WEDNESDAY"] = 3] = "WEDNESDAY";
  DAYS_OF_WEEK2[DAYS_OF_WEEK2["THURSDAY"] = 4] = "THURSDAY";
  DAYS_OF_WEEK2[DAYS_OF_WEEK2["FRIDAY"] = 5] = "FRIDAY";
  DAYS_OF_WEEK2[DAYS_OF_WEEK2["SATURDAY"] = 6] = "SATURDAY";
})(DAYS_OF_WEEK || (DAYS_OF_WEEK = {}));
var DEFAULT_WEEKEND_DAYS = [DAYS_OF_WEEK.SUNDAY, DAYS_OF_WEEK.SATURDAY];
var DAYS_IN_WEEK = 7;
var HOURS_IN_DAY = 24;
var MINUTES_IN_HOUR = 60;
var SECONDS_IN_DAY = 60 * 60 * 24;
function getExcludedSeconds(dateAdapter, _a) {
  var startDate = _a.startDate, seconds = _a.seconds, excluded = _a.excluded, precision = _a.precision;
  if (excluded.length < 1) {
    return 0;
  }
  var addSeconds = dateAdapter.addSeconds, getDay = dateAdapter.getDay, addDays = dateAdapter.addDays;
  var endDate = addSeconds(startDate, seconds - 1);
  var dayStart = getDay(startDate);
  var dayEnd = getDay(endDate);
  var result = 0;
  var current = startDate;
  var _loop_1 = function() {
    var day = getDay(current);
    if (excluded.some(function(excludedDay) {
      return excludedDay === day;
    })) {
      result += calculateExcludedSeconds(dateAdapter, {
        dayStart,
        dayEnd,
        day,
        precision,
        startDate,
        endDate
      });
    }
    current = addDays(current, 1);
  };
  while (current < endDate) {
    _loop_1();
  }
  return result;
}
function calculateExcludedSeconds(dateAdapter, _a) {
  var precision = _a.precision, day = _a.day, dayStart = _a.dayStart, dayEnd = _a.dayEnd, startDate = _a.startDate, endDate = _a.endDate;
  var differenceInSeconds = dateAdapter.differenceInSeconds, endOfDay = dateAdapter.endOfDay, startOfDay = dateAdapter.startOfDay;
  if (precision === "minutes") {
    if (day === dayStart) {
      return differenceInSeconds(endOfDay(startDate), startDate) + 1;
    } else if (day === dayEnd) {
      return differenceInSeconds(endDate, startOfDay(endDate)) + 1;
    }
  }
  return SECONDS_IN_DAY;
}
function getWeekViewEventSpan(dateAdapter, _a) {
  var event = _a.event, offset = _a.offset, startOfWeekDate = _a.startOfWeekDate, excluded = _a.excluded, precision = _a.precision, totalDaysInView = _a.totalDaysInView;
  var max = dateAdapter.max, differenceInSeconds = dateAdapter.differenceInSeconds, addDays = dateAdapter.addDays, endOfDay = dateAdapter.endOfDay, differenceInDays = dateAdapter.differenceInDays;
  var span = SECONDS_IN_DAY;
  var begin = max([event.start, startOfWeekDate]);
  if (event.end) {
    switch (precision) {
      case "minutes":
        span = differenceInSeconds(event.end, begin);
        break;
      default:
        span = differenceInDays(addDays(endOfDay(event.end), 1), begin) * SECONDS_IN_DAY;
        break;
    }
  }
  var offsetSeconds = offset * SECONDS_IN_DAY;
  var totalLength = offsetSeconds + span;
  var secondsInView = totalDaysInView * SECONDS_IN_DAY;
  if (totalLength > secondsInView) {
    span = secondsInView - offsetSeconds;
  }
  span -= getExcludedSeconds(dateAdapter, {
    startDate: begin,
    seconds: span,
    excluded,
    precision
  });
  return span / SECONDS_IN_DAY;
}
function getWeekViewEventOffset(dateAdapter, _a) {
  var event = _a.event, startOfWeekDate = _a.startOfWeek, excluded = _a.excluded, precision = _a.precision;
  var differenceInDays = dateAdapter.differenceInDays, startOfDay = dateAdapter.startOfDay, differenceInSeconds = dateAdapter.differenceInSeconds;
  if (event.start < startOfWeekDate) {
    return 0;
  }
  var offset = 0;
  switch (precision) {
    case "days":
      offset = differenceInDays(startOfDay(event.start), startOfWeekDate) * SECONDS_IN_DAY;
      break;
    case "minutes":
      offset = differenceInSeconds(event.start, startOfWeekDate);
      break;
  }
  offset -= getExcludedSeconds(dateAdapter, {
    startDate: startOfWeekDate,
    seconds: offset,
    excluded,
    precision
  });
  return Math.abs(offset / SECONDS_IN_DAY);
}
function isEventIsPeriod(dateAdapter, _a) {
  var event = _a.event, periodStart = _a.periodStart, periodEnd = _a.periodEnd;
  var isSameSecond = dateAdapter.isSameSecond;
  var eventStart = event.start;
  var eventEnd = event.end || event.start;
  if (eventStart > periodStart && eventStart < periodEnd) {
    return true;
  }
  if (eventEnd > periodStart && eventEnd < periodEnd) {
    return true;
  }
  if (eventStart < periodStart && eventEnd > periodEnd) {
    return true;
  }
  if (isSameSecond(eventStart, periodStart) || isSameSecond(eventStart, periodEnd)) {
    return true;
  }
  if (isSameSecond(eventEnd, periodStart) || isSameSecond(eventEnd, periodEnd)) {
    return true;
  }
  return false;
}
function getEventsInPeriod(dateAdapter, _a) {
  var events = _a.events, periodStart = _a.periodStart, periodEnd = _a.periodEnd;
  return events.filter(function(event) {
    return isEventIsPeriod(dateAdapter, {
      event,
      periodStart,
      periodEnd
    });
  });
}
function getWeekDay(dateAdapter, _a) {
  var date = _a.date, _b = _a.weekendDays, weekendDays = _b === void 0 ? DEFAULT_WEEKEND_DAYS : _b;
  var startOfDay = dateAdapter.startOfDay, isSameDay = dateAdapter.isSameDay, getDay = dateAdapter.getDay;
  var today = startOfDay(/* @__PURE__ */ new Date());
  var day = getDay(date);
  return {
    date,
    day,
    isPast: date < today,
    isToday: isSameDay(date, today),
    isFuture: date > today,
    isWeekend: weekendDays.indexOf(day) > -1
  };
}
function getWeekViewHeader(dateAdapter, _a) {
  var viewDate = _a.viewDate, weekStartsOn = _a.weekStartsOn, _b = _a.excluded, excluded = _b === void 0 ? [] : _b, weekendDays = _a.weekendDays, _c = _a.viewStart, viewStart = _c === void 0 ? dateAdapter.startOfWeek(viewDate, {
    weekStartsOn
  }) : _c, _d = _a.viewEnd, viewEnd = _d === void 0 ? dateAdapter.addDays(viewStart, DAYS_IN_WEEK) : _d;
  var addDays = dateAdapter.addDays, getDay = dateAdapter.getDay;
  var days = [];
  var date = viewStart;
  while (date < viewEnd) {
    if (!excluded.some(function(e) {
      return getDay(date) === e;
    })) {
      days.push(getWeekDay(dateAdapter, {
        date,
        weekendDays
      }));
    }
    date = addDays(date, 1);
  }
  return days;
}
function getDifferenceInDaysWithExclusions(dateAdapter, _a) {
  var date1 = _a.date1, date2 = _a.date2, excluded = _a.excluded;
  var date = date1;
  var diff = 0;
  while (date < date2) {
    if (excluded.indexOf(dateAdapter.getDay(date)) === -1) {
      diff++;
    }
    date = dateAdapter.addDays(date, 1);
  }
  return diff;
}
function getAllDayWeekEvents(dateAdapter, _a) {
  var _b = _a.events, events = _b === void 0 ? [] : _b, _c = _a.excluded, excluded = _c === void 0 ? [] : _c, _d = _a.precision, precision = _d === void 0 ? "days" : _d, _e = _a.absolutePositionedEvents, absolutePositionedEvents = _e === void 0 ? false : _e, viewStart = _a.viewStart, viewEnd = _a.viewEnd;
  viewStart = dateAdapter.startOfDay(viewStart);
  viewEnd = dateAdapter.endOfDay(viewEnd);
  var differenceInSeconds = dateAdapter.differenceInSeconds, differenceInDays = dateAdapter.differenceInDays;
  var maxRange = getDifferenceInDaysWithExclusions(dateAdapter, {
    date1: viewStart,
    date2: viewEnd,
    excluded
  });
  var totalDaysInView = differenceInDays(viewEnd, viewStart) + 1;
  var eventsMapped = events.filter(function(event) {
    return event.allDay;
  }).map(function(event) {
    var offset = getWeekViewEventOffset(dateAdapter, {
      event,
      startOfWeek: viewStart,
      excluded,
      precision
    });
    var span = getWeekViewEventSpan(dateAdapter, {
      event,
      offset,
      startOfWeekDate: viewStart,
      excluded,
      precision,
      totalDaysInView
    });
    return {
      event,
      offset,
      span
    };
  }).filter(function(e) {
    return e.offset < maxRange;
  }).filter(function(e) {
    return e.span > 0;
  }).map(function(entry) {
    return {
      event: entry.event,
      offset: entry.offset,
      span: entry.span,
      startsBeforeWeek: entry.event.start < viewStart,
      endsAfterWeek: (entry.event.end || entry.event.start) > viewEnd
    };
  }).sort(function(itemA, itemB) {
    var startSecondsDiff = differenceInSeconds(itemA.event.start, itemB.event.start);
    if (startSecondsDiff === 0) {
      return differenceInSeconds(itemB.event.end || itemB.event.start, itemA.event.end || itemA.event.start);
    }
    return startSecondsDiff;
  });
  var allDayEventRows = [];
  var allocatedEvents = [];
  eventsMapped.forEach(function(event, index) {
    if (allocatedEvents.indexOf(event) === -1) {
      allocatedEvents.push(event);
      var rowSpan_1 = event.span + event.offset;
      var otherRowEvents = eventsMapped.slice(index + 1).filter(function(nextEvent) {
        if (nextEvent.offset >= rowSpan_1 && rowSpan_1 + nextEvent.span <= totalDaysInView && allocatedEvents.indexOf(nextEvent) === -1) {
          var nextEventOffset = nextEvent.offset - rowSpan_1;
          if (!absolutePositionedEvents) {
            nextEvent.offset = nextEventOffset;
          }
          rowSpan_1 += nextEvent.span + nextEventOffset;
          allocatedEvents.push(nextEvent);
          return true;
        }
      });
      var weekEvents = __spreadArray([event], otherRowEvents, true);
      var id = weekEvents.filter(function(weekEvent) {
        return weekEvent.event.id;
      }).map(function(weekEvent) {
        return weekEvent.event.id;
      }).join("-");
      allDayEventRows.push(__assign({
        row: weekEvents
      }, id ? {
        id
      } : {}));
    }
  });
  return allDayEventRows;
}
function getWeekViewHourGrid(dateAdapter, _a) {
  var events = _a.events, viewDate = _a.viewDate, hourSegments = _a.hourSegments, hourDuration = _a.hourDuration, dayStart = _a.dayStart, dayEnd = _a.dayEnd, weekStartsOn = _a.weekStartsOn, excluded = _a.excluded, weekendDays = _a.weekendDays, segmentHeight = _a.segmentHeight, viewStart = _a.viewStart, viewEnd = _a.viewEnd, minimumEventHeight = _a.minimumEventHeight;
  var dayViewHourGrid = getDayViewHourGrid(dateAdapter, {
    viewDate,
    hourSegments,
    hourDuration,
    dayStart,
    dayEnd
  });
  var weekDays = getWeekViewHeader(dateAdapter, {
    viewDate,
    weekStartsOn,
    excluded,
    weekendDays,
    viewStart,
    viewEnd
  });
  var setHours = dateAdapter.setHours, setMinutes = dateAdapter.setMinutes, getHours = dateAdapter.getHours, getMinutes = dateAdapter.getMinutes;
  return weekDays.map(function(day) {
    var dayView = getDayView(dateAdapter, {
      events,
      viewDate: day.date,
      hourSegments,
      dayStart,
      dayEnd,
      segmentHeight,
      eventWidth: 1,
      hourDuration,
      minimumEventHeight
    });
    var hours = dayViewHourGrid.map(function(hour) {
      var segments = hour.segments.map(function(segment) {
        var date = setMinutes(setHours(day.date, getHours(segment.date)), getMinutes(segment.date));
        return __assign(__assign({}, segment), {
          date
        });
      });
      return __assign(__assign({}, hour), {
        segments
      });
    });
    function getColumnCount(allEvents, prevOverlappingEvents) {
      var columnCount = Math.max.apply(Math, prevOverlappingEvents.map(function(iEvent) {
        return iEvent.left + 1;
      }));
      var nextOverlappingEvents = allEvents.filter(function(iEvent) {
        return iEvent.left >= columnCount;
      }).filter(function(iEvent) {
        return getOverLappingWeekViewEvents(prevOverlappingEvents, iEvent.top, iEvent.top + iEvent.height).length > 0;
      });
      if (nextOverlappingEvents.length > 0) {
        return getColumnCount(allEvents, nextOverlappingEvents);
      } else {
        return columnCount;
      }
    }
    var mappedEvents = dayView.events.map(function(event) {
      var columnCount = getColumnCount(dayView.events, getOverLappingWeekViewEvents(dayView.events, event.top, event.top + event.height));
      var width = 100 / columnCount;
      return __assign(__assign({}, event), {
        left: event.left * width,
        width
      });
    });
    return {
      hours,
      date: day.date,
      events: mappedEvents.map(function(event) {
        var overLappingEvents = getOverLappingWeekViewEvents(mappedEvents.filter(function(otherEvent) {
          return otherEvent.left > event.left;
        }), event.top, event.top + event.height);
        if (overLappingEvents.length > 0) {
          return __assign(__assign({}, event), {
            width: Math.min.apply(Math, overLappingEvents.map(function(otherEvent) {
              return otherEvent.left;
            })) - event.left
          });
        }
        return event;
      })
    };
  });
}
function getWeekView(dateAdapter, _a) {
  var _b = _a.events, events = _b === void 0 ? [] : _b, viewDate = _a.viewDate, weekStartsOn = _a.weekStartsOn, _c = _a.excluded, excluded = _c === void 0 ? [] : _c, _d = _a.precision, precision = _d === void 0 ? "days" : _d, _e = _a.absolutePositionedEvents, absolutePositionedEvents = _e === void 0 ? false : _e, hourSegments = _a.hourSegments, hourDuration = _a.hourDuration, dayStart = _a.dayStart, dayEnd = _a.dayEnd, weekendDays = _a.weekendDays, segmentHeight = _a.segmentHeight, minimumEventHeight = _a.minimumEventHeight, _f = _a.viewStart, viewStart = _f === void 0 ? dateAdapter.startOfWeek(viewDate, {
    weekStartsOn
  }) : _f, _g = _a.viewEnd, viewEnd = _g === void 0 ? dateAdapter.endOfWeek(viewDate, {
    weekStartsOn
  }) : _g;
  if (!events) {
    events = [];
  }
  var startOfDay = dateAdapter.startOfDay, endOfDay = dateAdapter.endOfDay;
  viewStart = startOfDay(viewStart);
  viewEnd = endOfDay(viewEnd);
  var eventsInPeriod = getEventsInPeriod(dateAdapter, {
    events,
    periodStart: viewStart,
    periodEnd: viewEnd
  });
  var header = getWeekViewHeader(dateAdapter, {
    viewDate,
    weekStartsOn,
    excluded,
    weekendDays,
    viewStart,
    viewEnd
  });
  return {
    allDayEventRows: getAllDayWeekEvents(dateAdapter, {
      events: eventsInPeriod,
      excluded,
      precision,
      absolutePositionedEvents,
      viewStart,
      viewEnd
    }),
    period: {
      events: eventsInPeriod,
      start: header[0].date,
      end: endOfDay(header[header.length - 1].date)
    },
    hourColumns: getWeekViewHourGrid(dateAdapter, {
      events,
      viewDate,
      hourSegments,
      hourDuration,
      dayStart,
      dayEnd,
      weekStartsOn,
      excluded,
      weekendDays,
      segmentHeight,
      viewStart,
      viewEnd,
      minimumEventHeight
    })
  };
}
function getMonthView(dateAdapter, _a) {
  var _b = _a.events, events = _b === void 0 ? [] : _b, viewDate = _a.viewDate, weekStartsOn = _a.weekStartsOn, _c = _a.excluded, excluded = _c === void 0 ? [] : _c, _d = _a.viewStart, viewStart = _d === void 0 ? dateAdapter.startOfMonth(viewDate) : _d, _e = _a.viewEnd, viewEnd = _e === void 0 ? dateAdapter.endOfMonth(viewDate) : _e, weekendDays = _a.weekendDays;
  if (!events) {
    events = [];
  }
  var startOfWeek = dateAdapter.startOfWeek, endOfWeek = dateAdapter.endOfWeek, differenceInDays = dateAdapter.differenceInDays, startOfDay = dateAdapter.startOfDay, addHours = dateAdapter.addHours, endOfDay = dateAdapter.endOfDay, isSameMonth = dateAdapter.isSameMonth, getDay = dateAdapter.getDay;
  var start = startOfWeek(viewStart, {
    weekStartsOn
  });
  var end = endOfWeek(viewEnd, {
    weekStartsOn
  });
  var eventsInMonth = getEventsInPeriod(dateAdapter, {
    events,
    periodStart: start,
    periodEnd: end
  });
  var initialViewDays = [];
  var previousDate;
  var _loop_2 = function(i2) {
    var date;
    if (previousDate) {
      date = startOfDay(addHours(previousDate, HOURS_IN_DAY));
      if (previousDate.getTime() === date.getTime()) {
        date = startOfDay(addHours(previousDate, HOURS_IN_DAY + 1));
      }
      previousDate = date;
    } else {
      date = previousDate = start;
    }
    if (!excluded.some(function(e) {
      return getDay(date) === e;
    })) {
      var day = getWeekDay(dateAdapter, {
        date,
        weekendDays
      });
      var eventsInPeriod = getEventsInPeriod(dateAdapter, {
        events: eventsInMonth,
        periodStart: startOfDay(date),
        periodEnd: endOfDay(date)
      });
      day.inMonth = isSameMonth(date, viewDate);
      day.events = eventsInPeriod;
      day.badgeTotal = eventsInPeriod.length;
      initialViewDays.push(day);
    }
  };
  for (var i = 0; i < differenceInDays(end, start) + 1; i++) {
    _loop_2(i);
  }
  var days = [];
  var totalDaysVisibleInWeek = DAYS_IN_WEEK - excluded.length;
  if (totalDaysVisibleInWeek < DAYS_IN_WEEK) {
    for (var i = 0; i < initialViewDays.length; i += totalDaysVisibleInWeek) {
      var row = initialViewDays.slice(i, i + totalDaysVisibleInWeek);
      var isRowInMonth = row.some(function(day) {
        return viewStart <= day.date && day.date < viewEnd;
      });
      if (isRowInMonth) {
        days = __spreadArray(__spreadArray([], days, true), row, true);
      }
    }
  } else {
    days = initialViewDays;
  }
  var rows = Math.floor(days.length / totalDaysVisibleInWeek);
  var rowOffsets = [];
  for (var i = 0; i < rows; i++) {
    rowOffsets.push(i * totalDaysVisibleInWeek);
  }
  return {
    rowOffsets,
    totalDaysVisibleInWeek,
    days,
    period: {
      start: days[0].date,
      end: endOfDay(days[days.length - 1].date),
      events: eventsInMonth
    }
  };
}
function getOverLappingWeekViewEvents(events, top, bottom) {
  return events.filter(function(previousEvent) {
    var previousEventTop = previousEvent.top;
    var previousEventBottom = previousEvent.top + previousEvent.height;
    if (top < previousEventBottom && previousEventBottom < bottom) {
      return true;
    } else if (top < previousEventTop && previousEventTop < bottom) {
      return true;
    } else if (previousEventTop <= top && bottom <= previousEventBottom) {
      return true;
    }
    return false;
  });
}
function getDayView(dateAdapter, _a) {
  var events = _a.events, viewDate = _a.viewDate, hourSegments = _a.hourSegments, dayStart = _a.dayStart, dayEnd = _a.dayEnd, eventWidth = _a.eventWidth, segmentHeight = _a.segmentHeight, hourDuration = _a.hourDuration, minimumEventHeight = _a.minimumEventHeight;
  var setMinutes = dateAdapter.setMinutes, setHours = dateAdapter.setHours, startOfDay = dateAdapter.startOfDay, startOfMinute = dateAdapter.startOfMinute, endOfDay = dateAdapter.endOfDay, differenceInMinutes = dateAdapter.differenceInMinutes;
  var startOfView = setMinutes(setHours(startOfDay(viewDate), sanitiseHours(dayStart.hour)), sanitiseMinutes(dayStart.minute));
  var endOfView = setMinutes(setHours(startOfMinute(endOfDay(viewDate)), sanitiseHours(dayEnd.hour)), sanitiseMinutes(dayEnd.minute));
  endOfView.setSeconds(59, 999);
  var previousDayEvents = [];
  var eventsInPeriod = getEventsInPeriod(dateAdapter, {
    events: events.filter(function(event) {
      return !event.allDay;
    }),
    periodStart: startOfView,
    periodEnd: endOfView
  });
  var dayViewEvents = eventsInPeriod.sort(function(eventA, eventB) {
    return eventA.start.valueOf() - eventB.start.valueOf();
  }).map(function(event) {
    var eventStart = event.start;
    var eventEnd = event.end || eventStart;
    var startsBeforeDay = eventStart < startOfView;
    var endsAfterDay = eventEnd > endOfView;
    var hourHeightModifier = hourSegments * segmentHeight / (hourDuration || MINUTES_IN_HOUR);
    var top = 0;
    if (eventStart > startOfView) {
      var eventOffset = dateAdapter.getTimezoneOffset(eventStart);
      var startOffset = dateAdapter.getTimezoneOffset(startOfView);
      var diff = startOffset - eventOffset;
      top += differenceInMinutes(eventStart, startOfView) + diff;
    }
    top *= hourHeightModifier;
    top = Math.floor(top);
    var startDate = startsBeforeDay ? startOfView : eventStart;
    var endDate = endsAfterDay ? endOfView : eventEnd;
    var timezoneOffset = dateAdapter.getTimezoneOffset(startDate) - dateAdapter.getTimezoneOffset(endDate);
    var height = differenceInMinutes(endDate, startDate) + timezoneOffset;
    if (!event.end) {
      height = segmentHeight;
    } else {
      height *= hourHeightModifier;
    }
    if (minimumEventHeight && height < minimumEventHeight) {
      height = minimumEventHeight;
    }
    height = Math.floor(height);
    var bottom = top + height;
    var overlappingPreviousEvents = getOverLappingWeekViewEvents(previousDayEvents, top, bottom);
    var left = 0;
    while (overlappingPreviousEvents.some(function(previousEvent) {
      return previousEvent.left === left;
    })) {
      left += eventWidth;
    }
    var dayEvent = {
      event,
      height,
      width: eventWidth,
      top,
      left,
      startsBeforeDay,
      endsAfterDay
    };
    previousDayEvents.push(dayEvent);
    return dayEvent;
  });
  var width = Math.max.apply(Math, dayViewEvents.map(function(event) {
    return event.left + event.width;
  }));
  var allDayEvents = getEventsInPeriod(dateAdapter, {
    events: events.filter(function(event) {
      return event.allDay;
    }),
    periodStart: startOfDay(startOfView),
    periodEnd: endOfDay(endOfView)
  });
  return {
    events: dayViewEvents,
    width,
    allDayEvents,
    period: {
      events: eventsInPeriod,
      start: startOfView,
      end: endOfView
    }
  };
}
function sanitiseHours(hours) {
  return Math.max(Math.min(23, hours), 0);
}
function sanitiseMinutes(minutes) {
  return Math.max(Math.min(59, minutes), 0);
}
function getDayViewHourGrid(dateAdapter, _a) {
  var viewDate = _a.viewDate, hourSegments = _a.hourSegments, hourDuration = _a.hourDuration, dayStart = _a.dayStart, dayEnd = _a.dayEnd;
  var setMinutes = dateAdapter.setMinutes, setHours = dateAdapter.setHours, startOfDay = dateAdapter.startOfDay, startOfMinute = dateAdapter.startOfMinute, endOfDay = dateAdapter.endOfDay, addMinutes = dateAdapter.addMinutes, addDays = dateAdapter.addDays;
  var hours = [];
  var startOfView = setMinutes(setHours(startOfDay(viewDate), sanitiseHours(dayStart.hour)), sanitiseMinutes(dayStart.minute));
  var endOfView = setMinutes(setHours(startOfMinute(endOfDay(viewDate)), sanitiseHours(dayEnd.hour)), sanitiseMinutes(dayEnd.minute));
  var segmentDuration = (hourDuration || MINUTES_IN_HOUR) / hourSegments;
  var startOfViewDay = startOfDay(viewDate);
  var endOfViewDay = endOfDay(viewDate);
  var dateAdjustment = function(d) {
    return d;
  };
  if (dateAdapter.getTimezoneOffset(startOfViewDay) !== dateAdapter.getTimezoneOffset(endOfViewDay)) {
    startOfViewDay = addDays(startOfViewDay, 1);
    startOfView = addDays(startOfView, 1);
    endOfView = addDays(endOfView, 1);
    dateAdjustment = function(d) {
      return addDays(d, -1);
    };
  }
  var dayDuration = hourDuration ? HOURS_IN_DAY * 60 / hourDuration : MINUTES_IN_HOUR;
  for (var i = 0; i < dayDuration; i++) {
    var segments = [];
    for (var j = 0; j < hourSegments; j++) {
      var date = addMinutes(addMinutes(startOfView, i * (hourDuration || MINUTES_IN_HOUR)), j * segmentDuration);
      if (date >= startOfView && date < endOfView) {
        segments.push({
          date: dateAdjustment(date),
          displayDate: date,
          isStart: j === 0
        });
      }
    }
    if (segments.length > 0) {
      hours.push({
        segments
      });
    }
  }
  return hours;
}
var EventValidationErrorMessage;
(function(EventValidationErrorMessage2) {
  EventValidationErrorMessage2["NotArray"] = "Events must be an array";
  EventValidationErrorMessage2["StartPropertyMissing"] = "Event is missing the `start` property";
  EventValidationErrorMessage2["StartPropertyNotDate"] = "Event `start` property should be a javascript date object. Do `new Date(event.start)` to fix it.";
  EventValidationErrorMessage2["EndPropertyNotDate"] = "Event `end` property should be a javascript date object. Do `new Date(event.end)` to fix it.";
  EventValidationErrorMessage2["EndsBeforeStart"] = "Event `start` property occurs after the `end`";
})(EventValidationErrorMessage || (EventValidationErrorMessage = {}));
function validateEvents(events, log) {
  var isValid = true;
  function isError(msg, event) {
    log(msg, event);
    isValid = false;
  }
  if (!Array.isArray(events)) {
    log(EventValidationErrorMessage.NotArray, events);
    return false;
  }
  events.forEach(function(event) {
    if (!event.start) {
      isError(EventValidationErrorMessage.StartPropertyMissing, event);
    } else if (!(event.start instanceof Date)) {
      isError(EventValidationErrorMessage.StartPropertyNotDate, event);
    }
    if (event.end) {
      if (!(event.end instanceof Date)) {
        isError(EventValidationErrorMessage.EndPropertyNotDate, event);
      }
      if (event.start > event.end) {
        isError(EventValidationErrorMessage.EndsBeforeStart, event);
      }
    }
  });
  return isValid;
}

// node_modules/@mattlewis92/dom-autoscroller/dist/bundle.es.js
function getDef(f, d) {
  if (typeof f === "undefined") {
    return typeof d === "undefined" ? f : d;
  }
  return f;
}
function boolean(func, def) {
  func = getDef(func, def);
  if (typeof func === "function") {
    return function f() {
      var arguments$1 = arguments;
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments$1[_key];
      }
      return !!func.apply(this, args);
    };
  }
  return !!func ? function() {
    return true;
  } : function() {
    return false;
  };
}
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
  return typeof obj;
} : function(obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var isElement$1 = function(input) {
  return input != null && (typeof input === "undefined" ? "undefined" : _typeof(input)) === "object" && input.nodeType === 1 && _typeof(input.style) === "object" && _typeof(input.ownerDocument) === "object";
};
function indexOfElement(elements, element) {
  element = resolveElement(element, true);
  if (!isElement$1(element)) {
    return -1;
  }
  for (var i = 0; i < elements.length; i++) {
    if (elements[i] === element) {
      return i;
    }
  }
  return -1;
}
function hasElement(elements, element) {
  return -1 !== indexOfElement(elements, element);
}
function pushElements(elements, toAdd) {
  for (var i = 0; i < toAdd.length; i++) {
    if (!hasElement(elements, toAdd[i])) {
      elements.push(toAdd[i]);
    }
  }
  return toAdd;
}
function addElements(elements) {
  var arguments$1 = arguments;
  var toAdd = [], len = arguments.length - 1;
  while (len-- > 0) {
    toAdd[len] = arguments$1[len + 1];
  }
  toAdd = toAdd.map(resolveElement);
  return pushElements(elements, toAdd);
}
function removeElements(elements) {
  var arguments$1 = arguments;
  var toRemove = [], len = arguments.length - 1;
  while (len-- > 0) {
    toRemove[len] = arguments$1[len + 1];
  }
  return toRemove.map(resolveElement).reduce(function(last, e) {
    var index = indexOfElement(elements, e);
    if (index !== -1) {
      return last.concat(elements.splice(index, 1));
    }
    return last;
  }, []);
}
function resolveElement(element, noThrow) {
  if (typeof element === "string") {
    try {
      return document.querySelector(element);
    } catch (e) {
      throw e;
    }
  }
  if (!isElement$1(element) && !noThrow) {
    throw new TypeError(element + " is not a DOM element.");
  }
  return element;
}
function createPointCB(object, options) {
  options = options || {};
  var allowUpdate = boolean(options.allowUpdate, true);
  return function pointCB(event) {
    event = event || window.event;
    object.target = event.target || event.srcElement || event.originalTarget;
    object.element = this;
    object.type = event.type;
    if (!allowUpdate(event)) {
      return;
    }
    if (event.targetTouches) {
      object.x = event.targetTouches[0].clientX;
      object.y = event.targetTouches[0].clientY;
      object.pageX = event.targetTouches[0].pageX;
      object.pageY = event.targetTouches[0].pageY;
      object.screenX = event.targetTouches[0].screenX;
      object.screenY = event.targetTouches[0].screenY;
    } else {
      if (event.pageX === null && event.clientX !== null) {
        var eventDoc = event.target && event.target.ownerDocument || document;
        var doc = eventDoc.documentElement;
        var body = eventDoc.body;
        object.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
        object.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
      } else {
        object.pageX = event.pageX;
        object.pageY = event.pageY;
      }
      object.x = event.clientX;
      object.y = event.clientY;
      object.screenX = event.screenX;
      object.screenY = event.screenY;
    }
    object.clientX = object.x;
    object.clientY = object.y;
  };
}
function createWindowRect() {
  var props = {
    top: {
      value: 0,
      enumerable: true
    },
    left: {
      value: 0,
      enumerable: true
    },
    right: {
      value: window.innerWidth,
      enumerable: true
    },
    bottom: {
      value: window.innerHeight,
      enumerable: true
    },
    width: {
      value: window.innerWidth,
      enumerable: true
    },
    height: {
      value: window.innerHeight,
      enumerable: true
    },
    x: {
      value: 0,
      enumerable: true
    },
    y: {
      value: 0,
      enumerable: true
    }
  };
  if (Object.create) {
    return Object.create({}, props);
  } else {
    var rect = {};
    Object.defineProperties(rect, props);
    return rect;
  }
}
function getClientRect(el) {
  if (el === window) {
    return createWindowRect();
  } else {
    try {
      var rect = el.getBoundingClientRect();
      if (rect.x === void 0) {
        rect.x = rect.left;
        rect.y = rect.top;
      }
      return rect;
    } catch (e) {
      throw new TypeError("Can't call getBoundingClientRect on " + el);
    }
  }
}
function pointInside(point, el) {
  var rect = getClientRect(el);
  return point.y > rect.top && point.y < rect.bottom && point.x > rect.left && point.x < rect.right;
}
var objectCreate = void 0;
if (typeof Object.create != "function") {
  objectCreate = /* @__PURE__ */ function(undefined$1) {
    var Temp = function Temp2() {
    };
    return function(prototype, propertiesObject) {
      if (prototype !== Object(prototype) && prototype !== null) {
        throw TypeError("Argument must be an object, or null");
      }
      Temp.prototype = prototype || {};
      var result = new Temp();
      Temp.prototype = null;
      if (propertiesObject !== undefined$1) {
        Object.defineProperties(result, propertiesObject);
      }
      if (prototype === null) {
        result.__proto__ = null;
      }
      return result;
    };
  }();
} else {
  objectCreate = Object.create;
}
var objectCreate$1 = objectCreate;
var mouseEventProps = ["altKey", "button", "buttons", "clientX", "clientY", "ctrlKey", "metaKey", "movementX", "movementY", "offsetX", "offsetY", "pageX", "pageY", "region", "relatedTarget", "screenX", "screenY", "shiftKey", "which", "x", "y"];
function createDispatcher(element) {
  var defaultSettings = {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    ctrlKey: false,
    shiftKey: false,
    altKey: false,
    metaKey: false,
    button: 0,
    buttons: 1,
    relatedTarget: null,
    region: null
  };
  if (element !== void 0) {
    element.addEventListener("mousemove", onMove);
  }
  function onMove(e) {
    for (var i = 0; i < mouseEventProps.length; i++) {
      defaultSettings[mouseEventProps[i]] = e[mouseEventProps[i]];
    }
  }
  var dispatch = function() {
    if (MouseEvent) {
      return function m1(element2, initMove, data) {
        var evt = new MouseEvent("mousemove", createMoveInit(defaultSettings, initMove));
        setSpecial(evt, data);
        return element2.dispatchEvent(evt);
      };
    } else if (typeof document.createEvent === "function") {
      return function m2(element2, initMove, data) {
        var settings = createMoveInit(defaultSettings, initMove);
        var evt = document.createEvent("MouseEvents");
        evt.initMouseEvent(
          "mousemove",
          true,
          //can bubble
          true,
          //cancelable
          window,
          //view
          0,
          //detail
          settings.screenX,
          //0, //screenX
          settings.screenY,
          //0, //screenY
          settings.clientX,
          //80, //clientX
          settings.clientY,
          //20, //clientY
          settings.ctrlKey,
          //false, //ctrlKey
          settings.altKey,
          //false, //altKey
          settings.shiftKey,
          //false, //shiftKey
          settings.metaKey,
          //false, //metaKey
          settings.button,
          //0, //button
          settings.relatedTarget
          //null //relatedTarget
        );
        setSpecial(evt, data);
        return element2.dispatchEvent(evt);
      };
    } else if (typeof document.createEventObject === "function") {
      return function m3(element2, initMove, data) {
        var evt = document.createEventObject();
        var settings = createMoveInit(defaultSettings, initMove);
        for (var name in settings) {
          evt[name] = settings[name];
        }
        setSpecial(evt, data);
        return element2.dispatchEvent(evt);
      };
    }
  }();
  function destroy() {
    if (element) {
      element.removeEventListener("mousemove", onMove, false);
    }
    defaultSettings = null;
  }
  return {
    destroy,
    dispatch
  };
}
function createMoveInit(defaultSettings, initMove) {
  initMove = initMove || {};
  var settings = objectCreate$1(defaultSettings);
  for (var i = 0; i < mouseEventProps.length; i++) {
    if (initMove[mouseEventProps[i]] !== void 0) {
      settings[mouseEventProps[i]] = initMove[mouseEventProps[i]];
    }
  }
  return settings;
}
function setSpecial(e, data) {
  console.log("data ", data);
  e.data = data || {};
  e.dispatched = "mousemove";
}
var prefix = ["webkit", "moz", "ms", "o"];
var requestFrame = function() {
  if (typeof window === "undefined") {
    return function() {
    };
  }
  for (var i = 0, limit = prefix.length; i < limit && !window.requestAnimationFrame; ++i) {
    window.requestAnimationFrame = window[prefix[i] + "RequestAnimationFrame"];
  }
  if (!window.requestAnimationFrame) {
    var lastTime = 0;
    window.requestAnimationFrame = function(callback) {
      var now = (/* @__PURE__ */ new Date()).getTime();
      var ttc = Math.max(0, 16 - now - lastTime);
      var timer2 = window.setTimeout(function() {
        return callback(now + ttc);
      }, ttc);
      lastTime = now + ttc;
      return timer2;
    };
  }
  return window.requestAnimationFrame.bind(window);
}();
var cancelFrame = function() {
  if (typeof window === "undefined") {
    return function() {
    };
  }
  for (var i = 0, limit = prefix.length; i < limit && !window.cancelAnimationFrame; ++i) {
    window.cancelAnimationFrame = window[prefix[i] + "CancelAnimationFrame"] || window[prefix[i] + "CancelRequestAnimationFrame"];
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function(timer2) {
      window.clearTimeout(timer2);
    };
  }
  return window.cancelAnimationFrame.bind(window);
}();
function AutoScroller(elements, options) {
  if (options === void 0) options = {};
  var self = this;
  var maxSpeed = 4, scrolling = false;
  if (typeof options.margin !== "object") {
    var margin = options.margin || -1;
    this.margin = {
      left: margin,
      right: margin,
      top: margin,
      bottom: margin
    };
  } else {
    this.margin = options.margin;
  }
  this.scrollWhenOutside = options.scrollWhenOutside || false;
  var point = {}, pointCB = createPointCB(point), dispatcher = createDispatcher(), down = false;
  window.addEventListener("mousemove", pointCB, false);
  window.addEventListener("touchmove", pointCB, false);
  if (!isNaN(options.maxSpeed)) {
    maxSpeed = options.maxSpeed;
  }
  if (typeof maxSpeed !== "object") {
    maxSpeed = {
      left: maxSpeed,
      right: maxSpeed,
      top: maxSpeed,
      bottom: maxSpeed
    };
  }
  this.autoScroll = boolean(options.autoScroll);
  this.syncMove = boolean(options.syncMove, false);
  this.destroy = function(forceCleanAnimation) {
    window.removeEventListener("mousemove", pointCB, false);
    window.removeEventListener("touchmove", pointCB, false);
    window.removeEventListener("mousedown", onDown, false);
    window.removeEventListener("touchstart", onDown, false);
    window.removeEventListener("mouseup", onUp, false);
    window.removeEventListener("touchend", onUp, false);
    window.removeEventListener("pointerup", onUp, false);
    window.removeEventListener("mouseleave", onMouseOut, false);
    window.removeEventListener("mousemove", onMove, false);
    window.removeEventListener("touchmove", onMove, false);
    window.removeEventListener("scroll", setScroll, true);
    elements = [];
    if (forceCleanAnimation) {
      cleanAnimation();
    }
  };
  this.add = function() {
    var element = [], len = arguments.length;
    while (len--) element[len] = arguments[len];
    addElements.apply(void 0, [elements].concat(element));
    return this;
  };
  this.remove = function() {
    var element = [], len = arguments.length;
    while (len--) element[len] = arguments[len];
    return removeElements.apply(void 0, [elements].concat(element));
  };
  var hasWindow = null, windowAnimationFrame;
  if (Object.prototype.toString.call(elements) !== "[object Array]") {
    elements = [elements];
  }
  (function(temp) {
    elements = [];
    temp.forEach(function(element) {
      if (element === window) {
        hasWindow = window;
      } else {
        self.add(element);
      }
    });
  })(elements);
  Object.defineProperties(this, {
    down: {
      get: function() {
        return down;
      }
    },
    maxSpeed: {
      get: function() {
        return maxSpeed;
      }
    },
    point: {
      get: function() {
        return point;
      }
    },
    scrolling: {
      get: function() {
        return scrolling;
      }
    }
  });
  var current = null, animationFrame;
  window.addEventListener("mousedown", onDown, false);
  window.addEventListener("touchstart", onDown, false);
  window.addEventListener("mouseup", onUp, false);
  window.addEventListener("touchend", onUp, false);
  window.addEventListener("pointerup", onUp, false);
  window.addEventListener("mousemove", onMove, false);
  window.addEventListener("touchmove", onMove, false);
  window.addEventListener("mouseleave", onMouseOut, false);
  window.addEventListener("scroll", setScroll, true);
  function setScroll(e) {
    for (var i = 0; i < elements.length; i++) {
      if (elements[i] === e.target) {
        scrolling = true;
        break;
      }
    }
    if (scrolling) {
      requestFrame(function() {
        return scrolling = false;
      });
    }
  }
  function onDown() {
    down = true;
  }
  function onUp() {
    down = false;
    cleanAnimation();
  }
  function cleanAnimation() {
    cancelFrame(animationFrame);
    cancelFrame(windowAnimationFrame);
  }
  function onMouseOut() {
    down = false;
  }
  function getTarget(target) {
    if (!target) {
      return null;
    }
    if (current === target) {
      return target;
    }
    if (hasElement(elements, target)) {
      return target;
    }
    while (target = target.parentNode) {
      if (hasElement(elements, target)) {
        return target;
      }
    }
    return null;
  }
  function getElementUnderPoint() {
    var underPoint = null;
    for (var i = 0; i < elements.length; i++) {
      if (inside(point, elements[i])) {
        underPoint = elements[i];
      }
    }
    return underPoint;
  }
  function onMove(event) {
    if (!self.autoScroll()) {
      return;
    }
    if (event["dispatched"]) {
      return;
    }
    var target = event.target, body = document.body;
    if (current && !inside(point, current)) {
      if (!self.scrollWhenOutside) {
        current = null;
      }
    }
    if (target && target.parentNode === body) {
      target = getElementUnderPoint();
    } else {
      target = getTarget(target);
      if (!target) {
        target = getElementUnderPoint();
      }
    }
    if (target && target !== current) {
      current = target;
    }
    if (hasWindow) {
      cancelFrame(windowAnimationFrame);
      windowAnimationFrame = requestFrame(scrollWindow);
    }
    if (!current) {
      return;
    }
    cancelFrame(animationFrame);
    animationFrame = requestFrame(scrollTick);
  }
  function scrollWindow() {
    autoScroll(hasWindow);
    cancelFrame(windowAnimationFrame);
    windowAnimationFrame = requestFrame(scrollWindow);
  }
  function scrollTick() {
    if (!current) {
      return;
    }
    autoScroll(current);
    cancelFrame(animationFrame);
    animationFrame = requestFrame(scrollTick);
  }
  function autoScroll(el) {
    var rect = getClientRect(el), scrollx, scrolly;
    if (point.x < rect.left + self.margin.left) {
      scrollx = Math.floor(Math.max(-1, (point.x - rect.left) / self.margin.left - 1) * self.maxSpeed.left);
    } else if (point.x > rect.right - self.margin.right) {
      scrollx = Math.ceil(Math.min(1, (point.x - rect.right) / self.margin.right + 1) * self.maxSpeed.right);
    } else {
      scrollx = 0;
    }
    if (point.y < rect.top + self.margin.top) {
      scrolly = Math.floor(Math.max(-1, (point.y - rect.top) / self.margin.top - 1) * self.maxSpeed.top);
    } else if (point.y > rect.bottom - self.margin.bottom) {
      scrolly = Math.ceil(Math.min(1, (point.y - rect.bottom) / self.margin.bottom + 1) * self.maxSpeed.bottom);
    } else {
      scrolly = 0;
    }
    if (self.syncMove()) {
      dispatcher.dispatch(el, {
        pageX: point.pageX + scrollx,
        pageY: point.pageY + scrolly,
        clientX: point.x + scrollx,
        clientY: point.y + scrolly
      });
    }
    setTimeout(function() {
      if (scrolly) {
        scrollY(el, scrolly);
      }
      if (scrollx) {
        scrollX(el, scrollx);
      }
    });
  }
  function scrollY(el, amount) {
    if (el === window) {
      window.scrollTo(el.pageXOffset, el.pageYOffset + amount);
    } else {
      el.scrollTop += amount;
    }
  }
  function scrollX(el, amount) {
    if (el === window) {
      window.scrollTo(el.pageXOffset + amount, el.pageYOffset);
    } else {
      el.scrollLeft += amount;
    }
  }
}
function AutoScrollerFactory(element, options) {
  return new AutoScroller(element, options);
}
function inside(point, el, rect) {
  if (!rect) {
    return pointInside(point, el);
  } else {
    return point.y > rect.top && point.y < rect.bottom && point.x > rect.left && point.x < rect.right;
  }
}
var bundle_es_default = AutoScrollerFactory;

// node_modules/angular-draggable-droppable/fesm2020/angular-draggable-droppable.mjs
function addClass(renderer, element, classToAdd) {
  if (classToAdd) {
    classToAdd.split(" ").forEach((className) => renderer.addClass(element.nativeElement, className));
  }
}
function removeClass(renderer, element, classToRemove) {
  if (classToRemove) {
    classToRemove.split(" ").forEach((className) => renderer.removeClass(element.nativeElement, className));
  }
}
var DraggableHelper = class {
  constructor() {
    this.currentDrag = new Subject();
  }
};
DraggableHelper.ɵfac = function DraggableHelper_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DraggableHelper)();
};
DraggableHelper.ɵprov = ɵɵdefineInjectable({
  token: DraggableHelper,
  factory: DraggableHelper.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DraggableHelper, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var DraggableScrollContainerDirective = class {
  /**
   * @hidden
   */
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
};
DraggableScrollContainerDirective.ɵfac = function DraggableScrollContainerDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DraggableScrollContainerDirective)(ɵɵdirectiveInject(ElementRef));
};
DraggableScrollContainerDirective.ɵdir = ɵɵdefineDirective({
  type: DraggableScrollContainerDirective,
  selectors: [["", "mwlDraggableScrollContainer", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DraggableScrollContainerDirective, [{
    type: Directive,
    args: [{
      selector: "[mwlDraggableScrollContainer]"
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, null);
})();
var DraggableDirective = class {
  /**
   * @hidden
   */
  constructor(element, renderer, draggableHelper, zone, vcr, scrollContainer, document2) {
    this.element = element;
    this.renderer = renderer;
    this.draggableHelper = draggableHelper;
    this.zone = zone;
    this.vcr = vcr;
    this.scrollContainer = scrollContainer;
    this.document = document2;
    this.dragAxis = {
      x: true,
      y: true
    };
    this.dragSnapGrid = {};
    this.ghostDragEnabled = true;
    this.showOriginalElementWhileDragging = false;
    this.dragCursor = "";
    this.autoScroll = {
      margin: 20
    };
    this.dragPointerDown = new EventEmitter();
    this.dragStart = new EventEmitter();
    this.ghostElementCreated = new EventEmitter();
    this.dragging = new EventEmitter();
    this.dragEnd = new EventEmitter();
    this.pointerDown$ = new Subject();
    this.pointerMove$ = new Subject();
    this.pointerUp$ = new Subject();
    this.eventListenerSubscriptions = {};
    this.destroy$ = new Subject();
    this.timeLongPress = {
      timerBegin: 0,
      timerEnd: 0
    };
  }
  ngOnInit() {
    this.checkEventListeners();
    const pointerDragged$ = this.pointerDown$.pipe(filter(() => this.canDrag()), mergeMap((pointerDownEvent) => {
      if (pointerDownEvent.event.stopPropagation && !this.scrollContainer) {
        pointerDownEvent.event.stopPropagation();
      }
      const globalDragStyle = this.renderer.createElement("style");
      this.renderer.setAttribute(globalDragStyle, "type", "text/css");
      this.renderer.appendChild(globalDragStyle, this.renderer.createText(`
          body * {
           -moz-user-select: none;
           -ms-user-select: none;
           -webkit-user-select: none;
           user-select: none;
          }
        `));
      requestAnimationFrame(() => {
        this.document.head.appendChild(globalDragStyle);
      });
      const startScrollPosition = this.getScrollPosition();
      const scrollContainerScroll$ = new Observable((observer) => {
        const scrollContainer = this.scrollContainer ? this.scrollContainer.elementRef.nativeElement : "window";
        return this.renderer.listen(scrollContainer, "scroll", (e) => observer.next(e));
      }).pipe(startWith(startScrollPosition), map(() => this.getScrollPosition()));
      const currentDrag$ = new Subject();
      const cancelDrag$ = new ReplaySubject();
      if (this.dragPointerDown.observers.length > 0) {
        this.zone.run(() => {
          this.dragPointerDown.next({
            x: 0,
            y: 0
          });
        });
      }
      const dragComplete$ = merge(this.pointerUp$, this.pointerDown$, cancelDrag$, this.destroy$).pipe(share());
      const pointerMove = combineLatest([this.pointerMove$, scrollContainerScroll$]).pipe(map(([pointerMoveEvent, scroll]) => {
        return {
          currentDrag$,
          transformX: pointerMoveEvent.clientX - pointerDownEvent.clientX,
          transformY: pointerMoveEvent.clientY - pointerDownEvent.clientY,
          clientX: pointerMoveEvent.clientX,
          clientY: pointerMoveEvent.clientY,
          scrollLeft: scroll.left,
          scrollTop: scroll.top,
          target: pointerMoveEvent.event.target
        };
      }), map((moveData) => {
        if (this.dragSnapGrid.x) {
          moveData.transformX = Math.round(moveData.transformX / this.dragSnapGrid.x) * this.dragSnapGrid.x;
        }
        if (this.dragSnapGrid.y) {
          moveData.transformY = Math.round(moveData.transformY / this.dragSnapGrid.y) * this.dragSnapGrid.y;
        }
        return moveData;
      }), map((moveData) => {
        if (!this.dragAxis.x) {
          moveData.transformX = 0;
        }
        if (!this.dragAxis.y) {
          moveData.transformY = 0;
        }
        return moveData;
      }), map((moveData) => {
        const scrollX = moveData.scrollLeft - startScrollPosition.left;
        const scrollY = moveData.scrollTop - startScrollPosition.top;
        return __spreadProps(__spreadValues({}, moveData), {
          x: moveData.transformX + scrollX,
          y: moveData.transformY + scrollY
        });
      }), filter(({
        x,
        y,
        transformX,
        transformY
      }) => !this.validateDrag || this.validateDrag({
        x,
        y,
        transform: {
          x: transformX,
          y: transformY
        }
      })), takeUntil(dragComplete$), share());
      const dragStarted$ = pointerMove.pipe(take(1), share());
      const dragEnded$ = pointerMove.pipe(takeLast(1), share());
      dragStarted$.subscribe(({
        clientX,
        clientY,
        x,
        y
      }) => {
        if (this.dragStart.observers.length > 0) {
          this.zone.run(() => {
            this.dragStart.next({
              cancelDrag$
            });
          });
        }
        this.scroller = bundle_es_default([this.scrollContainer ? this.scrollContainer.elementRef.nativeElement : this.document.defaultView], __spreadProps(__spreadValues({}, this.autoScroll), {
          autoScroll() {
            return true;
          }
        }));
        addClass(this.renderer, this.element, this.dragActiveClass);
        if (this.ghostDragEnabled) {
          const rect = this.element.nativeElement.getBoundingClientRect();
          const clone = this.element.nativeElement.cloneNode(true);
          if (!this.showOriginalElementWhileDragging) {
            this.renderer.setStyle(this.element.nativeElement, "visibility", "hidden");
          }
          if (this.ghostElementAppendTo) {
            this.ghostElementAppendTo.appendChild(clone);
          } else {
            this.element.nativeElement.parentNode.insertBefore(clone, this.element.nativeElement.nextSibling);
          }
          this.ghostElement = clone;
          this.document.body.style.cursor = this.dragCursor;
          this.setElementStyles(clone, {
            position: "fixed",
            top: `${rect.top}px`,
            left: `${rect.left}px`,
            width: `${rect.width}px`,
            height: `${rect.height}px`,
            cursor: this.dragCursor,
            margin: "0",
            willChange: "transform",
            pointerEvents: "none"
          });
          if (this.ghostElementTemplate) {
            const viewRef = this.vcr.createEmbeddedView(this.ghostElementTemplate);
            clone.innerHTML = "";
            viewRef.rootNodes.filter((node) => node instanceof Node).forEach((node) => {
              clone.appendChild(node);
            });
            dragEnded$.subscribe(() => {
              this.vcr.remove(this.vcr.indexOf(viewRef));
            });
          }
          if (this.ghostElementCreated.observers.length > 0) {
            this.zone.run(() => {
              this.ghostElementCreated.emit({
                clientX: clientX - x,
                clientY: clientY - y,
                element: clone
              });
            });
          }
          dragEnded$.subscribe(() => {
            clone.parentElement.removeChild(clone);
            this.ghostElement = null;
            this.renderer.setStyle(this.element.nativeElement, "visibility", "");
          });
        }
        this.draggableHelper.currentDrag.next(currentDrag$);
      });
      dragEnded$.pipe(mergeMap((dragEndData) => {
        const dragEndData$ = cancelDrag$.pipe(count(), take(1), map((calledCount) => __spreadProps(__spreadValues({}, dragEndData), {
          dragCancelled: calledCount > 0
        })));
        cancelDrag$.complete();
        return dragEndData$;
      })).subscribe(({
        x,
        y,
        dragCancelled
      }) => {
        this.scroller.destroy();
        if (this.dragEnd.observers.length > 0) {
          this.zone.run(() => {
            this.dragEnd.next({
              x,
              y,
              dragCancelled
            });
          });
        }
        removeClass(this.renderer, this.element, this.dragActiveClass);
        currentDrag$.complete();
      });
      merge(dragComplete$, dragEnded$).pipe(take(1)).subscribe(() => {
        requestAnimationFrame(() => {
          this.document.head.removeChild(globalDragStyle);
        });
      });
      return pointerMove;
    }), share());
    merge(pointerDragged$.pipe(take(1), map((value) => [, value])), pointerDragged$.pipe(pairwise())).pipe(filter(([previous, next]) => {
      if (!previous) {
        return true;
      }
      return previous.x !== next.x || previous.y !== next.y;
    }), map(([previous, next]) => next)).subscribe(({
      x,
      y,
      currentDrag$,
      clientX,
      clientY,
      transformX,
      transformY,
      target
    }) => {
      if (this.dragging.observers.length > 0) {
        this.zone.run(() => {
          this.dragging.next({
            x,
            y
          });
        });
      }
      requestAnimationFrame(() => {
        if (this.ghostElement) {
          const transform = `translate3d(${transformX}px, ${transformY}px, 0px)`;
          this.setElementStyles(this.ghostElement, {
            transform,
            "-webkit-transform": transform,
            "-ms-transform": transform,
            "-moz-transform": transform,
            "-o-transform": transform
          });
        }
      });
      currentDrag$.next({
        clientX,
        clientY,
        dropData: this.dropData,
        target
      });
    });
  }
  ngOnChanges(changes) {
    if (changes.dragAxis) {
      this.checkEventListeners();
    }
  }
  ngOnDestroy() {
    this.unsubscribeEventListeners();
    this.pointerDown$.complete();
    this.pointerMove$.complete();
    this.pointerUp$.complete();
    this.destroy$.next();
  }
  checkEventListeners() {
    const canDrag = this.canDrag();
    const hasEventListeners = Object.keys(this.eventListenerSubscriptions).length > 0;
    if (canDrag && !hasEventListeners) {
      this.zone.runOutsideAngular(() => {
        this.eventListenerSubscriptions.mousedown = this.renderer.listen(this.element.nativeElement, "mousedown", (event) => {
          this.onMouseDown(event);
        });
        this.eventListenerSubscriptions.mouseup = this.renderer.listen("document", "mouseup", (event) => {
          this.onMouseUp(event);
        });
        this.eventListenerSubscriptions.touchstart = this.renderer.listen(this.element.nativeElement, "touchstart", (event) => {
          this.onTouchStart(event);
        });
        this.eventListenerSubscriptions.touchend = this.renderer.listen("document", "touchend", (event) => {
          this.onTouchEnd(event);
        });
        this.eventListenerSubscriptions.touchcancel = this.renderer.listen("document", "touchcancel", (event) => {
          this.onTouchEnd(event);
        });
        this.eventListenerSubscriptions.mouseenter = this.renderer.listen(this.element.nativeElement, "mouseenter", () => {
          this.onMouseEnter();
        });
        this.eventListenerSubscriptions.mouseleave = this.renderer.listen(this.element.nativeElement, "mouseleave", () => {
          this.onMouseLeave();
        });
      });
    } else if (!canDrag && hasEventListeners) {
      this.unsubscribeEventListeners();
    }
  }
  onMouseDown(event) {
    if (event.button === 0) {
      if (!this.eventListenerSubscriptions.mousemove) {
        this.eventListenerSubscriptions.mousemove = this.renderer.listen("document", "mousemove", (mouseMoveEvent) => {
          this.pointerMove$.next({
            event: mouseMoveEvent,
            clientX: mouseMoveEvent.clientX,
            clientY: mouseMoveEvent.clientY
          });
        });
      }
      this.pointerDown$.next({
        event,
        clientX: event.clientX,
        clientY: event.clientY
      });
    }
  }
  onMouseUp(event) {
    if (event.button === 0) {
      if (this.eventListenerSubscriptions.mousemove) {
        this.eventListenerSubscriptions.mousemove();
        delete this.eventListenerSubscriptions.mousemove;
      }
      this.pointerUp$.next({
        event,
        clientX: event.clientX,
        clientY: event.clientY
      });
    }
  }
  onTouchStart(event) {
    let startScrollPosition;
    let isDragActivated;
    let hasContainerScrollbar;
    if (this.touchStartLongPress) {
      this.timeLongPress.timerBegin = Date.now();
      isDragActivated = false;
      hasContainerScrollbar = this.hasScrollbar();
      startScrollPosition = this.getScrollPosition();
    }
    if (!this.eventListenerSubscriptions.touchmove) {
      const contextMenuListener = fromEvent(this.document, "contextmenu").subscribe((e) => {
        e.preventDefault();
      });
      const touchMoveListener = fromEvent(this.document, "touchmove", {
        passive: false
      }).subscribe((touchMoveEvent) => {
        if (this.touchStartLongPress && !isDragActivated && hasContainerScrollbar) {
          isDragActivated = this.shouldBeginDrag(event, touchMoveEvent, startScrollPosition);
        }
        if (!this.touchStartLongPress || !hasContainerScrollbar || isDragActivated) {
          touchMoveEvent.preventDefault();
          this.pointerMove$.next({
            event: touchMoveEvent,
            clientX: touchMoveEvent.targetTouches[0].clientX,
            clientY: touchMoveEvent.targetTouches[0].clientY
          });
        }
      });
      this.eventListenerSubscriptions.touchmove = () => {
        contextMenuListener.unsubscribe();
        touchMoveListener.unsubscribe();
      };
    }
    this.pointerDown$.next({
      event,
      clientX: event.touches[0].clientX,
      clientY: event.touches[0].clientY
    });
  }
  onTouchEnd(event) {
    if (this.eventListenerSubscriptions.touchmove) {
      this.eventListenerSubscriptions.touchmove();
      delete this.eventListenerSubscriptions.touchmove;
      if (this.touchStartLongPress) {
        this.enableScroll();
      }
    }
    this.pointerUp$.next({
      event,
      clientX: event.changedTouches[0].clientX,
      clientY: event.changedTouches[0].clientY
    });
  }
  onMouseEnter() {
    this.setCursor(this.dragCursor);
  }
  onMouseLeave() {
    this.setCursor("");
  }
  canDrag() {
    return this.dragAxis.x || this.dragAxis.y;
  }
  setCursor(value) {
    if (!this.eventListenerSubscriptions.mousemove) {
      this.renderer.setStyle(this.element.nativeElement, "cursor", value);
    }
  }
  unsubscribeEventListeners() {
    Object.keys(this.eventListenerSubscriptions).forEach((type) => {
      this.eventListenerSubscriptions[type]();
      delete this.eventListenerSubscriptions[type];
    });
  }
  setElementStyles(element, styles) {
    Object.keys(styles).forEach((key) => {
      this.renderer.setStyle(element, key, styles[key]);
    });
  }
  getScrollElement() {
    if (this.scrollContainer) {
      return this.scrollContainer.elementRef.nativeElement;
    } else {
      return this.document.body;
    }
  }
  getScrollPosition() {
    if (this.scrollContainer) {
      return {
        top: this.scrollContainer.elementRef.nativeElement.scrollTop,
        left: this.scrollContainer.elementRef.nativeElement.scrollLeft
      };
    } else {
      return {
        top: window.pageYOffset || this.document.documentElement.scrollTop,
        left: window.pageXOffset || this.document.documentElement.scrollLeft
      };
    }
  }
  shouldBeginDrag(event, touchMoveEvent, startScrollPosition) {
    const moveScrollPosition = this.getScrollPosition();
    const deltaScroll = {
      top: Math.abs(moveScrollPosition.top - startScrollPosition.top),
      left: Math.abs(moveScrollPosition.left - startScrollPosition.left)
    };
    const deltaX = Math.abs(touchMoveEvent.targetTouches[0].clientX - event.touches[0].clientX) - deltaScroll.left;
    const deltaY = Math.abs(touchMoveEvent.targetTouches[0].clientY - event.touches[0].clientY) - deltaScroll.top;
    const deltaTotal = deltaX + deltaY;
    const longPressConfig = this.touchStartLongPress;
    if (deltaTotal > longPressConfig.delta || deltaScroll.top > 0 || deltaScroll.left > 0) {
      this.timeLongPress.timerBegin = Date.now();
    }
    this.timeLongPress.timerEnd = Date.now();
    const duration = this.timeLongPress.timerEnd - this.timeLongPress.timerBegin;
    if (duration >= longPressConfig.delay) {
      this.disableScroll();
      return true;
    }
    return false;
  }
  enableScroll() {
    if (this.scrollContainer) {
      this.renderer.setStyle(this.scrollContainer.elementRef.nativeElement, "overflow", "");
    }
    this.renderer.setStyle(this.document.body, "overflow", "");
  }
  disableScroll() {
    if (this.scrollContainer) {
      this.renderer.setStyle(this.scrollContainer.elementRef.nativeElement, "overflow", "hidden");
    }
    this.renderer.setStyle(this.document.body, "overflow", "hidden");
  }
  hasScrollbar() {
    const scrollContainer = this.getScrollElement();
    const containerHasHorizontalScroll = scrollContainer.scrollWidth > scrollContainer.clientWidth;
    const containerHasVerticalScroll = scrollContainer.scrollHeight > scrollContainer.clientHeight;
    return containerHasHorizontalScroll || containerHasVerticalScroll;
  }
};
DraggableDirective.ɵfac = function DraggableDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DraggableDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(DraggableHelper), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(DraggableScrollContainerDirective, 8), ɵɵdirectiveInject(DOCUMENT));
};
DraggableDirective.ɵdir = ɵɵdefineDirective({
  type: DraggableDirective,
  selectors: [["", "mwlDraggable", ""]],
  inputs: {
    dropData: "dropData",
    dragAxis: "dragAxis",
    dragSnapGrid: "dragSnapGrid",
    ghostDragEnabled: "ghostDragEnabled",
    showOriginalElementWhileDragging: "showOriginalElementWhileDragging",
    validateDrag: "validateDrag",
    dragCursor: "dragCursor",
    dragActiveClass: "dragActiveClass",
    ghostElementAppendTo: "ghostElementAppendTo",
    ghostElementTemplate: "ghostElementTemplate",
    touchStartLongPress: "touchStartLongPress",
    autoScroll: "autoScroll"
  },
  outputs: {
    dragPointerDown: "dragPointerDown",
    dragStart: "dragStart",
    ghostElementCreated: "ghostElementCreated",
    dragging: "dragging",
    dragEnd: "dragEnd"
  },
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DraggableDirective, [{
    type: Directive,
    args: [{
      selector: "[mwlDraggable]"
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: DraggableHelper
    }, {
      type: NgZone
    }, {
      type: ViewContainerRef
    }, {
      type: DraggableScrollContainerDirective,
      decorators: [{
        type: Optional
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, {
    dropData: [{
      type: Input
    }],
    dragAxis: [{
      type: Input
    }],
    dragSnapGrid: [{
      type: Input
    }],
    ghostDragEnabled: [{
      type: Input
    }],
    showOriginalElementWhileDragging: [{
      type: Input
    }],
    validateDrag: [{
      type: Input
    }],
    dragCursor: [{
      type: Input
    }],
    dragActiveClass: [{
      type: Input
    }],
    ghostElementAppendTo: [{
      type: Input
    }],
    ghostElementTemplate: [{
      type: Input
    }],
    touchStartLongPress: [{
      type: Input
    }],
    autoScroll: [{
      type: Input
    }],
    dragPointerDown: [{
      type: Output
    }],
    dragStart: [{
      type: Output
    }],
    ghostElementCreated: [{
      type: Output
    }],
    dragging: [{
      type: Output
    }],
    dragEnd: [{
      type: Output
    }]
  });
})();
function isCoordinateWithinRectangle(clientX, clientY, rect) {
  return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
}
var DroppableDirective = class {
  constructor(element, draggableHelper, zone, renderer, scrollContainer) {
    this.element = element;
    this.draggableHelper = draggableHelper;
    this.zone = zone;
    this.renderer = renderer;
    this.scrollContainer = scrollContainer;
    this.dragEnter = new EventEmitter();
    this.dragLeave = new EventEmitter();
    this.dragOver = new EventEmitter();
    this.drop = new EventEmitter();
  }
  ngOnInit() {
    this.currentDragSubscription = this.draggableHelper.currentDrag.subscribe((drag$) => {
      addClass(this.renderer, this.element, this.dragActiveClass);
      const droppableElement = {
        updateCache: true
      };
      const deregisterScrollListener = this.renderer.listen(this.scrollContainer ? this.scrollContainer.elementRef.nativeElement : "window", "scroll", () => {
        droppableElement.updateCache = true;
      });
      let currentDragEvent;
      const overlaps$ = drag$.pipe(map(({
        clientX,
        clientY,
        dropData,
        target
      }) => {
        currentDragEvent = {
          clientX,
          clientY,
          dropData,
          target
        };
        if (droppableElement.updateCache) {
          droppableElement.rect = this.element.nativeElement.getBoundingClientRect();
          if (this.scrollContainer) {
            droppableElement.scrollContainerRect = this.scrollContainer.elementRef.nativeElement.getBoundingClientRect();
          }
          droppableElement.updateCache = false;
        }
        const isWithinElement = isCoordinateWithinRectangle(clientX, clientY, droppableElement.rect);
        const isDropAllowed = !this.validateDrop || this.validateDrop({
          clientX,
          clientY,
          target,
          dropData
        });
        if (droppableElement.scrollContainerRect) {
          return isWithinElement && isDropAllowed && isCoordinateWithinRectangle(clientX, clientY, droppableElement.scrollContainerRect);
        } else {
          return isWithinElement && isDropAllowed;
        }
      }));
      const overlapsChanged$ = overlaps$.pipe(distinctUntilChanged());
      let dragOverActive;
      overlapsChanged$.pipe(filter((overlapsNow) => overlapsNow)).subscribe(() => {
        dragOverActive = true;
        addClass(this.renderer, this.element, this.dragOverClass);
        if (this.dragEnter.observers.length > 0) {
          this.zone.run(() => {
            this.dragEnter.next(currentDragEvent);
          });
        }
      });
      overlaps$.pipe(filter((overlapsNow) => overlapsNow)).subscribe(() => {
        if (this.dragOver.observers.length > 0) {
          this.zone.run(() => {
            this.dragOver.next(currentDragEvent);
          });
        }
      });
      overlapsChanged$.pipe(pairwise(), filter(([didOverlap, overlapsNow]) => didOverlap && !overlapsNow)).subscribe(() => {
        dragOverActive = false;
        removeClass(this.renderer, this.element, this.dragOverClass);
        if (this.dragLeave.observers.length > 0) {
          this.zone.run(() => {
            this.dragLeave.next(currentDragEvent);
          });
        }
      });
      drag$.subscribe({
        complete: () => {
          deregisterScrollListener();
          removeClass(this.renderer, this.element, this.dragActiveClass);
          if (dragOverActive) {
            removeClass(this.renderer, this.element, this.dragOverClass);
            if (this.drop.observers.length > 0) {
              this.zone.run(() => {
                this.drop.next(currentDragEvent);
              });
            }
          }
        }
      });
    });
  }
  ngOnDestroy() {
    if (this.currentDragSubscription) {
      this.currentDragSubscription.unsubscribe();
    }
  }
};
DroppableDirective.ɵfac = function DroppableDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DroppableDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DraggableHelper), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(DraggableScrollContainerDirective, 8));
};
DroppableDirective.ɵdir = ɵɵdefineDirective({
  type: DroppableDirective,
  selectors: [["", "mwlDroppable", ""]],
  inputs: {
    dragOverClass: "dragOverClass",
    dragActiveClass: "dragActiveClass",
    validateDrop: "validateDrop"
  },
  outputs: {
    dragEnter: "dragEnter",
    dragLeave: "dragLeave",
    dragOver: "dragOver",
    drop: "drop"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DroppableDirective, [{
    type: Directive,
    args: [{
      selector: "[mwlDroppable]"
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: DraggableHelper
    }, {
      type: NgZone
    }, {
      type: Renderer2
    }, {
      type: DraggableScrollContainerDirective,
      decorators: [{
        type: Optional
      }]
    }];
  }, {
    dragOverClass: [{
      type: Input
    }],
    dragActiveClass: [{
      type: Input
    }],
    validateDrop: [{
      type: Input
    }],
    dragEnter: [{
      type: Output
    }],
    dragLeave: [{
      type: Output
    }],
    dragOver: [{
      type: Output
    }],
    drop: [{
      type: Output
    }]
  });
})();
var DragAndDropModule = class {
};
DragAndDropModule.ɵfac = function DragAndDropModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DragAndDropModule)();
};
DragAndDropModule.ɵmod = ɵɵdefineNgModule({
  type: DragAndDropModule,
  declarations: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective],
  exports: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective]
});
DragAndDropModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragAndDropModule, [{
    type: NgModule,
    args: [{
      declarations: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective],
      exports: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective]
    }]
  }], null, null);
})();

// node_modules/angular-resizable-element/fesm2020/angular-resizable-element.mjs
var IS_TOUCH_DEVICE = (() => {
  if (typeof window === "undefined") {
    return false;
  } else {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  }
})();
function deepCloneNode(node) {
  const clone = node.cloneNode(true);
  const descendantsWithId = clone.querySelectorAll("[id]");
  const nodeName = node.nodeName.toLowerCase();
  clone.removeAttribute("id");
  descendantsWithId.forEach((descendant) => {
    descendant.removeAttribute("id");
  });
  if (nodeName === "canvas") {
    transferCanvasData(node, clone);
  } else if (nodeName === "input" || nodeName === "select" || nodeName === "textarea") {
    transferInputData(node, clone);
  }
  transferData("canvas", node, clone, transferCanvasData);
  transferData("input, textarea, select", node, clone, transferInputData);
  return clone;
}
function transferData(selector, node, clone, callback) {
  const descendantElements = node.querySelectorAll(selector);
  if (descendantElements.length) {
    const cloneElements = clone.querySelectorAll(selector);
    for (let i = 0; i < descendantElements.length; i++) {
      callback(descendantElements[i], cloneElements[i]);
    }
  }
}
var cloneUniqueId = 0;
function transferInputData(source, clone) {
  if (clone.type !== "file") {
    clone.value = source.value;
  }
  if (clone.type === "radio" && clone.name) {
    clone.name = `mat-clone-${clone.name}-${cloneUniqueId++}`;
  }
}
function transferCanvasData(source, clone) {
  const context = clone.getContext("2d");
  if (context) {
    try {
      context.drawImage(source, 0, 0);
    } catch {
    }
  }
}
function getNewBoundingRectangle(startingRect, edges, clientX, clientY) {
  const newBoundingRect = {
    top: startingRect.top,
    bottom: startingRect.bottom,
    left: startingRect.left,
    right: startingRect.right
  };
  if (edges.top) {
    newBoundingRect.top += clientY;
  }
  if (edges.bottom) {
    newBoundingRect.bottom += clientY;
  }
  if (edges.left) {
    newBoundingRect.left += clientX;
  }
  if (edges.right) {
    newBoundingRect.right += clientX;
  }
  newBoundingRect.height = newBoundingRect.bottom - newBoundingRect.top;
  newBoundingRect.width = newBoundingRect.right - newBoundingRect.left;
  return newBoundingRect;
}
function getElementRect(element, ghostElementPositioning) {
  let translateX = 0;
  let translateY = 0;
  const style2 = element.nativeElement.style;
  const transformProperties = ["transform", "-ms-transform", "-moz-transform", "-o-transform"];
  const transform = transformProperties.map((property) => style2[property]).find((value) => !!value);
  if (transform && transform.includes("translate")) {
    translateX = transform.replace(/.*translate3?d?\((-?[0-9]*)px, (-?[0-9]*)px.*/, "$1");
    translateY = transform.replace(/.*translate3?d?\((-?[0-9]*)px, (-?[0-9]*)px.*/, "$2");
  }
  if (ghostElementPositioning === "absolute") {
    return {
      height: element.nativeElement.offsetHeight,
      width: element.nativeElement.offsetWidth,
      top: element.nativeElement.offsetTop - translateY,
      bottom: element.nativeElement.offsetHeight + element.nativeElement.offsetTop - translateY,
      left: element.nativeElement.offsetLeft - translateX,
      right: element.nativeElement.offsetWidth + element.nativeElement.offsetLeft - translateX
    };
  } else {
    const boundingRect = element.nativeElement.getBoundingClientRect();
    return {
      height: boundingRect.height,
      width: boundingRect.width,
      top: boundingRect.top - translateY,
      bottom: boundingRect.bottom - translateY,
      left: boundingRect.left - translateX,
      right: boundingRect.right - translateX,
      scrollTop: element.nativeElement.scrollTop,
      scrollLeft: element.nativeElement.scrollLeft
    };
  }
}
var DEFAULT_RESIZE_CURSORS = Object.freeze({
  topLeft: "nw-resize",
  topRight: "ne-resize",
  bottomLeft: "sw-resize",
  bottomRight: "se-resize",
  leftOrRight: "col-resize",
  topOrBottom: "row-resize"
});
function getResizeCursor(edges, cursors) {
  if (edges.left && edges.top) {
    return cursors.topLeft;
  } else if (edges.right && edges.top) {
    return cursors.topRight;
  } else if (edges.left && edges.bottom) {
    return cursors.bottomLeft;
  } else if (edges.right && edges.bottom) {
    return cursors.bottomRight;
  } else if (edges.left || edges.right) {
    return cursors.leftOrRight;
  } else if (edges.top || edges.bottom) {
    return cursors.topOrBottom;
  } else {
    return "";
  }
}
function getEdgesDiff({
  edges,
  initialRectangle,
  newRectangle
}) {
  const edgesDiff = {};
  Object.keys(edges).forEach((edge) => {
    edgesDiff[edge] = (newRectangle[edge] || 0) - (initialRectangle[edge] || 0);
  });
  return edgesDiff;
}
var RESIZE_ACTIVE_CLASS = "resize-active";
var RESIZE_GHOST_ELEMENT_CLASS = "resize-ghost-element";
var MOUSE_MOVE_THROTTLE_MS = 50;
var ResizableDirective = class {
  /**
   * @hidden
   */
  constructor(platformId, renderer, elm, zone) {
    this.platformId = platformId;
    this.renderer = renderer;
    this.elm = elm;
    this.zone = zone;
    this.enableGhostResize = false;
    this.resizeSnapGrid = {};
    this.resizeCursors = DEFAULT_RESIZE_CURSORS;
    this.ghostElementPositioning = "fixed";
    this.allowNegativeResizes = false;
    this.mouseMoveThrottleMS = MOUSE_MOVE_THROTTLE_MS;
    this.resizeStart = new EventEmitter();
    this.resizing = new EventEmitter();
    this.resizeEnd = new EventEmitter();
    this.mouseup = new Subject();
    this.mousedown = new Subject();
    this.mousemove = new Subject();
    this.destroy$ = new Subject();
    this.pointerEventListeners = PointerEventListeners.getInstance(renderer, zone);
  }
  /**
   * @hidden
   */
  ngOnInit() {
    const mousedown$ = merge(this.pointerEventListeners.pointerDown, this.mousedown);
    const mousemove$ = merge(this.pointerEventListeners.pointerMove, this.mousemove).pipe(tap(({
      event
    }) => {
      if (currentResize && event.cancelable) {
        event.preventDefault();
      }
    }), share());
    const mouseup$ = merge(this.pointerEventListeners.pointerUp, this.mouseup);
    let currentResize;
    const removeGhostElement = () => {
      if (currentResize && currentResize.clonedNode) {
        this.elm.nativeElement.parentElement.removeChild(currentResize.clonedNode);
        this.renderer.setStyle(this.elm.nativeElement, "visibility", "inherit");
      }
    };
    const getResizeCursors = () => {
      return __spreadValues(__spreadValues({}, DEFAULT_RESIZE_CURSORS), this.resizeCursors);
    };
    const mousedrag = mousedown$.pipe(mergeMap((startCoords) => {
      function getDiff(moveCoords) {
        return {
          clientX: moveCoords.clientX - startCoords.clientX,
          clientY: moveCoords.clientY - startCoords.clientY
        };
      }
      const getSnapGrid = () => {
        const snapGrid = {
          x: 1,
          y: 1
        };
        if (currentResize) {
          if (this.resizeSnapGrid.left && currentResize.edges.left) {
            snapGrid.x = +this.resizeSnapGrid.left;
          } else if (this.resizeSnapGrid.right && currentResize.edges.right) {
            snapGrid.x = +this.resizeSnapGrid.right;
          }
          if (this.resizeSnapGrid.top && currentResize.edges.top) {
            snapGrid.y = +this.resizeSnapGrid.top;
          } else if (this.resizeSnapGrid.bottom && currentResize.edges.bottom) {
            snapGrid.y = +this.resizeSnapGrid.bottom;
          }
        }
        return snapGrid;
      };
      function getGrid(coords, snapGrid) {
        return {
          x: Math.ceil(coords.clientX / snapGrid.x),
          y: Math.ceil(coords.clientY / snapGrid.y)
        };
      }
      return merge(mousemove$.pipe(take(1)).pipe(map((coords) => [, coords])), mousemove$.pipe(pairwise())).pipe(map(([previousCoords, newCoords]) => {
        return [previousCoords ? getDiff(previousCoords) : previousCoords, getDiff(newCoords)];
      })).pipe(filter(([previousCoords, newCoords]) => {
        if (!previousCoords) {
          return true;
        }
        const snapGrid = getSnapGrid();
        const previousGrid = getGrid(previousCoords, snapGrid);
        const newGrid = getGrid(newCoords, snapGrid);
        return previousGrid.x !== newGrid.x || previousGrid.y !== newGrid.y;
      })).pipe(map(([, newCoords]) => {
        const snapGrid = getSnapGrid();
        return {
          clientX: Math.round(newCoords.clientX / snapGrid.x) * snapGrid.x,
          clientY: Math.round(newCoords.clientY / snapGrid.y) * snapGrid.y
        };
      })).pipe(takeUntil(merge(mouseup$, mousedown$)));
    })).pipe(filter(() => !!currentResize));
    mousedrag.pipe(map(({
      clientX,
      clientY
    }) => {
      return getNewBoundingRectangle(currentResize.startingRect, currentResize.edges, clientX, clientY);
    })).pipe(filter((newBoundingRect) => {
      return this.allowNegativeResizes || !!(newBoundingRect.height && newBoundingRect.width && newBoundingRect.height > 0 && newBoundingRect.width > 0);
    })).pipe(filter((newBoundingRect) => {
      return this.validateResize ? this.validateResize({
        rectangle: newBoundingRect,
        edges: getEdgesDiff({
          edges: currentResize.edges,
          initialRectangle: currentResize.startingRect,
          newRectangle: newBoundingRect
        })
      }) : true;
    }), takeUntil(this.destroy$)).subscribe((newBoundingRect) => {
      if (currentResize && currentResize.clonedNode) {
        this.renderer.setStyle(currentResize.clonedNode, "height", `${newBoundingRect.height}px`);
        this.renderer.setStyle(currentResize.clonedNode, "width", `${newBoundingRect.width}px`);
        this.renderer.setStyle(currentResize.clonedNode, "top", `${newBoundingRect.top}px`);
        this.renderer.setStyle(currentResize.clonedNode, "left", `${newBoundingRect.left}px`);
      }
      if (this.resizing.observers.length > 0) {
        this.zone.run(() => {
          this.resizing.emit({
            edges: getEdgesDiff({
              edges: currentResize.edges,
              initialRectangle: currentResize.startingRect,
              newRectangle: newBoundingRect
            }),
            rectangle: newBoundingRect
          });
        });
      }
      currentResize.currentRect = newBoundingRect;
    });
    mousedown$.pipe(map(({
      edges
    }) => {
      return edges || {};
    }), filter((edges) => {
      return Object.keys(edges).length > 0;
    }), takeUntil(this.destroy$)).subscribe((edges) => {
      if (currentResize) {
        removeGhostElement();
      }
      const startingRect = getElementRect(this.elm, this.ghostElementPositioning);
      currentResize = {
        edges,
        startingRect,
        currentRect: startingRect
      };
      const resizeCursors = getResizeCursors();
      const cursor = getResizeCursor(currentResize.edges, resizeCursors);
      this.renderer.setStyle(document.body, "cursor", cursor);
      this.setElementClass(this.elm, RESIZE_ACTIVE_CLASS, true);
      if (this.enableGhostResize) {
        currentResize.clonedNode = deepCloneNode(this.elm.nativeElement);
        this.elm.nativeElement.parentElement.appendChild(currentResize.clonedNode);
        this.renderer.setStyle(this.elm.nativeElement, "visibility", "hidden");
        this.renderer.setStyle(currentResize.clonedNode, "position", this.ghostElementPositioning);
        this.renderer.setStyle(currentResize.clonedNode, "left", `${currentResize.startingRect.left}px`);
        this.renderer.setStyle(currentResize.clonedNode, "top", `${currentResize.startingRect.top}px`);
        this.renderer.setStyle(currentResize.clonedNode, "height", `${currentResize.startingRect.height}px`);
        this.renderer.setStyle(currentResize.clonedNode, "width", `${currentResize.startingRect.width}px`);
        this.renderer.setStyle(currentResize.clonedNode, "cursor", getResizeCursor(currentResize.edges, resizeCursors));
        this.renderer.addClass(currentResize.clonedNode, RESIZE_GHOST_ELEMENT_CLASS);
        currentResize.clonedNode.scrollTop = currentResize.startingRect.scrollTop;
        currentResize.clonedNode.scrollLeft = currentResize.startingRect.scrollLeft;
      }
      if (this.resizeStart.observers.length > 0) {
        this.zone.run(() => {
          this.resizeStart.emit({
            edges: getEdgesDiff({
              edges,
              initialRectangle: startingRect,
              newRectangle: startingRect
            }),
            rectangle: getNewBoundingRectangle(startingRect, {}, 0, 0)
          });
        });
      }
    });
    mouseup$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      if (currentResize) {
        this.renderer.removeClass(this.elm.nativeElement, RESIZE_ACTIVE_CLASS);
        this.renderer.setStyle(document.body, "cursor", "");
        this.renderer.setStyle(this.elm.nativeElement, "cursor", "");
        if (this.resizeEnd.observers.length > 0) {
          this.zone.run(() => {
            this.resizeEnd.emit({
              edges: getEdgesDiff({
                edges: currentResize.edges,
                initialRectangle: currentResize.startingRect,
                newRectangle: currentResize.currentRect
              }),
              rectangle: currentResize.currentRect
            });
          });
        }
        removeGhostElement();
        currentResize = null;
      }
    });
  }
  /**
   * @hidden
   */
  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.setStyle(document.body, "cursor", "");
    }
    this.mousedown.complete();
    this.mouseup.complete();
    this.mousemove.complete();
    this.destroy$.next();
  }
  setElementClass(elm, name, add) {
    if (add) {
      this.renderer.addClass(elm.nativeElement, name);
    } else {
      this.renderer.removeClass(elm.nativeElement, name);
    }
  }
};
ResizableDirective.ɵfac = function ResizableDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ResizableDirective)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
ResizableDirective.ɵdir = ɵɵdefineDirective({
  type: ResizableDirective,
  selectors: [["", "mwlResizable", ""]],
  inputs: {
    validateResize: "validateResize",
    enableGhostResize: "enableGhostResize",
    resizeSnapGrid: "resizeSnapGrid",
    resizeCursors: "resizeCursors",
    ghostElementPositioning: "ghostElementPositioning",
    allowNegativeResizes: "allowNegativeResizes",
    mouseMoveThrottleMS: "mouseMoveThrottleMS"
  },
  outputs: {
    resizeStart: "resizeStart",
    resizing: "resizing",
    resizeEnd: "resizeEnd"
  },
  exportAs: ["mwlResizable"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizableDirective, [{
    type: Directive,
    args: [{
      selector: "[mwlResizable]",
      exportAs: "mwlResizable"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }, {
      type: Renderer2
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, {
    validateResize: [{
      type: Input
    }],
    enableGhostResize: [{
      type: Input
    }],
    resizeSnapGrid: [{
      type: Input
    }],
    resizeCursors: [{
      type: Input
    }],
    ghostElementPositioning: [{
      type: Input
    }],
    allowNegativeResizes: [{
      type: Input
    }],
    mouseMoveThrottleMS: [{
      type: Input
    }],
    resizeStart: [{
      type: Output
    }],
    resizing: [{
      type: Output
    }],
    resizeEnd: [{
      type: Output
    }]
  });
})();
var PointerEventListeners = class _PointerEventListeners {
  constructor(renderer, zone) {
    this.pointerDown = new Observable((observer) => {
      let unsubscribeMouseDown;
      let unsubscribeTouchStart;
      zone.runOutsideAngular(() => {
        unsubscribeMouseDown = renderer.listen("document", "mousedown", (event) => {
          observer.next({
            clientX: event.clientX,
            clientY: event.clientY,
            event
          });
        });
        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchStart = renderer.listen("document", "touchstart", (event) => {
            observer.next({
              clientX: event.touches[0].clientX,
              clientY: event.touches[0].clientY,
              event
            });
          });
        }
      });
      return () => {
        unsubscribeMouseDown();
        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchStart();
        }
      };
    }).pipe(share());
    this.pointerMove = new Observable((observer) => {
      let unsubscribeMouseMove;
      let unsubscribeTouchMove;
      zone.runOutsideAngular(() => {
        unsubscribeMouseMove = renderer.listen("document", "mousemove", (event) => {
          observer.next({
            clientX: event.clientX,
            clientY: event.clientY,
            event
          });
        });
        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchMove = renderer.listen("document", "touchmove", (event) => {
            observer.next({
              clientX: event.targetTouches[0].clientX,
              clientY: event.targetTouches[0].clientY,
              event
            });
          });
        }
      });
      return () => {
        unsubscribeMouseMove();
        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchMove();
        }
      };
    }).pipe(share());
    this.pointerUp = new Observable((observer) => {
      let unsubscribeMouseUp;
      let unsubscribeTouchEnd;
      let unsubscribeTouchCancel;
      zone.runOutsideAngular(() => {
        unsubscribeMouseUp = renderer.listen("document", "mouseup", (event) => {
          observer.next({
            clientX: event.clientX,
            clientY: event.clientY,
            event
          });
        });
        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchEnd = renderer.listen("document", "touchend", (event) => {
            observer.next({
              clientX: event.changedTouches[0].clientX,
              clientY: event.changedTouches[0].clientY,
              event
            });
          });
          unsubscribeTouchCancel = renderer.listen("document", "touchcancel", (event) => {
            observer.next({
              clientX: event.changedTouches[0].clientX,
              clientY: event.changedTouches[0].clientY,
              event
            });
          });
        }
      });
      return () => {
        unsubscribeMouseUp();
        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchEnd();
          unsubscribeTouchCancel();
        }
      };
    }).pipe(share());
  }
  static getInstance(renderer, zone) {
    if (!_PointerEventListeners.instance) {
      _PointerEventListeners.instance = new _PointerEventListeners(renderer, zone);
    }
    return _PointerEventListeners.instance;
  }
};
var ResizeHandleDirective = class {
  constructor(renderer, element, zone, resizableDirective) {
    this.renderer = renderer;
    this.element = element;
    this.zone = zone;
    this.resizableDirective = resizableDirective;
    this.resizeEdges = {};
    this.eventListeners = {};
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.listenOnTheHost("mousedown").subscribe((event) => {
        this.onMousedown(event, event.clientX, event.clientY);
      });
      this.listenOnTheHost("mouseup").subscribe((event) => {
        this.onMouseup(event.clientX, event.clientY);
      });
      if (IS_TOUCH_DEVICE) {
        this.listenOnTheHost("touchstart").subscribe((event) => {
          this.onMousedown(event, event.touches[0].clientX, event.touches[0].clientY);
        });
        merge(this.listenOnTheHost("touchend"), this.listenOnTheHost("touchcancel")).subscribe((event) => {
          this.onMouseup(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
        });
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.unsubscribeEventListeners();
  }
  /**
   * @hidden
   */
  onMousedown(event, clientX, clientY) {
    if (event.cancelable) {
      event.preventDefault();
    }
    if (!this.eventListeners.touchmove) {
      this.eventListeners.touchmove = this.renderer.listen(this.element.nativeElement, "touchmove", (touchMoveEvent) => {
        this.onMousemove(touchMoveEvent, touchMoveEvent.targetTouches[0].clientX, touchMoveEvent.targetTouches[0].clientY);
      });
    }
    if (!this.eventListeners.mousemove) {
      this.eventListeners.mousemove = this.renderer.listen(this.element.nativeElement, "mousemove", (mouseMoveEvent) => {
        this.onMousemove(mouseMoveEvent, mouseMoveEvent.clientX, mouseMoveEvent.clientY);
      });
    }
    this.resizable.mousedown.next({
      clientX,
      clientY,
      edges: this.resizeEdges
    });
  }
  /**
   * @hidden
   */
  onMouseup(clientX, clientY) {
    this.unsubscribeEventListeners();
    this.resizable.mouseup.next({
      clientX,
      clientY,
      edges: this.resizeEdges
    });
  }
  // directive might be passed from DI or as an input
  get resizable() {
    return this.resizableDirective || this.resizableContainer;
  }
  onMousemove(event, clientX, clientY) {
    this.resizable.mousemove.next({
      clientX,
      clientY,
      edges: this.resizeEdges,
      event
    });
  }
  unsubscribeEventListeners() {
    Object.keys(this.eventListeners).forEach((type) => {
      this.eventListeners[type]();
      delete this.eventListeners[type];
    });
  }
  listenOnTheHost(eventName) {
    return fromEvent(this.element.nativeElement, eventName).pipe(takeUntil(this.destroy$));
  }
};
ResizeHandleDirective.ɵfac = function ResizeHandleDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ResizeHandleDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ResizableDirective, 8));
};
ResizeHandleDirective.ɵdir = ɵɵdefineDirective({
  type: ResizeHandleDirective,
  selectors: [["", "mwlResizeHandle", ""]],
  inputs: {
    resizeEdges: "resizeEdges",
    resizableContainer: "resizableContainer"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeHandleDirective, [{
    type: Directive,
    args: [{
      selector: "[mwlResizeHandle]"
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: ResizableDirective,
      decorators: [{
        type: Optional
      }]
    }];
  }, {
    resizeEdges: [{
      type: Input
    }],
    resizableContainer: [{
      type: Input
    }]
  });
})();
var ResizableModule = class {
};
ResizableModule.ɵfac = function ResizableModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ResizableModule)();
};
ResizableModule.ɵmod = ɵɵdefineNgModule({
  type: ResizableModule,
  declarations: [ResizableDirective, ResizeHandleDirective],
  exports: [ResizableDirective, ResizeHandleDirective]
});
ResizableModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizableModule, [{
    type: NgModule,
    args: [{
      declarations: [ResizableDirective, ResizeHandleDirective],
      exports: [ResizableDirective, ResizeHandleDirective]
    }]
  }], null, null);
})();

// node_modules/angular-calendar/fesm2020/angular-calendar.mjs
var _c0 = (a0, a1) => ({
  event: a0,
  trackByActionId: a1
});
var _c1 = (a0) => ({
  action: a0
});
function CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 5);
    ɵɵpipe(1, "calendarA11y");
    ɵɵlistener("mwlClick", function CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template_a_mwlClick_0_listener($event) {
      const action_r2 = ɵɵrestoreView(_r1).$implicit;
      const event_r3 = ɵɵnextContext(2).event;
      return ɵɵresetView(action_r2.onClick({
        event: event_r3,
        sourceEvent: $event
      }));
    })("mwlKeydownEnter", function CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template_a_mwlKeydownEnter_0_listener($event) {
      const action_r2 = ɵɵrestoreView(_r1).$implicit;
      const event_r3 = ɵɵnextContext(2).event;
      return ɵɵresetView(action_r2.onClick({
        event: event_r3,
        sourceEvent: $event
      }));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const action_r2 = ctx.$implicit;
    ɵɵproperty("ngClass", action_r2.cssClass)("innerHtml", action_r2.label, ɵɵsanitizeHtml);
    ɵɵattribute("aria-label", ɵɵpipeBind2(1, 3, ɵɵpureFunction1(6, _c1, action_r2), "actionButtonLabel"));
  }
}
function CalendarEventActionsComponent_ng_template_0_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 3);
    ɵɵtemplate(1, CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template, 2, 8, "a", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    const event_r3 = ctx_r3.event;
    const trackByActionId_r5 = ctx_r3.trackByActionId;
    ɵɵadvance();
    ɵɵproperty("ngForOf", event_r3.actions)("ngForTrackBy", trackByActionId_r5);
  }
}
function CalendarEventActionsComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CalendarEventActionsComponent_ng_template_0_span_0_Template, 2, 2, "span", 2);
  }
  if (rf & 2) {
    const event_r3 = ctx.event;
    ɵɵproperty("ngIf", event_r3.actions);
  }
}
function CalendarEventActionsComponent_ng_template_2_Template(rf, ctx) {
}
var _c2 = (a0, a1) => ({
  event: a0,
  view: a1
});
var _c3 = () => ({});
function CalendarEventTitleComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 2);
    ɵɵpipe(1, "calendarEventTitle");
    ɵɵpipe(2, "calendarA11y");
  }
  if (rf & 2) {
    const event_r1 = ctx.event;
    const view_r2 = ctx.view;
    ɵɵproperty("innerHTML", ɵɵpipeBind3(1, 2, event_r1.title, view_r2, event_r1), ɵɵsanitizeHtml);
    ɵɵattribute("aria-hidden", ɵɵpipeBind2(2, 6, ɵɵpureFunction0(9, _c3), "hideEventTitle"));
  }
}
function CalendarEventTitleComponent_ng_template_2_Template(rf, ctx) {
}
var _c4 = (a0, a1, a2) => ({
  contents: a0,
  placement: a1,
  event: a2
});
function CalendarTooltipWindowComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵelement(1, "div", 3)(2, "div", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const contents_r1 = ctx.contents;
    const placement_r2 = ctx.placement;
    ɵɵproperty("ngClass", "cal-tooltip-" + placement_r2);
    ɵɵadvance(2);
    ɵɵproperty("innerHtml", contents_r1, ɵɵsanitizeHtml);
  }
}
function CalendarTooltipWindowComponent_ng_template_2_Template(rf, ctx) {
}
var _c5 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) => ({
  day: a0,
  openDay: a1,
  locale: a2,
  tooltipPlacement: a3,
  highlightDay: a4,
  unhighlightDay: a5,
  eventClicked: a6,
  tooltipTemplate: a7,
  tooltipAppendToBody: a8,
  tooltipDelay: a9,
  trackByEventId: a10,
  validateDrag: a11
});
var _c6 = (a0, a1) => ({
  day: a0,
  locale: a1
});
var _c7 = (a0) => ({
  backgroundColor: a0
});
var _c8 = (a0, a1) => ({
  event: a0,
  draggedFrom: a1
});
var _c9 = (a0, a1) => ({
  x: a0,
  y: a1
});
var _c10 = () => ({
  delay: 300,
  delta: 30
});
function CalendarMonthCellComponent_ng_template_0_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 7);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const day_r1 = ɵɵnextContext().day;
    ɵɵadvance();
    ɵɵtextInterpolate(day_r1.badgeTotal);
  }
}
function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 10);
    ɵɵpipe(1, "calendarEventTitle");
    ɵɵpipe(2, "calendarA11y");
    ɵɵlistener("mouseenter", function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template_div_mouseenter_0_listener() {
      const event_r3 = ɵɵrestoreView(_r2).$implicit;
      const highlightDay_r4 = ɵɵnextContext(2).highlightDay;
      return ɵɵresetView(highlightDay_r4.emit({
        event: event_r3
      }));
    })("mouseleave", function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template_div_mouseleave_0_listener() {
      const event_r3 = ɵɵrestoreView(_r2).$implicit;
      const unhighlightDay_r5 = ɵɵnextContext(2).unhighlightDay;
      return ɵɵresetView(unhighlightDay_r5.emit({
        event: event_r3
      }));
    })("mwlClick", function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template_div_mwlClick_0_listener($event) {
      const event_r3 = ɵɵrestoreView(_r2).$implicit;
      const eventClicked_r6 = ɵɵnextContext(2).eventClicked;
      return ɵɵresetView(eventClicked_r6.emit({
        event: event_r3,
        sourceEvent: $event
      }));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const event_r3 = ctx.$implicit;
    const ctx_r6 = ɵɵnextContext(2);
    const day_r1 = ctx_r6.day;
    const tooltipPlacement_r8 = ctx_r6.tooltipPlacement;
    const tooltipTemplate_r9 = ctx_r6.tooltipTemplate;
    const tooltipAppendToBody_r10 = ctx_r6.tooltipAppendToBody;
    const tooltipDelay_r11 = ctx_r6.tooltipDelay;
    const validateDrag_r12 = ctx_r6.validateDrag;
    ɵɵclassProp("cal-draggable", event_r3.draggable);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(22, _c7, event_r3.color == null ? null : event_r3.color.primary))("ngClass", event_r3 == null ? null : event_r3.cssClass)("mwlCalendarTooltip", ɵɵpipeBind3(1, 15, event_r3.title, "monthTooltip", event_r3))("tooltipPlacement", tooltipPlacement_r8)("tooltipEvent", event_r3)("tooltipTemplate", tooltipTemplate_r9)("tooltipAppendToBody", tooltipAppendToBody_r10)("tooltipDelay", tooltipDelay_r11)("dropData", ɵɵpureFunction2(24, _c8, event_r3, day_r1))("dragAxis", ɵɵpureFunction2(27, _c9, event_r3.draggable, event_r3.draggable))("validateDrag", validateDrag_r12)("touchStartLongPress", ɵɵpureFunction0(30, _c10));
    ɵɵattribute("aria-hidden", ɵɵpipeBind2(2, 19, ɵɵpureFunction0(31, _c3), "hideMonthCellEvents"));
  }
}
function CalendarMonthCellComponent_ng_template_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtemplate(1, CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template, 3, 32, "div", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    const day_r1 = ctx_r6.day;
    const trackByEventId_r13 = ctx_r6.trackByEventId;
    ɵɵadvance();
    ɵɵproperty("ngForOf", day_r1.events)("ngForTrackBy", trackByEventId_r13);
  }
}
function CalendarMonthCellComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵpipe(1, "calendarA11y");
    ɵɵelementStart(2, "span", 3);
    ɵɵtemplate(3, CalendarMonthCellComponent_ng_template_0_span_3_Template, 2, 1, "span", 4);
    ɵɵelementStart(4, "span", 5);
    ɵɵtext(5);
    ɵɵpipe(6, "calendarDate");
    ɵɵelementEnd()()();
    ɵɵtemplate(7, CalendarMonthCellComponent_ng_template_0_div_7_Template, 2, 2, "div", 6);
  }
  if (rf & 2) {
    const day_r1 = ctx.day;
    const locale_r14 = ctx.locale;
    ɵɵattribute("aria-label", ɵɵpipeBind2(1, 4, ɵɵpureFunction2(11, _c6, day_r1, locale_r14), "monthCell"));
    ɵɵadvance(3);
    ɵɵproperty("ngIf", day_r1.badgeTotal > 0);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind3(6, 7, day_r1.date, "monthViewDayNumber", locale_r14));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", day_r1.events.length > 0);
  }
}
function CalendarMonthCellComponent_ng_template_2_Template(rf, ctx) {
}
var _c11 = (a0, a1, a2, a3, a4) => ({
  events: a0,
  eventClicked: a1,
  isOpen: a2,
  trackByEventId: a3,
  validateDrag: a4
});
var _c12 = (a0, a1) => ({
  date: a0,
  locale: a1
});
var _c13 = (a0) => ({
  event: a0
});
var _c14 = (a0, a1) => ({
  event: a0,
  locale: a1
});
function CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 7);
    ɵɵelement(1, "span", 8);
    ɵɵtext(2, " ");
    ɵɵelementStart(3, "mwl-calendar-event-title", 9);
    ɵɵpipe(4, "calendarA11y");
    ɵɵlistener("mwlClick", function CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template_mwl_calendar_event_title_mwlClick_3_listener($event) {
      const event_r2 = ɵɵrestoreView(_r1).$implicit;
      const eventClicked_r3 = ɵɵnextContext(2).eventClicked;
      return ɵɵresetView(eventClicked_r3.emit({
        event: event_r2,
        sourceEvent: $event
      }));
    })("mwlKeydownEnter", function CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template_mwl_calendar_event_title_mwlKeydownEnter_3_listener($event) {
      const event_r2 = ɵɵrestoreView(_r1).$implicit;
      const eventClicked_r3 = ɵɵnextContext(2).eventClicked;
      return ɵɵresetView(eventClicked_r3.emit({
        event: event_r2,
        sourceEvent: $event
      }));
    });
    ɵɵelementEnd();
    ɵɵtext(5, " ");
    ɵɵelement(6, "mwl-calendar-event-actions", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const event_r2 = ctx.$implicit;
    const validateDrag_r4 = ɵɵnextContext(2).validateDrag;
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassProp("cal-draggable", event_r2.draggable);
    ɵɵproperty("ngClass", event_r2 == null ? null : event_r2.cssClass)("dropData", ɵɵpureFunction1(16, _c13, event_r2))("dragAxis", ɵɵpureFunction2(18, _c9, event_r2.draggable, event_r2.draggable))("validateDrag", validateDrag_r4)("touchStartLongPress", ɵɵpureFunction0(21, _c10));
    ɵɵadvance();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(22, _c7, event_r2.color == null ? null : event_r2.color.primary));
    ɵɵadvance(2);
    ɵɵproperty("event", event_r2)("customTemplate", ctx_r4.eventTitleTemplate);
    ɵɵattribute("aria-label", ɵɵpipeBind2(4, 13, ɵɵpureFunction2(24, _c14, event_r2, ctx_r4.locale), "eventDescription"));
    ɵɵadvance(3);
    ɵɵproperty("event", event_r2)("customTemplate", ctx_r4.eventActionsTemplate);
  }
}
function CalendarOpenDayEventsComponent_ng_template_0_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵelement(1, "span", 4);
    ɵɵpipe(2, "calendarA11y");
    ɵɵelement(3, "span", 5);
    ɵɵpipe(4, "calendarA11y");
    ɵɵtemplate(5, CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template, 7, 27, "div", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    const events_r7 = ctx_r5.events;
    const trackByEventId_r8 = ctx_r5.trackByEventId;
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("@collapse", void 0);
    ɵɵadvance();
    ɵɵattribute("aria-label", ɵɵpipeBind2(2, 5, ɵɵpureFunction2(11, _c12, ctx_r4.date, ctx_r4.locale), "openDayEventsAlert"));
    ɵɵadvance(2);
    ɵɵattribute("aria-label", ɵɵpipeBind2(4, 8, ɵɵpureFunction2(14, _c12, ctx_r4.date, ctx_r4.locale), "openDayEventsLandmark"));
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", events_r7)("ngForTrackBy", trackByEventId_r8);
  }
}
function CalendarOpenDayEventsComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CalendarOpenDayEventsComponent_ng_template_0_div_0_Template, 6, 17, "div", 2);
  }
  if (rf & 2) {
    const isOpen_r9 = ctx.isOpen;
    ɵɵproperty("ngIf", isOpen_r9);
  }
}
function CalendarOpenDayEventsComponent_ng_template_2_Template(rf, ctx) {
}
var _c15 = (a0, a1, a2) => ({
  days: a0,
  locale: a1,
  trackByWeekDayHeaderDate: a2
});
function CalendarMonthViewHeaderComponent_ng_template_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4);
    ɵɵlistener("click", function CalendarMonthViewHeaderComponent_ng_template_0_div_1_Template_div_click_0_listener($event) {
      const day_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.columnHeaderClicked.emit({
        isoDayNumber: day_r2.day,
        sourceEvent: $event
      }));
    });
    ɵɵtext(1);
    ɵɵpipe(2, "calendarDate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const day_r2 = ctx.$implicit;
    const locale_r4 = ɵɵnextContext().locale;
    ɵɵclassProp("cal-past", day_r2.isPast)("cal-today", day_r2.isToday)("cal-future", day_r2.isFuture)("cal-weekend", day_r2.isWeekend);
    ɵɵproperty("ngClass", day_r2.cssClass);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind3(2, 10, day_r2.date, "monthViewColumnHeader", locale_r4), " ");
  }
}
function CalendarMonthViewHeaderComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtemplate(1, CalendarMonthViewHeaderComponent_ng_template_0_div_1_Template, 3, 14, "div", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const days_r5 = ctx.days;
    const trackByWeekDayHeaderDate_r6 = ctx.trackByWeekDayHeaderDate;
    ɵɵadvance();
    ɵɵproperty("ngForOf", days_r5)("ngForTrackBy", trackByWeekDayHeaderDate_r6);
  }
}
function CalendarMonthViewHeaderComponent_ng_template_2_Template(rf, ctx) {
}
function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mwl-calendar-month-cell", 7);
    ɵɵpipe(1, "calendarA11y");
    ɵɵlistener("mwlClick", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_mwlClick_0_listener($event) {
      const day_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.dayClicked.emit({
        day: day_r3,
        sourceEvent: $event
      }));
    })("mwlKeydownEnter", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_mwlKeydownEnter_0_listener($event) {
      const day_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.dayClicked.emit({
        day: day_r3,
        sourceEvent: $event
      }));
    })("highlightDay", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_highlightDay_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.toggleDayHighlight($event.event, true));
    })("unhighlightDay", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_unhighlightDay_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.toggleDayHighlight($event.event, false));
    })("drop", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_drop_0_listener($event) {
      const day_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.eventDropped(day_r3, $event.dropData.event, $event.dropData.draggedFrom));
    })("eventClicked", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_eventClicked_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.eventClicked.emit({
        event: $event.event,
        sourceEvent: $event.sourceEvent
      }));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", day_r3 == null ? null : day_r3.cssClass)("day", day_r3)("openDay", ctx_r3.openDay)("locale", ctx_r3.locale)("tooltipPlacement", ctx_r3.tooltipPlacement)("tooltipAppendToBody", ctx_r3.tooltipAppendToBody)("tooltipTemplate", ctx_r3.tooltipTemplate)("tooltipDelay", ctx_r3.tooltipDelay)("customTemplate", ctx_r3.cellTemplate)("ngStyle", ɵɵpureFunction1(15, _c7, day_r3.backgroundColor))("clickListenerDisabled", ctx_r3.dayClicked.observers.length === 0);
    ɵɵattribute("tabindex", ɵɵpipeBind2(1, 12, ɵɵpureFunction0(17, _c3), "monthCellTabIndex"));
  }
}
function CalendarMonthViewComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "div", 4);
    ɵɵtemplate(2, CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template, 2, 18, "mwl-calendar-month-cell", 5);
    ɵɵpipe(3, "slice");
    ɵɵelementEnd();
    ɵɵelementStart(4, "mwl-calendar-open-day-events", 6);
    ɵɵlistener("eventClicked", function CalendarMonthViewComponent_div_3_Template_mwl_calendar_open_day_events_eventClicked_4_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.eventClicked.emit({
        event: $event.event,
        sourceEvent: $event.sourceEvent
      }));
    })("drop", function CalendarMonthViewComponent_div_3_Template_mwl_calendar_open_day_events_drop_4_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.eventDropped(ctx_r3.openDay, $event.dropData.event, $event.dropData.draggedFrom));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const rowIndex_r5 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ɵɵpipeBind3(3, 9, ctx_r3.view.days, rowIndex_r5, rowIndex_r5 + ctx_r3.view.totalDaysVisibleInWeek))("ngForTrackBy", ctx_r3.trackByDate);
    ɵɵadvance(2);
    ɵɵproperty("locale", ctx_r3.locale)("isOpen", ctx_r3.openRowIndex === rowIndex_r5)("events", ctx_r3.openDay == null ? null : ctx_r3.openDay.events)("date", ctx_r3.openDay == null ? null : ctx_r3.openDay.date)("customTemplate", ctx_r3.openDayEventsTemplate)("eventTitleTemplate", ctx_r3.eventTitleTemplate)("eventActionsTemplate", ctx_r3.eventActionsTemplate);
  }
}
var _c16 = (a0, a1, a2, a3, a4, a5) => ({
  days: a0,
  locale: a1,
  dayHeaderClicked: a2,
  eventDropped: a3,
  dragEnter: a4,
  trackByWeekDayHeaderDate: a5
});
function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4);
    ɵɵlistener("mwlClick", function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template_div_mwlClick_0_listener($event) {
      const day_r2 = ɵɵrestoreView(_r1).$implicit;
      const dayHeaderClicked_r3 = ɵɵnextContext().dayHeaderClicked;
      return ɵɵresetView(dayHeaderClicked_r3.emit({
        day: day_r2,
        sourceEvent: $event
      }));
    })("drop", function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template_div_drop_0_listener($event) {
      const day_r2 = ɵɵrestoreView(_r1).$implicit;
      const eventDropped_r4 = ɵɵnextContext().eventDropped;
      return ɵɵresetView(eventDropped_r4.emit({
        event: $event.dropData.event,
        newStart: day_r2.date
      }));
    })("dragEnter", function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template_div_dragEnter_0_listener() {
      const day_r2 = ɵɵrestoreView(_r1).$implicit;
      const dragEnter_r5 = ɵɵnextContext().dragEnter;
      return ɵɵresetView(dragEnter_r5.emit({
        date: day_r2.date
      }));
    });
    ɵɵelementStart(1, "b");
    ɵɵtext(2);
    ɵɵpipe(3, "calendarDate");
    ɵɵelementEnd();
    ɵɵelement(4, "br");
    ɵɵelementStart(5, "span");
    ɵɵtext(6);
    ɵɵpipe(7, "calendarDate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const day_r2 = ctx.$implicit;
    const locale_r6 = ɵɵnextContext().locale;
    ɵɵclassProp("cal-past", day_r2.isPast)("cal-today", day_r2.isToday)("cal-future", day_r2.isFuture)("cal-weekend", day_r2.isWeekend);
    ɵɵproperty("ngClass", day_r2.cssClass);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind3(3, 11, day_r2.date, "weekViewColumnHeader", locale_r6));
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind3(7, 15, day_r2.date, "weekViewColumnSubHeader", locale_r6));
  }
}
function CalendarWeekViewHeaderComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtemplate(1, CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template, 8, 19, "div", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const days_r7 = ctx.days;
    const trackByWeekDayHeaderDate_r8 = ctx.trackByWeekDayHeaderDate;
    ɵɵadvance();
    ɵɵproperty("ngForOf", days_r7)("ngForTrackBy", trackByWeekDayHeaderDate_r8);
  }
}
function CalendarWeekViewHeaderComponent_ng_template_2_Template(rf, ctx) {
}
var _c17 = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => ({
  weekEvent: a0,
  tooltipPlacement: a1,
  eventClicked: a2,
  tooltipTemplate: a3,
  tooltipAppendToBody: a4,
  tooltipDisabled: a5,
  tooltipDelay: a6,
  column: a7,
  daysInWeek: a8
});
var _c18 = (a0, a1, a2) => ({
  color: a0,
  backgroundColor: a1,
  borderColor: a2
});
function CalendarWeekViewEventComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2);
    ɵɵpipe(1, "calendarEventTitle");
    ɵɵpipe(2, "calendarA11y");
    ɵɵlistener("mwlClick", function CalendarWeekViewEventComponent_ng_template_0_Template_div_mwlClick_0_listener($event) {
      const eventClicked_r2 = ɵɵrestoreView(_r1).eventClicked;
      return ɵɵresetView(eventClicked_r2.emit({
        sourceEvent: $event
      }));
    })("mwlKeydownEnter", function CalendarWeekViewEventComponent_ng_template_0_Template_div_mwlKeydownEnter_0_listener($event) {
      const eventClicked_r2 = ɵɵrestoreView(_r1).eventClicked;
      return ɵɵresetView(eventClicked_r2.emit({
        sourceEvent: $event
      }));
    });
    ɵɵelement(3, "mwl-calendar-event-actions", 3);
    ɵɵtext(4, " ");
    ɵɵelement(5, "mwl-calendar-event-title", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const weekEvent_r3 = ctx.weekEvent;
    const tooltipPlacement_r4 = ctx.tooltipPlacement;
    const tooltipTemplate_r5 = ctx.tooltipTemplate;
    const tooltipAppendToBody_r6 = ctx.tooltipAppendToBody;
    const tooltipDisabled_r7 = ctx.tooltipDisabled;
    const tooltipDelay_r8 = ctx.tooltipDelay;
    const daysInWeek_r9 = ctx.daysInWeek;
    const ctx_r9 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction3(20, _c18, weekEvent_r3.event.color == null ? null : weekEvent_r3.event.color.secondaryText, weekEvent_r3.event.color == null ? null : weekEvent_r3.event.color.secondary, weekEvent_r3.event.color == null ? null : weekEvent_r3.event.color.primary))("mwlCalendarTooltip", !tooltipDisabled_r7 ? ɵɵpipeBind3(1, 13, weekEvent_r3.event.title, daysInWeek_r9 === 1 ? "dayTooltip" : "weekTooltip", weekEvent_r3.tempEvent || weekEvent_r3.event) : "")("tooltipPlacement", tooltipPlacement_r4)("tooltipEvent", weekEvent_r3.tempEvent || weekEvent_r3.event)("tooltipTemplate", tooltipTemplate_r5)("tooltipAppendToBody", tooltipAppendToBody_r6)("tooltipDelay", tooltipDelay_r8);
    ɵɵattribute("aria-label", ɵɵpipeBind2(2, 17, ɵɵpureFunction2(24, _c14, weekEvent_r3.tempEvent || weekEvent_r3.event, ctx_r9.locale), "eventDescription"));
    ɵɵadvance(3);
    ɵɵproperty("event", weekEvent_r3.tempEvent || weekEvent_r3.event)("customTemplate", ctx_r9.eventActionsTemplate);
    ɵɵadvance(2);
    ɵɵproperty("event", weekEvent_r3.tempEvent || weekEvent_r3.event)("customTemplate", ctx_r9.eventTitleTemplate)("view", daysInWeek_r9 === 1 ? "day" : "week");
  }
}
function CalendarWeekViewEventComponent_ng_template_2_Template(rf, ctx) {
}
var _c19 = (a0, a1, a2, a3, a4) => ({
  segment: a0,
  locale: a1,
  segmentHeight: a2,
  isTimeLabel: a3,
  daysInWeek: a4
});
function CalendarWeekViewHourSegmentComponent_ng_template_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtext(1);
    ɵɵpipe(2, "calendarDate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const segment_r2 = ctx_r0.segment;
    const locale_r3 = ctx_r0.locale;
    const daysInWeek_r4 = ctx_r0.daysInWeek;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind3(2, 1, segment_r2.displayDate, daysInWeek_r4 === 1 ? "dayViewHour" : "weekViewHour", locale_r3), " ");
  }
}
function CalendarWeekViewHourSegmentComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵpipe(1, "calendarA11y");
    ɵɵtemplate(2, CalendarWeekViewHourSegmentComponent_ng_template_0_div_2_Template, 3, 5, "div", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const segment_r2 = ctx.segment;
    const segmentHeight_r5 = ctx.segmentHeight;
    const isTimeLabel_r6 = ctx.isTimeLabel;
    const daysInWeek_r4 = ctx.daysInWeek;
    ɵɵstyleProp("height", segmentHeight_r5, "px");
    ɵɵclassProp("cal-hour-start", segment_r2.isStart)("cal-after-hour-start", !segment_r2.isStart);
    ɵɵproperty("ngClass", segment_r2.cssClass);
    ɵɵattribute("aria-hidden", ɵɵpipeBind2(1, 9, ɵɵpureFunction0(12, _c3), daysInWeek_r4 === 1 ? "hideDayHourSegment" : "hideWeekHourSegment"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", isTimeLabel_r6);
  }
}
function CalendarWeekViewHourSegmentComponent_ng_template_2_Template(rf, ctx) {
}
var _c20 = (a0, a1, a2, a3, a4, a5, a6) => ({
  columnDate: a0,
  dayStartHour: a1,
  dayStartMinute: a2,
  dayEndHour: a3,
  dayEndMinute: a4,
  isVisible: a5,
  topPx: a6
});
function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 3);
  }
  if (rf & 2) {
    const topPx_r1 = ɵɵnextContext().topPx;
    ɵɵstyleProp("top", topPx_r1, "px");
  }
}
function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_div_0_Template, 1, 2, "div", 2);
  }
  if (rf & 2) {
    const isVisible_r2 = ctx.isVisible;
    ɵɵproperty("ngIf", isVisible_r2);
  }
}
function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_2_Template(rf, ctx) {
}
var _c21 = (a0, a1) => ({
  left: a0,
  right: a1
});
var _c22 = (a0, a1) => ({
  event: a0,
  calendarId: a1
});
var _c23 = (a0) => ({
  x: a0
});
var _c24 = () => ({
  left: true
});
var _c25 = () => ({
  right: true
});
var _c26 = (a0, a1, a2, a3) => ({
  left: a0,
  right: a1,
  top: a2,
  bottom: a3
});
var _c27 = () => ({
  left: true,
  top: true
});
var _c28 = () => ({
  right: true,
  bottom: true
});
function CalendarWeekViewComponent_div_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function CalendarWeekViewComponent_div_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 17);
    ɵɵlistener("drop", function CalendarWeekViewComponent_div_2_div_5_Template_div_drop_0_listener($event) {
      const day_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.eventDropped($event, day_r5.date, true));
    })("dragEnter", function CalendarWeekViewComponent_div_2_div_5_Template_div_dragEnter_0_listener() {
      const day_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.dateDragEnter(day_r5.date));
    });
    ɵɵelementEnd();
  }
}
function CalendarWeekViewComponent_div_2_div_6_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 24);
  }
  if (rf & 2) {
    ɵɵproperty("resizeEdges", ɵɵpureFunction0(1, _c24));
  }
}
function CalendarWeekViewComponent_div_2_div_6_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 25);
  }
  if (rf & 2) {
    ɵɵproperty("resizeEdges", ɵɵpureFunction0(1, _c25));
  }
}
function CalendarWeekViewComponent_div_2_div_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 20, 3);
    ɵɵlistener("resizeStart", function CalendarWeekViewComponent_div_2_div_6_div_2_Template_div_resizeStart_0_listener($event) {
      const allDayEvent_r7 = ɵɵrestoreView(_r6).$implicit;
      ɵɵnextContext();
      const eventRowContainer_r8 = ɵɵreference(1);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.allDayEventResizeStarted(eventRowContainer_r8, allDayEvent_r7, $event));
    })("resizing", function CalendarWeekViewComponent_div_2_div_6_div_2_Template_div_resizing_0_listener($event) {
      const allDayEvent_r7 = ɵɵrestoreView(_r6).$implicit;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.allDayEventResizing(allDayEvent_r7, $event, ctx_r2.dayColumnWidth));
    })("resizeEnd", function CalendarWeekViewComponent_div_2_div_6_div_2_Template_div_resizeEnd_0_listener() {
      const allDayEvent_r7 = ɵɵrestoreView(_r6).$implicit;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.allDayEventResizeEnded(allDayEvent_r7));
    })("dragStart", function CalendarWeekViewComponent_div_2_div_6_div_2_Template_div_dragStart_0_listener() {
      const allDayEvent_r7 = ɵɵrestoreView(_r6).$implicit;
      const event_r9 = ɵɵreference(1);
      ɵɵnextContext();
      const eventRowContainer_r8 = ɵɵreference(1);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.dragStarted(eventRowContainer_r8, event_r9, allDayEvent_r7, false));
    })("dragging", function CalendarWeekViewComponent_div_2_div_6_div_2_Template_div_dragging_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.allDayEventDragMove());
    })("dragEnd", function CalendarWeekViewComponent_div_2_div_6_div_2_Template_div_dragEnd_0_listener($event) {
      const allDayEvent_r7 = ɵɵrestoreView(_r6).$implicit;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.dragEnded(allDayEvent_r7, $event, ctx_r2.dayColumnWidth));
    });
    ɵɵtemplate(2, CalendarWeekViewComponent_div_2_div_6_div_2_div_2_Template, 1, 2, "div", 21);
    ɵɵelementStart(3, "mwl-calendar-week-view-event", 22);
    ɵɵlistener("eventClicked", function CalendarWeekViewComponent_div_2_div_6_div_2_Template_mwl_calendar_week_view_event_eventClicked_3_listener($event) {
      const allDayEvent_r7 = ɵɵrestoreView(_r6).$implicit;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.eventClicked.emit({
        event: allDayEvent_r7.event,
        sourceEvent: $event.sourceEvent
      }));
    });
    ɵɵelementEnd();
    ɵɵtemplate(4, CalendarWeekViewComponent_div_2_div_6_div_2_div_4_Template, 1, 2, "div", 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const allDayEvent_r7 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵstyleProp("width", 100 / ctx_r2.days.length * allDayEvent_r7.span, "%")("margin-left", ctx_r2.rtl ? null : 100 / ctx_r2.days.length * allDayEvent_r7.offset, "%")("margin-right", ctx_r2.rtl ? 100 / ctx_r2.days.length * allDayEvent_r7.offset : null, "%");
    ɵɵclassProp("cal-draggable", allDayEvent_r7.event.draggable && ctx_r2.allDayEventResizes.size === 0)("cal-starts-within-week", !allDayEvent_r7.startsBeforeWeek)("cal-ends-within-week", !allDayEvent_r7.endsAfterWeek);
    ɵɵproperty("ngClass", allDayEvent_r7.event == null ? null : allDayEvent_r7.event.cssClass)("resizeCursors", ctx_r2.resizeCursors)("resizeSnapGrid", ɵɵpureFunction2(33, _c21, ctx_r2.dayColumnWidth, ctx_r2.dayColumnWidth))("validateResize", ctx_r2.validateResize)("dropData", ɵɵpureFunction2(36, _c22, allDayEvent_r7.event, ctx_r2.calendarId))("dragAxis", ɵɵpureFunction2(39, _c9, allDayEvent_r7.event.draggable && ctx_r2.allDayEventResizes.size === 0, !ctx_r2.snapDraggedEvents && allDayEvent_r7.event.draggable && ctx_r2.allDayEventResizes.size === 0))("dragSnapGrid", ctx_r2.snapDraggedEvents ? ɵɵpureFunction1(42, _c23, ctx_r2.dayColumnWidth) : ɵɵpureFunction0(44, _c3))("validateDrag", ctx_r2.validateDrag)("touchStartLongPress", ɵɵpureFunction0(45, _c10));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", (allDayEvent_r7.event == null ? null : allDayEvent_r7.event.resizable == null ? null : allDayEvent_r7.event.resizable.beforeStart) && !allDayEvent_r7.startsBeforeWeek);
    ɵɵadvance();
    ɵɵproperty("locale", ctx_r2.locale)("weekEvent", allDayEvent_r7)("tooltipPlacement", ctx_r2.tooltipPlacement)("tooltipTemplate", ctx_r2.tooltipTemplate)("tooltipAppendToBody", ctx_r2.tooltipAppendToBody)("tooltipDelay", ctx_r2.tooltipDelay)("customTemplate", ctx_r2.eventTemplate)("eventTitleTemplate", ctx_r2.eventTitleTemplate)("eventActionsTemplate", ctx_r2.eventActionsTemplate)("daysInWeek", ctx_r2.daysInWeek);
    ɵɵadvance();
    ɵɵproperty("ngIf", (allDayEvent_r7.event == null ? null : allDayEvent_r7.event.resizable == null ? null : allDayEvent_r7.event.resizable.afterEnd) && !allDayEvent_r7.endsAfterWeek);
  }
}
function CalendarWeekViewComponent_div_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 18, 2);
    ɵɵtemplate(2, CalendarWeekViewComponent_div_2_div_6_div_2_Template, 5, 46, "div", 19);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const eventRow_r10 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", eventRow_r10.row)("ngForTrackBy", ctx_r2.trackByWeekAllDayEvent);
  }
}
function CalendarWeekViewComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 12, 1);
    ɵɵlistener("dragEnter", function CalendarWeekViewComponent_div_2_Template_div_dragEnter_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.dragEnter("allDay"));
    })("dragLeave", function CalendarWeekViewComponent_div_2_Template_div_dragLeave_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.dragLeave("allDay"));
    });
    ɵɵelementStart(2, "div", 10)(3, "div", 13);
    ɵɵtemplate(4, CalendarWeekViewComponent_div_2_ng_container_4_Template, 1, 0, "ng-container", 14);
    ɵɵelementEnd();
    ɵɵtemplate(5, CalendarWeekViewComponent_div_2_div_5_Template, 1, 0, "div", 15);
    ɵɵelementEnd();
    ɵɵtemplate(6, CalendarWeekViewComponent_div_2_div_6_Template, 3, 2, "div", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.allDayEventsLabelTemplate);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.days)("ngForTrackBy", ctx_r2.trackByWeekDayHeaderDate);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.view.allDayEventRows)("ngForTrackBy", ctx_r2.trackById);
  }
}
function CalendarWeekViewComponent_div_4_div_1_mwl_calendar_week_view_hour_segment_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "mwl-calendar-week-view-hour-segment", 29);
  }
  if (rf & 2) {
    const segment_r11 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵstyleProp("height", ctx_r2.hourSegmentHeight, "px");
    ɵɵproperty("segment", segment_r11)("segmentHeight", ctx_r2.hourSegmentHeight)("locale", ctx_r2.locale)("customTemplate", ctx_r2.hourSegmentTemplate)("isTimeLabel", true)("daysInWeek", ctx_r2.daysInWeek);
  }
}
function CalendarWeekViewComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 27);
    ɵɵtemplate(1, CalendarWeekViewComponent_div_4_div_1_mwl_calendar_week_view_hour_segment_1_Template, 1, 8, "mwl-calendar-week-view-hour-segment", 28);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const hour_r12 = ctx.$implicit;
    const odd_r13 = ctx.odd;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassProp("cal-hour-odd", odd_r13);
    ɵɵadvance();
    ɵɵproperty("ngForOf", hour_r12.segments)("ngForTrackBy", ctx_r2.trackByHourSegment);
  }
}
function CalendarWeekViewComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵtemplate(1, CalendarWeekViewComponent_div_4_div_1_Template, 2, 4, "div", 26);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.view.hourColumns[0].hours)("ngForTrackBy", ctx_r2.trackByHour);
  }
}
function CalendarWeekViewComponent_div_7_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 24);
  }
  if (rf & 2) {
    ɵɵproperty("resizeEdges", ɵɵpureFunction0(1, _c27));
  }
}
function CalendarWeekViewComponent_div_7_div_3_ng_template_3_Template(rf, ctx) {
}
function CalendarWeekViewComponent_div_7_div_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mwl-calendar-week-view-event", 36);
    ɵɵlistener("eventClicked", function CalendarWeekViewComponent_div_7_div_3_ng_template_4_Template_mwl_calendar_week_view_event_eventClicked_0_listener($event) {
      ɵɵrestoreView(_r18);
      const timeEvent_r15 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.eventClicked.emit({
        event: timeEvent_r15.event,
        sourceEvent: $event.sourceEvent
      }));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const timeEvent_r15 = ɵɵnextContext().$implicit;
    const column_r19 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("locale", ctx_r2.locale)("weekEvent", timeEvent_r15)("tooltipPlacement", ctx_r2.tooltipPlacement)("tooltipTemplate", ctx_r2.tooltipTemplate)("tooltipAppendToBody", ctx_r2.tooltipAppendToBody)("tooltipDisabled", ctx_r2.dragActive || ctx_r2.timeEventResizes.size > 0)("tooltipDelay", ctx_r2.tooltipDelay)("customTemplate", ctx_r2.eventTemplate)("eventTitleTemplate", ctx_r2.eventTitleTemplate)("eventActionsTemplate", ctx_r2.eventActionsTemplate)("column", column_r19)("daysInWeek", ctx_r2.daysInWeek);
  }
}
function CalendarWeekViewComponent_div_7_div_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 25);
  }
  if (rf & 2) {
    ɵɵproperty("resizeEdges", ɵɵpureFunction0(1, _c28));
  }
}
function CalendarWeekViewComponent_div_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 34, 3);
    ɵɵlistener("resizeStart", function CalendarWeekViewComponent_div_7_div_3_Template_div_resizeStart_0_listener($event) {
      const timeEvent_r15 = ɵɵrestoreView(_r14).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      const dayColumns_r16 = ɵɵreference(6);
      return ɵɵresetView(ctx_r2.timeEventResizeStarted(dayColumns_r16, timeEvent_r15, $event));
    })("resizing", function CalendarWeekViewComponent_div_7_div_3_Template_div_resizing_0_listener($event) {
      const timeEvent_r15 = ɵɵrestoreView(_r14).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.timeEventResizing(timeEvent_r15, $event));
    })("resizeEnd", function CalendarWeekViewComponent_div_7_div_3_Template_div_resizeEnd_0_listener() {
      const timeEvent_r15 = ɵɵrestoreView(_r14).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.timeEventResizeEnded(timeEvent_r15));
    })("dragStart", function CalendarWeekViewComponent_div_7_div_3_Template_div_dragStart_0_listener() {
      const timeEvent_r15 = ɵɵrestoreView(_r14).$implicit;
      const event_r17 = ɵɵreference(1);
      const ctx_r2 = ɵɵnextContext(2);
      const dayColumns_r16 = ɵɵreference(6);
      return ɵɵresetView(ctx_r2.dragStarted(dayColumns_r16, event_r17, timeEvent_r15, true));
    })("dragging", function CalendarWeekViewComponent_div_7_div_3_Template_div_dragging_0_listener($event) {
      const timeEvent_r15 = ɵɵrestoreView(_r14).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.dragMove(timeEvent_r15, $event));
    })("dragEnd", function CalendarWeekViewComponent_div_7_div_3_Template_div_dragEnd_0_listener($event) {
      const timeEvent_r15 = ɵɵrestoreView(_r14).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.dragEnded(timeEvent_r15, $event, ctx_r2.dayColumnWidth, true));
    });
    ɵɵtemplate(2, CalendarWeekViewComponent_div_7_div_3_div_2_Template, 1, 2, "div", 21)(3, CalendarWeekViewComponent_div_7_div_3_ng_template_3_Template, 0, 0, "ng-template", 35)(4, CalendarWeekViewComponent_div_7_div_3_ng_template_4_Template, 1, 12, "ng-template", null, 4, ɵɵtemplateRefExtractor)(6, CalendarWeekViewComponent_div_7_div_3_div_6_Template, 1, 2, "div", 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const timeEvent_r15 = ctx.$implicit;
    const weekEventTemplate_r20 = ɵɵreference(5);
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵstyleProp("top", timeEvent_r15.top, "px")("height", timeEvent_r15.height, "px")("left", timeEvent_r15.left, "%")("width", timeEvent_r15.width, "%");
    ɵɵclassProp("cal-draggable", timeEvent_r15.event.draggable && ctx_r2.timeEventResizes.size === 0)("cal-starts-within-day", !timeEvent_r15.startsBeforeDay)("cal-ends-within-day", !timeEvent_r15.endsAfterDay);
    ɵɵproperty("ngClass", timeEvent_r15.event.cssClass)("hidden", timeEvent_r15.height === 0 && timeEvent_r15.width === 0)("resizeCursors", ctx_r2.resizeCursors)("resizeSnapGrid", ɵɵpureFunction4(30, _c26, ctx_r2.dayColumnWidth, ctx_r2.dayColumnWidth, ctx_r2.eventSnapSize || ctx_r2.hourSegmentHeight, ctx_r2.eventSnapSize || ctx_r2.hourSegmentHeight))("validateResize", ctx_r2.validateResize)("allowNegativeResizes", true)("dropData", ɵɵpureFunction2(35, _c22, timeEvent_r15.event, ctx_r2.calendarId))("dragAxis", ɵɵpureFunction2(38, _c9, timeEvent_r15.event.draggable && ctx_r2.timeEventResizes.size === 0, timeEvent_r15.event.draggable && ctx_r2.timeEventResizes.size === 0))("dragSnapGrid", ctx_r2.snapDraggedEvents ? ɵɵpureFunction2(41, _c9, ctx_r2.dayColumnWidth, ctx_r2.eventSnapSize || ctx_r2.hourSegmentHeight) : ɵɵpureFunction0(44, _c3))("touchStartLongPress", ɵɵpureFunction0(45, _c10))("ghostDragEnabled", !ctx_r2.snapDraggedEvents)("ghostElementTemplate", weekEventTemplate_r20)("validateDrag", ctx_r2.validateDrag);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", (timeEvent_r15.event == null ? null : timeEvent_r15.event.resizable == null ? null : timeEvent_r15.event.resizable.beforeStart) && !timeEvent_r15.startsBeforeDay);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", weekEventTemplate_r20);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", (timeEvent_r15.event == null ? null : timeEvent_r15.event.resizable == null ? null : timeEvent_r15.event.resizable.afterEnd) && !timeEvent_r15.endsAfterDay);
  }
}
function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mwl-calendar-week-view-hour-segment", 38);
    ɵɵlistener("mwlClick", function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template_mwl_calendar_week_view_hour_segment_mwlClick_0_listener($event) {
      const segment_r22 = ɵɵrestoreView(_r21).$implicit;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.hourSegmentClicked.emit({
        date: segment_r22.date,
        sourceEvent: $event
      }));
    })("drop", function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template_mwl_calendar_week_view_hour_segment_drop_0_listener($event) {
      const segment_r22 = ɵɵrestoreView(_r21).$implicit;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.eventDropped($event, segment_r22.date, false));
    })("dragEnter", function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template_mwl_calendar_week_view_hour_segment_dragEnter_0_listener() {
      const segment_r22 = ɵɵrestoreView(_r21).$implicit;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.dateDragEnter(segment_r22.date));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const segment_r22 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵstyleProp("height", ctx_r2.hourSegmentHeight, "px");
    ɵɵproperty("segment", segment_r22)("segmentHeight", ctx_r2.hourSegmentHeight)("locale", ctx_r2.locale)("customTemplate", ctx_r2.hourSegmentTemplate)("daysInWeek", ctx_r2.daysInWeek)("clickListenerDisabled", ctx_r2.hourSegmentClicked.observers.length === 0)("dragOverClass", !ctx_r2.dragActive || !ctx_r2.snapDraggedEvents ? "cal-drag-over" : null)("isTimeLabel", ctx_r2.daysInWeek === 1);
  }
}
function CalendarWeekViewComponent_div_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 27);
    ɵɵtemplate(1, CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template, 1, 10, "mwl-calendar-week-view-hour-segment", 37);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const hour_r23 = ctx.$implicit;
    const odd_r24 = ctx.odd;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassProp("cal-hour-odd", odd_r24);
    ɵɵadvance();
    ɵɵproperty("ngForOf", hour_r23.segments)("ngForTrackBy", ctx_r2.trackByHourSegment);
  }
}
function CalendarWeekViewComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 30);
    ɵɵelement(1, "mwl-calendar-week-view-current-time-marker", 31);
    ɵɵelementStart(2, "div", 32);
    ɵɵtemplate(3, CalendarWeekViewComponent_div_7_div_3_Template, 7, 46, "div", 33);
    ɵɵelementEnd();
    ɵɵtemplate(4, CalendarWeekViewComponent_div_7_div_4_Template, 2, 4, "div", 26);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r19 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("columnDate", column_r19.date)("dayStartHour", ctx_r2.dayStartHour)("dayStartMinute", ctx_r2.dayStartMinute)("dayEndHour", ctx_r2.dayEndHour)("dayEndMinute", ctx_r2.dayEndMinute)("hourSegments", ctx_r2.hourSegments)("hourDuration", ctx_r2.hourDuration)("hourSegmentHeight", ctx_r2.hourSegmentHeight)("customTemplate", ctx_r2.currentTimeMarkerTemplate);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", column_r19.events)("ngForTrackBy", ctx_r2.trackByWeekTimeEvent);
    ɵɵadvance();
    ɵɵproperty("ngForOf", column_r19.hours)("ngForTrackBy", ctx_r2.trackByHour);
  }
}
var ClickDirective = class {
  constructor(renderer, elm, document2) {
    this.renderer = renderer;
    this.elm = elm;
    this.document = document2;
    this.clickListenerDisabled = false;
    this.click = new EventEmitter();
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    if (!this.clickListenerDisabled) {
      this.listen().pipe(takeUntil(this.destroy$)).subscribe((event) => {
        event.stopPropagation();
        this.click.emit(event);
      });
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
  }
  listen() {
    return new Observable((observer) => {
      return this.renderer.listen(this.elm.nativeElement, "click", (event) => {
        observer.next(event);
      });
    });
  }
};
ClickDirective.ɵfac = function ClickDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ClickDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DOCUMENT));
};
ClickDirective.ɵdir = ɵɵdefineDirective({
  type: ClickDirective,
  selectors: [["", "mwlClick", ""]],
  inputs: {
    clickListenerDisabled: "clickListenerDisabled"
  },
  outputs: {
    click: "mwlClick"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClickDirective, [{
    type: Directive,
    args: [{
      selector: "[mwlClick]"
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: ElementRef
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, {
    clickListenerDisabled: [{
      type: Input
    }],
    click: [{
      type: Output,
      args: ["mwlClick"]
    }]
  });
})();
var KeydownEnterDirective = class {
  constructor(host, ngZone, renderer) {
    this.host = host;
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.keydown = new EventEmitter();
    this.keydownListener = null;
  }
  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.keydownListener = this.renderer.listen(this.host.nativeElement, "keydown", (event) => {
        if (event.keyCode === 13 || event.which === 13 || event.key === "Enter") {
          event.preventDefault();
          event.stopPropagation();
          this.ngZone.run(() => {
            this.keydown.emit(event);
          });
        }
      });
    });
  }
  ngOnDestroy() {
    if (this.keydownListener !== null) {
      this.keydownListener();
      this.keydownListener = null;
    }
  }
};
KeydownEnterDirective.ɵfac = function KeydownEnterDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || KeydownEnterDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2));
};
KeydownEnterDirective.ɵdir = ɵɵdefineDirective({
  type: KeydownEnterDirective,
  selectors: [["", "mwlKeydownEnter", ""]],
  outputs: {
    keydown: "mwlKeydownEnter"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KeydownEnterDirective, [{
    type: Directive,
    args: [{
      selector: "[mwlKeydownEnter]"
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: Renderer2
    }];
  }, {
    keydown: [{
      type: Output,
      args: ["mwlKeydownEnter"]
    }]
  });
})();
var CalendarA11y = class {
  constructor(i18nPlural) {
    this.i18nPlural = i18nPlural;
  }
  /**
   * Aria label for the badges/date of a cell
   * @example: `Saturday October 19 1 event click to expand`
   */
  monthCell({
    day,
    locale
  }) {
    if (day.badgeTotal > 0) {
      return `
        ${formatDate(day.date, "EEEE MMMM d", locale)},
        ${this.i18nPlural.transform(day.badgeTotal, {
        "=0": "No events",
        "=1": "One event",
        other: "# events"
      })},
         click to expand
      `;
    } else {
      return `${formatDate(day.date, "EEEE MMMM d", locale)}`;
    }
  }
  /**
   * Aria label for the open day events start landmark
   * @example: `Saturday October 19 expanded view`
   */
  openDayEventsLandmark({
    date,
    locale
  }) {
    return `
      Beginning of expanded view for ${formatDate(date, "EEEE MMMM dd", locale)}
    `;
  }
  /**
   * Aria label for alert that a day in the month view was expanded
   * @example: `Saturday October 19 expanded`
   */
  openDayEventsAlert({
    date,
    locale
  }) {
    return `${formatDate(date, "EEEE MMMM dd", locale)} expanded`;
  }
  /**
   * Descriptive aria label for an event
   * @example: `Saturday October 19th, Scott's Pizza Party, from 11:00am to 5:00pm`
   */
  eventDescription({
    event,
    locale
  }) {
    if (event.allDay === true) {
      return this.allDayEventDescription({
        event,
        locale
      });
    }
    const aria = `
      ${formatDate(event.start, "EEEE MMMM dd", locale)},
      ${event.title}, from ${formatDate(event.start, "hh:mm a", locale)}
    `;
    if (event.end) {
      return aria + ` to ${formatDate(event.end, "hh:mm a", locale)}`;
    }
    return aria;
  }
  /**
   * Descriptive aria label for an all day event
   * @example:
   * `Scott's Party, event spans multiple days: start time October 19 5:00pm, no stop time`
   */
  allDayEventDescription({
    event,
    locale
  }) {
    const aria = `
      ${event.title}, event spans multiple days:
      start time ${formatDate(event.start, "MMMM dd hh:mm a", locale)}
    `;
    if (event.end) {
      return aria + `, stop time ${formatDate(event.end, "MMMM d hh:mm a", locale)}`;
    }
    return aria + `, no stop time`;
  }
  /**
   * Aria label for the calendar event actions icons
   * @returns 'Edit' for fa-pencil icons, and 'Delete' for fa-times icons
   */
  actionButtonLabel({
    action
  }) {
    return action.a11yLabel;
  }
  /**
   * @returns {number} Tab index to be given to month cells
   */
  monthCellTabIndex() {
    return 0;
  }
  /**
   * @returns true if the events inside the month cell should be aria-hidden
   */
  hideMonthCellEvents() {
    return true;
  }
  /**
   * @returns true if event titles should be aria-hidden (global)
   */
  hideEventTitle() {
    return true;
  }
  /**
   * @returns true if hour segments in the week view should be aria-hidden
   */
  hideWeekHourSegment() {
    return true;
  }
  /**
   * @returns true if hour segments in the day view should be aria-hidden
   */
  hideDayHourSegment() {
    return true;
  }
};
CalendarA11y.ɵfac = function CalendarA11y_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CalendarA11y)(ɵɵinject(I18nPluralPipe));
};
CalendarA11y.ɵprov = ɵɵdefineInjectable({
  token: CalendarA11y,
  factory: CalendarA11y.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarA11y, [{
    type: Injectable
  }], function() {
    return [{
      type: I18nPluralPipe
    }];
  }, null);
})();
var CalendarA11yPipe = class {
  constructor(calendarA11y, locale) {
    this.calendarA11y = calendarA11y;
    this.locale = locale;
  }
  transform(a11yParams, method) {
    a11yParams.locale = a11yParams.locale || this.locale;
    if (typeof this.calendarA11y[method] === "undefined") {
      const allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(CalendarA11y.prototype)).filter((iMethod) => iMethod !== "constructor");
      throw new Error(`${method} is not a valid a11y method. Can only be one of ${allowedMethods.join(", ")}`);
    }
    return this.calendarA11y[method](a11yParams);
  }
};
CalendarA11yPipe.ɵfac = function CalendarA11yPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CalendarA11yPipe)(ɵɵdirectiveInject(CalendarA11y, 16), ɵɵdirectiveInject(LOCALE_ID, 16));
};
CalendarA11yPipe.ɵpipe = ɵɵdefinePipe({
  name: "calendarA11y",
  type: CalendarA11yPipe,
  pure: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarA11yPipe, [{
    type: Pipe,
    args: [{
      name: "calendarA11y"
    }]
  }], function() {
    return [{
      type: CalendarA11y
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [LOCALE_ID]
      }]
    }];
  }, null);
})();
var CalendarEventActionsComponent = class {
  constructor() {
    this.trackByActionId = (index, action) => action.id ? action.id : action;
  }
};
CalendarEventActionsComponent.ɵfac = function CalendarEventActionsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CalendarEventActionsComponent)();
};
CalendarEventActionsComponent.ɵcmp = ɵɵdefineComponent({
  type: CalendarEventActionsComponent,
  selectors: [["mwl-calendar-event-actions"]],
  inputs: {
    event: "event",
    customTemplate: "customTemplate"
  },
  decls: 3,
  vars: 5,
  consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-event-actions", 4, "ngIf"], [1, "cal-event-actions"], ["class", "cal-event-action", "href", "javascript:;", "tabindex", "0", "role", "button", 3, "ngClass", "innerHtml", "mwlClick", "mwlKeydownEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["href", "javascript:;", "tabindex", "0", "role", "button", 1, "cal-event-action", 3, "mwlClick", "mwlKeydownEnter", "ngClass", "innerHtml"]],
  template: function CalendarEventActionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, CalendarEventActionsComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, CalendarEventActionsComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    }
    if (rf & 2) {
      const defaultTemplate_r6 = ɵɵreference(1);
      ɵɵadvance(2);
      ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || defaultTemplate_r6)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c0, ctx.event, ctx.trackByActionId));
    }
  },
  dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, ClickDirective, KeydownEnterDirective, CalendarA11yPipe],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarEventActionsComponent, [{
    type: Component,
    args: [{
      selector: "mwl-calendar-event-actions",
      template: `
    <ng-template
      #defaultTemplate
      let-event="event"
      let-trackByActionId="trackByActionId"
    >
      <span *ngIf="event.actions" class="cal-event-actions">
        <a
          class="cal-event-action"
          href="javascript:;"
          *ngFor="let action of event.actions; trackBy: trackByActionId"
          (mwlClick)="action.onClick({ event: event, sourceEvent: $event })"
          (mwlKeydownEnter)="
            action.onClick({ event: event, sourceEvent: $event })
          "
          [ngClass]="action.cssClass"
          [innerHtml]="action.label"
          tabindex="0"
          role="button"
          [attr.aria-label]="
            { action: action } | calendarA11y : 'actionButtonLabel'
          "
        >
        </a>
      </span>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        event: event,
        trackByActionId: trackByActionId
      }"
    >
    </ng-template>
  `
    }]
  }], null, {
    event: [{
      type: Input
    }],
    customTemplate: [{
      type: Input
    }]
  });
})();
var CalendarEventTitleFormatter = class {
  /**
   * The month view event title.
   */
  month(event, title) {
    return event.title;
  }
  /**
   * The month view event tooltip. Return a falsey value from this to disable the tooltip.
   */
  monthTooltip(event, title) {
    return event.title;
  }
  /**
   * The week view event title.
   */
  week(event, title) {
    return event.title;
  }
  /**
   * The week view event tooltip. Return a falsey value from this to disable the tooltip.
   */
  weekTooltip(event, title) {
    return event.title;
  }
  /**
   * The day view event title.
   */
  day(event, title) {
    return event.title;
  }
  /**
   * The day view event tooltip. Return a falsey value from this to disable the tooltip.
   */
  dayTooltip(event, title) {
    return event.title;
  }
};
var CalendarEventTitlePipe = class {
  constructor(calendarEventTitle) {
    this.calendarEventTitle = calendarEventTitle;
  }
  transform(title, titleType, event) {
    return this.calendarEventTitle[titleType](event, title);
  }
};
CalendarEventTitlePipe.ɵfac = function CalendarEventTitlePipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CalendarEventTitlePipe)(ɵɵdirectiveInject(CalendarEventTitleFormatter, 16));
};
CalendarEventTitlePipe.ɵpipe = ɵɵdefinePipe({
  name: "calendarEventTitle",
  type: CalendarEventTitlePipe,
  pure: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarEventTitlePipe, [{
    type: Pipe,
    args: [{
      name: "calendarEventTitle"
    }]
  }], function() {
    return [{
      type: CalendarEventTitleFormatter
    }];
  }, null);
})();
var CalendarEventTitleComponent = class {
};
CalendarEventTitleComponent.ɵfac = function CalendarEventTitleComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CalendarEventTitleComponent)();
};
CalendarEventTitleComponent.ɵcmp = ɵɵdefineComponent({
  type: CalendarEventTitleComponent,
  selectors: [["mwl-calendar-event-title"]],
  inputs: {
    event: "event",
    customTemplate: "customTemplate",
    view: "view"
  },
  decls: 3,
  vars: 5,
  consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-event-title", 3, "innerHTML"]],
  template: function CalendarEventTitleComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, CalendarEventTitleComponent_ng_template_0_Template, 3, 10, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, CalendarEventTitleComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    }
    if (rf & 2) {
      const defaultTemplate_r3 = ɵɵreference(1);
      ɵɵadvance(2);
      ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || defaultTemplate_r3)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c2, ctx.event, ctx.view));
    }
  },
  dependencies: [NgTemplateOutlet, CalendarEventTitlePipe, CalendarA11yPipe],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarEventTitleComponent, [{
    type: Component,
    args: [{
      selector: "mwl-calendar-event-title",
      template: `
    <ng-template #defaultTemplate let-event="event" let-view="view">
      <span
        class="cal-event-title"
        [innerHTML]="event.title | calendarEventTitle : view : event"
        [attr.aria-hidden]="{} | calendarA11y : 'hideEventTitle'"
      >
      </span>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        event: event,
        view: view
      }"
    >
    </ng-template>
  `
    }]
  }], null, {
    event: [{
      type: Input
    }],
    customTemplate: [{
      type: Input
    }],
    view: [{
      type: Input
    }]
  });
})();
var CalendarTooltipWindowComponent = class {
};
CalendarTooltipWindowComponent.ɵfac = function CalendarTooltipWindowComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CalendarTooltipWindowComponent)();
};
CalendarTooltipWindowComponent.ɵcmp = ɵɵdefineComponent({
  type: CalendarTooltipWindowComponent,
  selectors: [["mwl-calendar-tooltip-window"]],
  inputs: {
    contents: "contents",
    placement: "placement",
    event: "event",
    customTemplate: "customTemplate"
  },
  decls: 3,
  vars: 6,
  consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-tooltip", 3, "ngClass"], [1, "cal-tooltip-arrow"], [1, "cal-tooltip-inner", 3, "innerHtml"]],
  template: function CalendarTooltipWindowComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, CalendarTooltipWindowComponent_ng_template_0_Template, 3, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, CalendarTooltipWindowComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    }
    if (rf & 2) {
      const defaultTemplate_r3 = ɵɵreference(1);
      ɵɵadvance(2);
      ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || defaultTemplate_r3)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c4, ctx.contents, ctx.placement, ctx.event));
    }
  },
  dependencies: [NgClass, NgTemplateOutlet],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarTooltipWindowComponent, [{
    type: Component,
    args: [{
      selector: "mwl-calendar-tooltip-window",
      template: `
    <ng-template
      #defaultTemplate
      let-contents="contents"
      let-placement="placement"
      let-event="event"
    >
      <div class="cal-tooltip" [ngClass]="'cal-tooltip-' + placement">
        <div class="cal-tooltip-arrow"></div>
        <div class="cal-tooltip-inner" [innerHtml]="contents"></div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        contents: contents,
        placement: placement,
        event: event
      }"
    >
    </ng-template>
  `
    }]
  }], null, {
    contents: [{
      type: Input
    }],
    placement: [{
      type: Input
    }],
    event: [{
      type: Input
    }],
    customTemplate: [{
      type: Input
    }]
  });
})();
var CalendarTooltipDirective = class {
  constructor(elementRef, injector, renderer, componentFactoryResolver, viewContainerRef, document2) {
    this.elementRef = elementRef;
    this.injector = injector;
    this.renderer = renderer;
    this.viewContainerRef = viewContainerRef;
    this.document = document2;
    this.placement = "auto";
    this.delay = null;
    this.cancelTooltipDelay$ = new Subject();
    this.tooltipFactory = componentFactoryResolver.resolveComponentFactory(CalendarTooltipWindowComponent);
  }
  ngOnChanges(changes) {
    if (this.tooltipRef && (changes.contents || changes.customTemplate || changes.event)) {
      this.tooltipRef.instance.contents = this.contents;
      this.tooltipRef.instance.customTemplate = this.customTemplate;
      this.tooltipRef.instance.event = this.event;
      this.tooltipRef.changeDetectorRef.markForCheck();
      if (!this.contents) {
        this.hide();
      }
    }
  }
  ngOnDestroy() {
    this.hide();
  }
  onMouseOver() {
    const delay$ = this.delay === null ? of("now") : timer(this.delay);
    delay$.pipe(takeUntil(this.cancelTooltipDelay$)).subscribe(() => {
      this.show();
    });
  }
  onMouseOut() {
    this.hide();
  }
  show() {
    if (!this.tooltipRef && this.contents) {
      this.tooltipRef = this.viewContainerRef.createComponent(this.tooltipFactory, 0, this.injector, []);
      this.tooltipRef.instance.contents = this.contents;
      this.tooltipRef.instance.customTemplate = this.customTemplate;
      this.tooltipRef.instance.event = this.event;
      if (this.appendToBody) {
        this.document.body.appendChild(this.tooltipRef.location.nativeElement);
      }
      requestAnimationFrame(() => {
        this.positionTooltip();
      });
    }
  }
  hide() {
    if (this.tooltipRef) {
      this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.tooltipRef.hostView));
      this.tooltipRef = null;
    }
    this.cancelTooltipDelay$.next();
  }
  positionTooltip(previousPositions = []) {
    if (this.tooltipRef) {
      this.tooltipRef.changeDetectorRef.detectChanges();
      this.tooltipRef.instance.placement = positionElements(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement.children[0], this.placement, this.appendToBody);
      if (previousPositions.indexOf(this.tooltipRef.instance.placement) === -1) {
        this.positionTooltip([...previousPositions, this.tooltipRef.instance.placement]);
      }
    }
  }
};
CalendarTooltipDirective.ɵfac = function CalendarTooltipDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CalendarTooltipDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ComponentFactoryResolver$1), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(DOCUMENT));
};
CalendarTooltipDirective.ɵdir = ɵɵdefineDirective({
  type: CalendarTooltipDirective,
  selectors: [["", "mwlCalendarTooltip", ""]],
  hostBindings: function CalendarTooltipDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("mouseenter", function CalendarTooltipDirective_mouseenter_HostBindingHandler() {
        return ctx.onMouseOver();
      })("mouseleave", function CalendarTooltipDirective_mouseleave_HostBindingHandler() {
        return ctx.onMouseOut();
      });
    }
  },
  inputs: {
    contents: [0, "mwlCalendarTooltip", "contents"],
    placement: [0, "tooltipPlacement", "placement"],
    customTemplate: [0, "tooltipTemplate", "customTemplate"],
    event: [0, "tooltipEvent", "event"],
    appendToBody: [0, "tooltipAppendToBody", "appendToBody"],
    delay: [0, "tooltipDelay", "delay"]
  },
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarTooltipDirective, [{
    type: Directive,
    args: [{
      selector: "[mwlCalendarTooltip]"
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Injector
    }, {
      type: Renderer2
    }, {
      type: ComponentFactoryResolver$1
    }, {
      type: ViewContainerRef
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, {
    contents: [{
      type: Input,
      args: ["mwlCalendarTooltip"]
    }],
    placement: [{
      type: Input,
      args: ["tooltipPlacement"]
    }],
    customTemplate: [{
      type: Input,
      args: ["tooltipTemplate"]
    }],
    event: [{
      type: Input,
      args: ["tooltipEvent"]
    }],
    appendToBody: [{
      type: Input,
      args: ["tooltipAppendToBody"]
    }],
    delay: [{
      type: Input,
      args: ["tooltipDelay"]
    }],
    onMouseOver: [{
      type: HostListener,
      args: ["mouseenter"]
    }],
    onMouseOut: [{
      type: HostListener,
      args: ["mouseleave"]
    }]
  });
})();
var CalendarView;
(function(CalendarView2) {
  CalendarView2["Month"] = "month";
  CalendarView2["Week"] = "week";
  CalendarView2["Day"] = "day";
})(CalendarView || (CalendarView = {}));
var validateEvents2 = (events) => {
  const warn = (...args) => console.warn("angular-calendar", ...args);
  return validateEvents(events, warn);
};
function isInsideLeftAndRight(outer, inner) {
  return Math.floor(outer.left) <= Math.ceil(inner.left) && Math.floor(inner.left) <= Math.ceil(outer.right) && Math.floor(outer.left) <= Math.ceil(inner.right) && Math.floor(inner.right) <= Math.ceil(outer.right);
}
function isInsideTopAndBottom(outer, inner) {
  return Math.floor(outer.top) <= Math.ceil(inner.top) && Math.floor(inner.top) <= Math.ceil(outer.bottom) && Math.floor(outer.top) <= Math.ceil(inner.bottom) && Math.floor(inner.bottom) <= Math.ceil(outer.bottom);
}
function isInside(outer, inner) {
  return isInsideLeftAndRight(outer, inner) && isInsideTopAndBottom(outer, inner);
}
function roundToNearest(amount, precision) {
  return Math.round(amount / precision) * precision;
}
var trackByEventId = (index, event) => event.id ? event.id : event;
var trackByWeekDayHeaderDate = (index, day) => day.date.toISOString();
var trackByHourSegment = (index, segment) => segment.date.toISOString();
var trackByHour = (index, hour) => hour.segments[0].date.toISOString();
var trackByWeekAllDayEvent = (index, weekEvent) => weekEvent.event.id ? weekEvent.event.id : weekEvent.event;
var trackByWeekTimeEvent = (index, weekEvent) => weekEvent.event.id ? weekEvent.event.id : weekEvent.event;
var MINUTES_IN_HOUR2 = 60;
function getPixelAmountInMinutes(hourSegments, hourSegmentHeight, hourDuration) {
  return (hourDuration || MINUTES_IN_HOUR2) / (hourSegments * hourSegmentHeight);
}
function getMinutesMoved(movedY, hourSegments, hourSegmentHeight, eventSnapSize, hourDuration) {
  const draggedInPixelsSnapSize = roundToNearest(movedY, eventSnapSize || hourSegmentHeight);
  const pixelAmountInMinutes = getPixelAmountInMinutes(hourSegments, hourSegmentHeight, hourDuration);
  return draggedInPixelsSnapSize * pixelAmountInMinutes;
}
function getDefaultEventEnd(dateAdapter, event, minimumMinutes) {
  if (event.end) {
    return event.end;
  } else {
    return dateAdapter.addMinutes(event.start, minimumMinutes);
  }
}
function addDaysWithExclusions(dateAdapter, date, days, excluded) {
  let daysCounter = 0;
  let daysToAdd = 0;
  const changeDays = days < 0 ? dateAdapter.subDays : dateAdapter.addDays;
  let result = date;
  while (daysToAdd <= Math.abs(days)) {
    result = changeDays(date, daysCounter);
    const day = dateAdapter.getDay(result);
    if (excluded.indexOf(day) === -1) {
      daysToAdd++;
    }
    daysCounter++;
  }
  return result;
}
function isDraggedWithinPeriod(newStart, newEnd, period) {
  const end = newEnd || newStart;
  return period.start <= newStart && newStart <= period.end || period.start <= end && end <= period.end;
}
function shouldFireDroppedEvent(dropEvent, date, allDay, calendarId) {
  return dropEvent.dropData && dropEvent.dropData.event && (dropEvent.dropData.calendarId !== calendarId || dropEvent.dropData.event.allDay && !allDay || !dropEvent.dropData.event.allDay && allDay);
}
function getWeekViewPeriod(dateAdapter, viewDate, weekStartsOn, excluded = [], daysInWeek) {
  let viewStart = daysInWeek ? dateAdapter.startOfDay(viewDate) : dateAdapter.startOfWeek(viewDate, {
    weekStartsOn
  });
  const endOfWeek = dateAdapter.endOfWeek(viewDate, {
    weekStartsOn
  });
  while (excluded.indexOf(dateAdapter.getDay(viewStart)) > -1 && viewStart < endOfWeek) {
    viewStart = dateAdapter.addDays(viewStart, 1);
  }
  if (daysInWeek) {
    const viewEnd = dateAdapter.endOfDay(addDaysWithExclusions(dateAdapter, viewStart, daysInWeek - 1, excluded));
    return {
      viewStart,
      viewEnd
    };
  } else {
    let viewEnd = endOfWeek;
    while (excluded.indexOf(dateAdapter.getDay(viewEnd)) > -1 && viewEnd > viewStart) {
      viewEnd = dateAdapter.subDays(viewEnd, 1);
    }
    return {
      viewStart,
      viewEnd
    };
  }
}
function isWithinThreshold({
  x,
  y
}) {
  const DRAG_THRESHOLD = 1;
  return Math.abs(x) > DRAG_THRESHOLD || Math.abs(y) > DRAG_THRESHOLD;
}
var DateAdapter = class {
};
var CalendarPreviousViewDirective = class {
  constructor(dateAdapter) {
    this.dateAdapter = dateAdapter;
    this.excludeDays = [];
    this.viewDateChange = new EventEmitter();
  }
  /**
   * @hidden
   */
  onClick() {
    const subFn = {
      day: this.dateAdapter.subDays,
      week: this.dateAdapter.subWeeks,
      month: this.dateAdapter.subMonths
    }[this.view];
    if (this.view === CalendarView.Day) {
      this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -1, this.excludeDays));
    } else if (this.view === CalendarView.Week && this.daysInWeek) {
      this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -this.daysInWeek, this.excludeDays));
    } else {
      this.viewDateChange.emit(subFn(this.viewDate, 1));
    }
  }
};
CalendarPreviousViewDirective.ɵfac = function CalendarPreviousViewDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CalendarPreviousViewDirective)(ɵɵdirectiveInject(DateAdapter));
};
CalendarPreviousViewDirective.ɵdir = ɵɵdefineDirective({
  type: CalendarPreviousViewDirective,
  selectors: [["", "mwlCalendarPreviousView", ""]],
  hostBindings: function CalendarPreviousViewDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function CalendarPreviousViewDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
  },
  inputs: {
    view: "view",
    viewDate: "viewDate",
    excludeDays: "excludeDays",
    daysInWeek: "daysInWeek"
  },
  outputs: {
    viewDateChange: "viewDateChange"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarPreviousViewDirective, [{
    type: Directive,
    args: [{
      selector: "[mwlCalendarPreviousView]"
    }]
  }], function() {
    return [{
      type: DateAdapter
    }];
  }, {
    view: [{
      type: Input
    }],
    viewDate: [{
      type: Input
    }],
    excludeDays: [{
      type: Input
    }],
    daysInWeek: [{
      type: Input
    }],
    viewDateChange: [{
      type: Output
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var CalendarNextViewDirective = class {
  constructor(dateAdapter) {
    this.dateAdapter = dateAdapter;
    this.excludeDays = [];
    this.viewDateChange = new EventEmitter();
  }
  /**
   * @hidden
   */
  onClick() {
    const addFn = {
      day: this.dateAdapter.addDays,
      week: this.dateAdapter.addWeeks,
      month: this.dateAdapter.addMonths
    }[this.view];
    if (this.view === CalendarView.Day) {
      this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, 1, this.excludeDays));
    } else if (this.view === CalendarView.Week && this.daysInWeek) {
      this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, this.daysInWeek, this.excludeDays));
    } else {
      this.viewDateChange.emit(addFn(this.viewDate, 1));
    }
  }
};
CalendarNextViewDirective.ɵfac = function CalendarNextViewDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CalendarNextViewDirective)(ɵɵdirectiveInject(DateAdapter));
};
CalendarNextViewDirective.ɵdir = ɵɵdefineDirective({
  type: CalendarNextViewDirective,
  selectors: [["", "mwlCalendarNextView", ""]],
  hostBindings: function CalendarNextViewDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function CalendarNextViewDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
  },
  inputs: {
    view: "view",
    viewDate: "viewDate",
    excludeDays: "excludeDays",
    daysInWeek: "daysInWeek"
  },
  outputs: {
    viewDateChange: "viewDateChange"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarNextViewDirective, [{
    type: Directive,
    args: [{
      selector: "[mwlCalendarNextView]"
    }]
  }], function() {
    return [{
      type: DateAdapter
    }];
  }, {
    view: [{
      type: Input
    }],
    viewDate: [{
      type: Input
    }],
    excludeDays: [{
      type: Input
    }],
    daysInWeek: [{
      type: Input
    }],
    viewDateChange: [{
      type: Output
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var CalendarTodayDirective = class {
  constructor(dateAdapter) {
    this.dateAdapter = dateAdapter;
    this.viewDateChange = new EventEmitter();
  }
  /**
   * @hidden
   */
  onClick() {
    this.viewDateChange.emit(this.dateAdapter.startOfDay(/* @__PURE__ */ new Date()));
  }
};
CalendarTodayDirective.ɵfac = function CalendarTodayDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CalendarTodayDirective)(ɵɵdirectiveInject(DateAdapter));
};
CalendarTodayDirective.ɵdir = ɵɵdefineDirective({
  type: CalendarTodayDirective,
  selectors: [["", "mwlCalendarToday", ""]],
  hostBindings: function CalendarTodayDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function CalendarTodayDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
  },
  inputs: {
    viewDate: "viewDate"
  },
  outputs: {
    viewDateChange: "viewDateChange"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarTodayDirective, [{
    type: Directive,
    args: [{
      selector: "[mwlCalendarToday]"
    }]
  }], function() {
    return [{
      type: DateAdapter
    }];
  }, {
    viewDate: [{
      type: Input
    }],
    viewDateChange: [{
      type: Output
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var CalendarAngularDateFormatter = class {
  constructor(dateAdapter) {
    this.dateAdapter = dateAdapter;
  }
  /**
   * The month view header week day labels
   */
  monthViewColumnHeader({
    date,
    locale
  }) {
    return formatDate(date, "EEEE", locale);
  }
  /**
   * The month view cell day number
   */
  monthViewDayNumber({
    date,
    locale
  }) {
    return formatDate(date, "d", locale);
  }
  /**
   * The month view title
   */
  monthViewTitle({
    date,
    locale
  }) {
    return formatDate(date, "LLLL y", locale);
  }
  /**
   * The week view header week day labels
   */
  weekViewColumnHeader({
    date,
    locale
  }) {
    return formatDate(date, "EEEE", locale);
  }
  /**
   * The week view sub header day and month labels
   */
  weekViewColumnSubHeader({
    date,
    locale
  }) {
    return formatDate(date, "MMM d", locale);
  }
  /**
   * The week view title
   */
  weekViewTitle({
    date,
    locale,
    weekStartsOn,
    excludeDays,
    daysInWeek
  }) {
    const {
      viewStart,
      viewEnd
    } = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek);
    const format = (dateToFormat, showYear) => formatDate(dateToFormat, "MMM d" + (showYear ? ", yyyy" : ""), locale);
    return `${format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear())} - ${format(viewEnd, true)}`;
  }
  /**
   * The time formatting down the left hand side of the week view
   */
  weekViewHour({
    date,
    locale
  }) {
    return formatDate(date, "h a", locale);
  }
  /**
   * The time formatting down the left hand side of the day view
   */
  dayViewHour({
    date,
    locale
  }) {
    return formatDate(date, "h a", locale);
  }
  /**
   * The day view title
   */
  dayViewTitle({
    date,
    locale
  }) {
    return formatDate(date, "EEEE, MMMM d, y", locale);
  }
};
CalendarAngularDateFormatter.ɵfac = function CalendarAngularDateFormatter_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CalendarAngularDateFormatter)(ɵɵinject(DateAdapter));
};
CalendarAngularDateFormatter.ɵprov = ɵɵdefineInjectable({
  token: CalendarAngularDateFormatter,
  factory: CalendarAngularDateFormatter.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarAngularDateFormatter, [{
    type: Injectable
  }], function() {
    return [{
      type: DateAdapter
    }];
  }, null);
})();
var CalendarDateFormatter = class extends CalendarAngularDateFormatter {
};
CalendarDateFormatter.ɵfac = /* @__PURE__ */ (() => {
  let ɵCalendarDateFormatter_BaseFactory;
  return function CalendarDateFormatter_Factory(__ngFactoryType__) {
    return (ɵCalendarDateFormatter_BaseFactory || (ɵCalendarDateFormatter_BaseFactory = ɵɵgetInheritedFactory(CalendarDateFormatter)))(__ngFactoryType__ || CalendarDateFormatter);
  };
})();
CalendarDateFormatter.ɵprov = ɵɵdefineInjectable({
  token: CalendarDateFormatter,
  factory: CalendarDateFormatter.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarDateFormatter, [{
    type: Injectable
  }], null, null);
})();
var CalendarDatePipe = class {
  constructor(dateFormatter, locale) {
    this.dateFormatter = dateFormatter;
    this.locale = locale;
  }
  transform(date, method, locale = this.locale, weekStartsOn = 0, excludeDays = [], daysInWeek) {
    if (typeof this.dateFormatter[method] === "undefined") {
      const allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(CalendarDateFormatter.prototype)).filter((iMethod) => iMethod !== "constructor");
      throw new Error(`${method} is not a valid date formatter. Can only be one of ${allowedMethods.join(", ")}`);
    }
    return this.dateFormatter[method]({
      date,
      locale,
      weekStartsOn,
      excludeDays,
      daysInWeek
    });
  }
};
CalendarDatePipe.ɵfac = function CalendarDatePipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CalendarDatePipe)(ɵɵdirectiveInject(CalendarDateFormatter, 16), ɵɵdirectiveInject(LOCALE_ID, 16));
};
CalendarDatePipe.ɵpipe = ɵɵdefinePipe({
  name: "calendarDate",
  type: CalendarDatePipe,
  pure: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarDatePipe, [{
    type: Pipe,
    args: [{
      name: "calendarDate"
    }]
  }], function() {
    return [{
      type: CalendarDateFormatter
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [LOCALE_ID]
      }]
    }];
  }, null);
})();
var CalendarUtils = class {
  constructor(dateAdapter) {
    this.dateAdapter = dateAdapter;
  }
  getMonthView(args) {
    return getMonthView(this.dateAdapter, args);
  }
  getWeekViewHeader(args) {
    return getWeekViewHeader(this.dateAdapter, args);
  }
  getWeekView(args) {
    return getWeekView(this.dateAdapter, args);
  }
};
CalendarUtils.ɵfac = function CalendarUtils_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CalendarUtils)(ɵɵinject(DateAdapter));
};
CalendarUtils.ɵprov = ɵɵdefineInjectable({
  token: CalendarUtils,
  factory: CalendarUtils.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarUtils, [{
    type: Injectable
  }], function() {
    return [{
      type: DateAdapter
    }];
  }, null);
})();
var MOMENT = new InjectionToken("Moment");
var CalendarMomentDateFormatter = class {
  /**
   * @hidden
   */
  constructor(moment, dateAdapter) {
    this.moment = moment;
    this.dateAdapter = dateAdapter;
  }
  /**
   * The month view header week day labels
   */
  monthViewColumnHeader({
    date,
    locale
  }) {
    return this.moment(date).locale(locale).format("dddd");
  }
  /**
   * The month view cell day number
   */
  monthViewDayNumber({
    date,
    locale
  }) {
    return this.moment(date).locale(locale).format("D");
  }
  /**
   * The month view title
   */
  monthViewTitle({
    date,
    locale
  }) {
    return this.moment(date).locale(locale).format("MMMM YYYY");
  }
  /**
   * The week view header week day labels
   */
  weekViewColumnHeader({
    date,
    locale
  }) {
    return this.moment(date).locale(locale).format("dddd");
  }
  /**
   * The week view sub header day and month labels
   */
  weekViewColumnSubHeader({
    date,
    locale
  }) {
    return this.moment(date).locale(locale).format("MMM D");
  }
  /**
   * The week view title
   */
  weekViewTitle({
    date,
    locale,
    weekStartsOn,
    excludeDays,
    daysInWeek
  }) {
    const {
      viewStart,
      viewEnd
    } = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek);
    const format = (dateToFormat, showYear) => this.moment(dateToFormat).locale(locale).format("MMM D" + (showYear ? ", YYYY" : ""));
    return `${format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear())} - ${format(viewEnd, true)}`;
  }
  /**
   * The time formatting down the left hand side of the week view
   */
  weekViewHour({
    date,
    locale
  }) {
    return this.moment(date).locale(locale).format("ha");
  }
  /**
   * The time formatting down the left hand side of the day view
   */
  dayViewHour({
    date,
    locale
  }) {
    return this.moment(date).locale(locale).format("ha");
  }
  /**
   * The day view title
   */
  dayViewTitle({
    date,
    locale
  }) {
    return this.moment(date).locale(locale).format("dddd, LL");
  }
  // LL = locale-dependent Month Day, Year
};
CalendarMomentDateFormatter.ɵfac = function CalendarMomentDateFormatter_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CalendarMomentDateFormatter)(ɵɵinject(MOMENT), ɵɵinject(DateAdapter));
};
CalendarMomentDateFormatter.ɵprov = ɵɵdefineInjectable({
  token: CalendarMomentDateFormatter,
  factory: CalendarMomentDateFormatter.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarMomentDateFormatter, [{
    type: Injectable
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [MOMENT]
      }]
    }, {
      type: DateAdapter
    }];
  }, null);
})();
var CalendarNativeDateFormatter = class {
  constructor(dateAdapter) {
    this.dateAdapter = dateAdapter;
  }
  /**
   * The month view header week day labels
   */
  monthViewColumnHeader({
    date,
    locale
  }) {
    return new Intl.DateTimeFormat(locale, {
      weekday: "long"
    }).format(date);
  }
  /**
   * The month view cell day number
   */
  monthViewDayNumber({
    date,
    locale
  }) {
    return new Intl.DateTimeFormat(locale, {
      day: "numeric"
    }).format(date);
  }
  /**
   * The month view title
   */
  monthViewTitle({
    date,
    locale
  }) {
    return new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "long"
    }).format(date);
  }
  /**
   * The week view header week day labels
   */
  weekViewColumnHeader({
    date,
    locale
  }) {
    return new Intl.DateTimeFormat(locale, {
      weekday: "long"
    }).format(date);
  }
  /**
   * The week view sub header day and month labels
   */
  weekViewColumnSubHeader({
    date,
    locale
  }) {
    return new Intl.DateTimeFormat(locale, {
      day: "numeric",
      month: "short"
    }).format(date);
  }
  /**
   * The week view title
   */
  weekViewTitle({
    date,
    locale,
    weekStartsOn,
    excludeDays,
    daysInWeek
  }) {
    const {
      viewStart,
      viewEnd
    } = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek);
    const format = (dateToFormat, showYear) => new Intl.DateTimeFormat(locale, {
      day: "numeric",
      month: "short",
      year: showYear ? "numeric" : void 0
    }).format(dateToFormat);
    return `${format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear())} - ${format(viewEnd, true)}`;
  }
  /**
   * The time formatting down the left hand side of the week view
   */
  weekViewHour({
    date,
    locale
  }) {
    return new Intl.DateTimeFormat(locale, {
      hour: "numeric"
    }).format(date);
  }
  /**
   * The time formatting down the left hand side of the day view
   */
  dayViewHour({
    date,
    locale
  }) {
    return new Intl.DateTimeFormat(locale, {
      hour: "numeric"
    }).format(date);
  }
  /**
   * The day view title
   */
  dayViewTitle({
    date,
    locale
  }) {
    return new Intl.DateTimeFormat(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long"
    }).format(date);
  }
};
CalendarNativeDateFormatter.ɵfac = function CalendarNativeDateFormatter_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CalendarNativeDateFormatter)(ɵɵinject(DateAdapter));
};
CalendarNativeDateFormatter.ɵprov = ɵɵdefineInjectable({
  token: CalendarNativeDateFormatter,
  factory: CalendarNativeDateFormatter.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarNativeDateFormatter, [{
    type: Injectable
  }], function() {
    return [{
      type: DateAdapter
    }];
  }, null);
})();
var CalendarEventTimesChangedEventType;
(function(CalendarEventTimesChangedEventType2) {
  CalendarEventTimesChangedEventType2["Drag"] = "drag";
  CalendarEventTimesChangedEventType2["Drop"] = "drop";
  CalendarEventTimesChangedEventType2["Resize"] = "resize";
})(CalendarEventTimesChangedEventType || (CalendarEventTimesChangedEventType = {}));
var CalendarCommonModule = class _CalendarCommonModule {
  static forRoot(dateAdapter, config = {}) {
    return {
      ngModule: _CalendarCommonModule,
      providers: [dateAdapter, config.eventTitleFormatter || CalendarEventTitleFormatter, config.dateFormatter || CalendarDateFormatter, config.utils || CalendarUtils, config.a11y || CalendarA11y]
    };
  }
};
CalendarCommonModule.ɵfac = function CalendarCommonModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CalendarCommonModule)();
};
CalendarCommonModule.ɵmod = ɵɵdefineNgModule({
  type: CalendarCommonModule,
  declarations: [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe, ClickDirective, KeydownEnterDirective],
  imports: [CommonModule],
  exports: [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe, ClickDirective, KeydownEnterDirective]
});
CalendarCommonModule.ɵinj = ɵɵdefineInjector({
  providers: [I18nPluralPipe],
  imports: [CommonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarCommonModule, [{
    type: NgModule,
    args: [{
      declarations: [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe, ClickDirective, KeydownEnterDirective],
      imports: [CommonModule],
      exports: [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe, ClickDirective, KeydownEnterDirective],
      providers: [I18nPluralPipe]
    }]
  }], null, null);
})();
var CalendarMonthCellComponent = class {
  constructor() {
    this.highlightDay = new EventEmitter();
    this.unhighlightDay = new EventEmitter();
    this.eventClicked = new EventEmitter();
    this.trackByEventId = trackByEventId;
    this.validateDrag = isWithinThreshold;
  }
};
CalendarMonthCellComponent.ɵfac = function CalendarMonthCellComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CalendarMonthCellComponent)();
};
CalendarMonthCellComponent.ɵcmp = ɵɵdefineComponent({
  type: CalendarMonthCellComponent,
  selectors: [["mwl-calendar-month-cell"]],
  hostAttrs: [1, "cal-cell", "cal-day-cell"],
  hostVars: 18,
  hostBindings: function CalendarMonthCellComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("cal-past", ctx.day.isPast)("cal-today", ctx.day.isToday)("cal-future", ctx.day.isFuture)("cal-weekend", ctx.day.isWeekend)("cal-in-month", ctx.day.inMonth)("cal-out-month", !ctx.day.inMonth)("cal-has-events", ctx.day.events.length > 0)("cal-open", ctx.day === ctx.openDay)("cal-event-highlight", !!ctx.day.backgroundColor);
    }
  },
  inputs: {
    day: "day",
    openDay: "openDay",
    locale: "locale",
    tooltipPlacement: "tooltipPlacement",
    tooltipAppendToBody: "tooltipAppendToBody",
    customTemplate: "customTemplate",
    tooltipTemplate: "tooltipTemplate",
    tooltipDelay: "tooltipDelay"
  },
  outputs: {
    highlightDay: "highlightDay",
    unhighlightDay: "unhighlightDay",
    eventClicked: "eventClicked"
  },
  decls: 3,
  vars: 15,
  consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-cell-top"], ["aria-hidden", "true"], ["class", "cal-day-badge", 4, "ngIf"], [1, "cal-day-number"], ["class", "cal-events", 4, "ngIf"], [1, "cal-day-badge"], [1, "cal-events"], ["class", "cal-event", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngStyle", "ngClass", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "cal-draggable", "dropData", "dragAxis", "validateDrag", "touchStartLongPress", "mouseenter", "mouseleave", "mwlClick", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event", 3, "mouseenter", "mouseleave", "mwlClick", "ngStyle", "ngClass", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "dropData", "dragAxis", "validateDrag", "touchStartLongPress"]],
  template: function CalendarMonthCellComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, CalendarMonthCellComponent_ng_template_0_Template, 8, 14, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, CalendarMonthCellComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    }
    if (rf & 2) {
      const defaultTemplate_r15 = ɵɵreference(1);
      ɵɵadvance(2);
      ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || defaultTemplate_r15)("ngTemplateOutletContext", ɵɵpureFunctionV(2, _c5, [ctx.day, ctx.openDay, ctx.locale, ctx.tooltipPlacement, ctx.highlightDay, ctx.unhighlightDay, ctx.eventClicked, ctx.tooltipTemplate, ctx.tooltipAppendToBody, ctx.tooltipDelay, ctx.trackByEventId, ctx.validateDrag]));
    }
  },
  dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, DraggableDirective, CalendarTooltipDirective, ClickDirective, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarMonthCellComponent, [{
    type: Component,
    args: [{
      selector: "mwl-calendar-month-cell",
      template: `
    <ng-template
      #defaultTemplate
      let-day="day"
      let-openDay="openDay"
      let-locale="locale"
      let-tooltipPlacement="tooltipPlacement"
      let-highlightDay="highlightDay"
      let-unhighlightDay="unhighlightDay"
      let-eventClicked="eventClicked"
      let-tooltipTemplate="tooltipTemplate"
      let-tooltipAppendToBody="tooltipAppendToBody"
      let-tooltipDelay="tooltipDelay"
      let-trackByEventId="trackByEventId"
      let-validateDrag="validateDrag"
    >
      <div
        class="cal-cell-top"
        [attr.aria-label]="
          { day: day, locale: locale } | calendarA11y : 'monthCell'
        "
      >
        <span aria-hidden="true">
          <span class="cal-day-badge" *ngIf="day.badgeTotal > 0">{{
            day.badgeTotal
          }}</span>
          <span class="cal-day-number">{{
            day.date | calendarDate : 'monthViewDayNumber' : locale
          }}</span>
        </span>
      </div>
      <div class="cal-events" *ngIf="day.events.length > 0">
        <div
          class="cal-event"
          *ngFor="let event of day.events; trackBy: trackByEventId"
          [ngStyle]="{ backgroundColor: event.color?.primary }"
          [ngClass]="event?.cssClass"
          (mouseenter)="highlightDay.emit({ event: event })"
          (mouseleave)="unhighlightDay.emit({ event: event })"
          [mwlCalendarTooltip]="
            event.title | calendarEventTitle : 'monthTooltip' : event
          "
          [tooltipPlacement]="tooltipPlacement"
          [tooltipEvent]="event"
          [tooltipTemplate]="tooltipTemplate"
          [tooltipAppendToBody]="tooltipAppendToBody"
          [tooltipDelay]="tooltipDelay"
          mwlDraggable
          [class.cal-draggable]="event.draggable"
          dragActiveClass="cal-drag-active"
          [dropData]="{ event: event, draggedFrom: day }"
          [dragAxis]="{ x: event.draggable, y: event.draggable }"
          [validateDrag]="validateDrag"
          [touchStartLongPress]="{ delay: 300, delta: 30 }"
          (mwlClick)="eventClicked.emit({ event: event, sourceEvent: $event })"
          [attr.aria-hidden]="{} | calendarA11y : 'hideMonthCellEvents'"
        ></div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        day: day,
        openDay: openDay,
        locale: locale,
        tooltipPlacement: tooltipPlacement,
        highlightDay: highlightDay,
        unhighlightDay: unhighlightDay,
        eventClicked: eventClicked,
        tooltipTemplate: tooltipTemplate,
        tooltipAppendToBody: tooltipAppendToBody,
        tooltipDelay: tooltipDelay,
        trackByEventId: trackByEventId,
        validateDrag: validateDrag
      }"
    >
    </ng-template>
  `,
      // eslint-disable-next-line @angular-eslint/no-host-metadata-property
      host: {
        class: "cal-cell cal-day-cell",
        "[class.cal-past]": "day.isPast",
        "[class.cal-today]": "day.isToday",
        "[class.cal-future]": "day.isFuture",
        "[class.cal-weekend]": "day.isWeekend",
        "[class.cal-in-month]": "day.inMonth",
        "[class.cal-out-month]": "!day.inMonth",
        "[class.cal-has-events]": "day.events.length > 0",
        "[class.cal-open]": "day === openDay",
        "[class.cal-event-highlight]": "!!day.backgroundColor"
      }
    }]
  }], null, {
    day: [{
      type: Input
    }],
    openDay: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    tooltipPlacement: [{
      type: Input
    }],
    tooltipAppendToBody: [{
      type: Input
    }],
    customTemplate: [{
      type: Input
    }],
    tooltipTemplate: [{
      type: Input
    }],
    tooltipDelay: [{
      type: Input
    }],
    highlightDay: [{
      type: Output
    }],
    unhighlightDay: [{
      type: Output
    }],
    eventClicked: [{
      type: Output
    }]
  });
})();
var collapseAnimation = trigger("collapse", [state("void", style({
  height: 0,
  overflow: "hidden",
  "padding-top": 0,
  "padding-bottom": 0
})), state("*", style({
  height: "*",
  overflow: "hidden",
  "padding-top": "*",
  "padding-bottom": "*"
})), transition("* => void", animate("150ms ease-out")), transition("void => *", animate("150ms ease-in"))]);
var CalendarOpenDayEventsComponent = class {
  constructor() {
    this.isOpen = false;
    this.eventClicked = new EventEmitter();
    this.trackByEventId = trackByEventId;
    this.validateDrag = isWithinThreshold;
  }
};
CalendarOpenDayEventsComponent.ɵfac = function CalendarOpenDayEventsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CalendarOpenDayEventsComponent)();
};
CalendarOpenDayEventsComponent.ɵcmp = ɵɵdefineComponent({
  type: CalendarOpenDayEventsComponent,
  selectors: [["mwl-calendar-open-day-events"]],
  inputs: {
    locale: "locale",
    isOpen: "isOpen",
    events: "events",
    customTemplate: "customTemplate",
    eventTitleTemplate: "eventTitleTemplate",
    eventActionsTemplate: "eventActionsTemplate",
    date: "date"
  },
  outputs: {
    eventClicked: "eventClicked"
  },
  decls: 3,
  vars: 8,
  consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-open-day-events", "role", "application", 4, "ngIf"], ["role", "application", 1, "cal-open-day-events"], ["tabindex", "-1", "role", "alert"], ["tabindex", "0", "role", "landmark"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngClass", "cal-draggable", "dropData", "dragAxis", "validateDrag", "touchStartLongPress", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngClass", "dropData", "dragAxis", "validateDrag", "touchStartLongPress"], [1, "cal-event", 3, "ngStyle"], ["view", "month", "tabindex", "0", 3, "mwlClick", "mwlKeydownEnter", "event", "customTemplate"], [3, "event", "customTemplate"]],
  template: function CalendarOpenDayEventsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, CalendarOpenDayEventsComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, CalendarOpenDayEventsComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    }
    if (rf & 2) {
      const defaultTemplate_r10 = ɵɵreference(1);
      ɵɵadvance(2);
      ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || defaultTemplate_r10)("ngTemplateOutletContext", ɵɵpureFunction5(2, _c11, ctx.events, ctx.eventClicked, ctx.isOpen, ctx.trackByEventId, ctx.validateDrag));
    }
  },
  dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, DraggableDirective, CalendarEventActionsComponent, CalendarEventTitleComponent, ClickDirective, KeydownEnterDirective, CalendarA11yPipe],
  encapsulation: 2,
  data: {
    animation: [collapseAnimation]
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarOpenDayEventsComponent, [{
    type: Component,
    args: [{
      selector: "mwl-calendar-open-day-events",
      template: `
    <ng-template
      #defaultTemplate
      let-events="events"
      let-eventClicked="eventClicked"
      let-isOpen="isOpen"
      let-trackByEventId="trackByEventId"
      let-validateDrag="validateDrag"
    >
      <div
        class="cal-open-day-events"
        [@collapse]
        *ngIf="isOpen"
        role="application"
      >
        <span
          tabindex="-1"
          role="alert"
          [attr.aria-label]="
            { date: date, locale: locale } | calendarA11y : 'openDayEventsAlert'
          "
        ></span>
        <span
          tabindex="0"
          role="landmark"
          [attr.aria-label]="
            { date: date, locale: locale }
              | calendarA11y : 'openDayEventsLandmark'
          "
        ></span>
        <div
          *ngFor="let event of events; trackBy: trackByEventId"
          [ngClass]="event?.cssClass"
          mwlDraggable
          [class.cal-draggable]="event.draggable"
          dragActiveClass="cal-drag-active"
          [dropData]="{ event: event }"
          [dragAxis]="{ x: event.draggable, y: event.draggable }"
          [validateDrag]="validateDrag"
          [touchStartLongPress]="{ delay: 300, delta: 30 }"
        >
          <span
            class="cal-event"
            [ngStyle]="{ backgroundColor: event.color?.primary }"
          >
          </span>
          &ngsp;
          <mwl-calendar-event-title
            [event]="event"
            [customTemplate]="eventTitleTemplate"
            view="month"
            (mwlClick)="
              eventClicked.emit({ event: event, sourceEvent: $event })
            "
            (mwlKeydownEnter)="
              eventClicked.emit({ event: event, sourceEvent: $event })
            "
            tabindex="0"
            [attr.aria-label]="
              { event: event, locale: locale }
                | calendarA11y : 'eventDescription'
            "
          >
          </mwl-calendar-event-title>
          &ngsp;
          <mwl-calendar-event-actions
            [event]="event"
            [customTemplate]="eventActionsTemplate"
          >
          </mwl-calendar-event-actions>
        </div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        events: events,
        eventClicked: eventClicked,
        isOpen: isOpen,
        trackByEventId: trackByEventId,
        validateDrag: validateDrag
      }"
    >
    </ng-template>
  `,
      animations: [collapseAnimation]
    }]
  }], null, {
    locale: [{
      type: Input
    }],
    isOpen: [{
      type: Input
    }],
    events: [{
      type: Input
    }],
    customTemplate: [{
      type: Input
    }],
    eventTitleTemplate: [{
      type: Input
    }],
    eventActionsTemplate: [{
      type: Input
    }],
    date: [{
      type: Input
    }],
    eventClicked: [{
      type: Output
    }]
  });
})();
var CalendarMonthViewHeaderComponent = class {
  constructor() {
    this.columnHeaderClicked = new EventEmitter();
    this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
  }
};
CalendarMonthViewHeaderComponent.ɵfac = function CalendarMonthViewHeaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CalendarMonthViewHeaderComponent)();
};
CalendarMonthViewHeaderComponent.ɵcmp = ɵɵdefineComponent({
  type: CalendarMonthViewHeaderComponent,
  selectors: [["mwl-calendar-month-view-header"]],
  inputs: {
    days: "days",
    locale: "locale",
    customTemplate: "customTemplate"
  },
  outputs: {
    columnHeaderClicked: "columnHeaderClicked"
  },
  decls: 3,
  vars: 6,
  consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "row", 1, "cal-cell-row", "cal-header"], ["class", "cal-cell", "tabindex", "0", "role", "columnheader", 3, "cal-past", "cal-today", "cal-future", "cal-weekend", "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "0", "role", "columnheader", 1, "cal-cell", 3, "click", "ngClass"]],
  template: function CalendarMonthViewHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, CalendarMonthViewHeaderComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, CalendarMonthViewHeaderComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    }
    if (rf & 2) {
      const defaultTemplate_r7 = ɵɵreference(1);
      ɵɵadvance(2);
      ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || defaultTemplate_r7)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c15, ctx.days, ctx.locale, ctx.trackByWeekDayHeaderDate));
    }
  },
  dependencies: [NgClass, NgForOf, NgTemplateOutlet, CalendarDatePipe],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarMonthViewHeaderComponent, [{
    type: Component,
    args: [{
      selector: "mwl-calendar-month-view-header",
      template: `
    <ng-template
      #defaultTemplate
      let-days="days"
      let-locale="locale"
      let-trackByWeekDayHeaderDate="trackByWeekDayHeaderDate"
    >
      <div class="cal-cell-row cal-header" role="row">
        <div
          class="cal-cell"
          *ngFor="let day of days; trackBy: trackByWeekDayHeaderDate"
          [class.cal-past]="day.isPast"
          [class.cal-today]="day.isToday"
          [class.cal-future]="day.isFuture"
          [class.cal-weekend]="day.isWeekend"
          (click)="
            columnHeaderClicked.emit({
              isoDayNumber: day.day,
              sourceEvent: $event
            })
          "
          [ngClass]="day.cssClass"
          tabindex="0"
          role="columnheader"
        >
          {{ day.date | calendarDate : 'monthViewColumnHeader' : locale }}
        </div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        days: days,
        locale: locale,
        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate
      }"
    >
    </ng-template>
  `
    }]
  }], null, {
    days: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    customTemplate: [{
      type: Input
    }],
    columnHeaderClicked: [{
      type: Output
    }]
  });
})();
var CalendarMonthViewComponent = class {
  /**
   * @hidden
   */
  constructor(cdr, utils, locale, dateAdapter) {
    this.cdr = cdr;
    this.utils = utils;
    this.dateAdapter = dateAdapter;
    this.events = [];
    this.excludeDays = [];
    this.activeDayIsOpen = false;
    this.tooltipPlacement = "auto";
    this.tooltipAppendToBody = true;
    this.tooltipDelay = null;
    this.beforeViewRender = new EventEmitter();
    this.dayClicked = new EventEmitter();
    this.eventClicked = new EventEmitter();
    this.columnHeaderClicked = new EventEmitter();
    this.eventTimesChanged = new EventEmitter();
    this.trackByRowOffset = (index, offset) => this.view.days.slice(offset, this.view.totalDaysVisibleInWeek).map((day) => day.date.toISOString()).join("-");
    this.trackByDate = (index, day) => day.date.toISOString();
    this.locale = locale;
  }
  /**
   * @hidden
   */
  ngOnInit() {
    if (this.refresh) {
      this.refreshSubscription = this.refresh.subscribe(() => {
        this.refreshAll();
        this.cdr.markForCheck();
      });
    }
  }
  /**
   * @hidden
   */
  ngOnChanges(changes) {
    const refreshHeader = changes.viewDate || changes.excludeDays || changes.weekendDays;
    const refreshBody = changes.viewDate || changes.events || changes.excludeDays || changes.weekendDays;
    if (refreshHeader) {
      this.refreshHeader();
    }
    if (changes.events) {
      validateEvents2(this.events);
    }
    if (refreshBody) {
      this.refreshBody();
    }
    if (refreshHeader || refreshBody) {
      this.emitBeforeViewRender();
    }
    if (changes.activeDayIsOpen || changes.viewDate || changes.events || changes.excludeDays || changes.activeDay) {
      this.checkActiveDayIsOpen();
    }
  }
  /**
   * @hidden
   */
  ngOnDestroy() {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }
  /**
   * @hidden
   */
  toggleDayHighlight(event, isHighlighted) {
    this.view.days.forEach((day) => {
      if (isHighlighted && day.events.indexOf(event) > -1) {
        day.backgroundColor = event.color && event.color.secondary || "#D1E8FF";
      } else {
        delete day.backgroundColor;
      }
    });
  }
  /**
   * @hidden
   */
  eventDropped(droppedOn, event, draggedFrom) {
    if (droppedOn !== draggedFrom) {
      const year = this.dateAdapter.getYear(droppedOn.date);
      const month = this.dateAdapter.getMonth(droppedOn.date);
      const date = this.dateAdapter.getDate(droppedOn.date);
      const newStart = this.dateAdapter.setDate(this.dateAdapter.setMonth(this.dateAdapter.setYear(event.start, year), month), date);
      let newEnd;
      if (event.end) {
        const secondsDiff = this.dateAdapter.differenceInSeconds(newStart, event.start);
        newEnd = this.dateAdapter.addSeconds(event.end, secondsDiff);
      }
      this.eventTimesChanged.emit({
        event,
        newStart,
        newEnd,
        day: droppedOn,
        type: CalendarEventTimesChangedEventType.Drop
      });
    }
  }
  refreshHeader() {
    this.columnHeaders = this.utils.getWeekViewHeader({
      viewDate: this.viewDate,
      weekStartsOn: this.weekStartsOn,
      excluded: this.excludeDays,
      weekendDays: this.weekendDays
    });
  }
  refreshBody() {
    this.view = this.utils.getMonthView({
      events: this.events,
      viewDate: this.viewDate,
      weekStartsOn: this.weekStartsOn,
      excluded: this.excludeDays,
      weekendDays: this.weekendDays
    });
  }
  checkActiveDayIsOpen() {
    if (this.activeDayIsOpen === true) {
      const activeDay = this.activeDay || this.viewDate;
      this.openDay = this.view.days.find((day) => this.dateAdapter.isSameDay(day.date, activeDay));
      const index = this.view.days.indexOf(this.openDay);
      this.openRowIndex = Math.floor(index / this.view.totalDaysVisibleInWeek) * this.view.totalDaysVisibleInWeek;
    } else {
      this.openRowIndex = null;
      this.openDay = null;
    }
  }
  refreshAll() {
    this.refreshHeader();
    this.refreshBody();
    this.emitBeforeViewRender();
    this.checkActiveDayIsOpen();
  }
  emitBeforeViewRender() {
    if (this.columnHeaders && this.view) {
      this.beforeViewRender.emit({
        header: this.columnHeaders,
        body: this.view.days,
        period: this.view.period
      });
    }
  }
};
CalendarMonthViewComponent.ɵfac = function CalendarMonthViewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CalendarMonthViewComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(CalendarUtils), ɵɵdirectiveInject(LOCALE_ID), ɵɵdirectiveInject(DateAdapter));
};
CalendarMonthViewComponent.ɵcmp = ɵɵdefineComponent({
  type: CalendarMonthViewComponent,
  selectors: [["mwl-calendar-month-view"]],
  inputs: {
    viewDate: "viewDate",
    events: "events",
    excludeDays: "excludeDays",
    activeDayIsOpen: "activeDayIsOpen",
    activeDay: "activeDay",
    refresh: "refresh",
    locale: "locale",
    tooltipPlacement: "tooltipPlacement",
    tooltipTemplate: "tooltipTemplate",
    tooltipAppendToBody: "tooltipAppendToBody",
    tooltipDelay: "tooltipDelay",
    weekStartsOn: "weekStartsOn",
    headerTemplate: "headerTemplate",
    cellTemplate: "cellTemplate",
    openDayEventsTemplate: "openDayEventsTemplate",
    eventTitleTemplate: "eventTitleTemplate",
    eventActionsTemplate: "eventActionsTemplate",
    weekendDays: "weekendDays"
  },
  outputs: {
    beforeViewRender: "beforeViewRender",
    dayClicked: "dayClicked",
    eventClicked: "eventClicked",
    columnHeaderClicked: "columnHeaderClicked",
    eventTimesChanged: "eventTimesChanged"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 4,
  vars: 5,
  consts: [["role", "grid", 1, "cal-month-view"], [3, "columnHeaderClicked", "days", "locale", "customTemplate"], [1, "cal-days"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row", 1, "cal-cell-row"], ["role", "gridcell", "mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "ngClass", "day", "openDay", "locale", "tooltipPlacement", "tooltipAppendToBody", "tooltipTemplate", "tooltipDelay", "customTemplate", "ngStyle", "clickListenerDisabled", "mwlClick", "mwlKeydownEnter", "highlightDay", "unhighlightDay", "drop", "eventClicked", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "eventClicked", "drop", "locale", "isOpen", "events", "date", "customTemplate", "eventTitleTemplate", "eventActionsTemplate"], ["role", "gridcell", "mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "mwlClick", "mwlKeydownEnter", "highlightDay", "unhighlightDay", "drop", "eventClicked", "ngClass", "day", "openDay", "locale", "tooltipPlacement", "tooltipAppendToBody", "tooltipTemplate", "tooltipDelay", "customTemplate", "ngStyle", "clickListenerDisabled"]],
  template: function CalendarMonthViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "mwl-calendar-month-view-header", 1);
      ɵɵlistener("columnHeaderClicked", function CalendarMonthViewComponent_Template_mwl_calendar_month_view_header_columnHeaderClicked_1_listener($event) {
        return ctx.columnHeaderClicked.emit($event);
      });
      ɵɵelementEnd();
      ɵɵelementStart(2, "div", 2);
      ɵɵtemplate(3, CalendarMonthViewComponent_div_3_Template, 5, 13, "div", 3);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("days", ctx.columnHeaders)("locale", ctx.locale)("customTemplate", ctx.headerTemplate);
      ɵɵadvance(2);
      ɵɵproperty("ngForOf", ctx.view.rowOffsets)("ngForTrackBy", ctx.trackByRowOffset);
    }
  },
  dependencies: [NgClass, NgForOf, NgStyle, DroppableDirective, ClickDirective, KeydownEnterDirective, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent, SlicePipe, CalendarA11yPipe],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarMonthViewComponent, [{
    type: Component,
    args: [{
      selector: "mwl-calendar-month-view",
      template: `
    <div class="cal-month-view" role="grid">
      <mwl-calendar-month-view-header
        [days]="columnHeaders"
        [locale]="locale"
        (columnHeaderClicked)="columnHeaderClicked.emit($event)"
        [customTemplate]="headerTemplate"
      >
      </mwl-calendar-month-view-header>
      <div class="cal-days">
        <div
          *ngFor="let rowIndex of view.rowOffsets; trackBy: trackByRowOffset"
        >
          <div role="row" class="cal-cell-row">
            <mwl-calendar-month-cell
              role="gridcell"
              *ngFor="
                let day of view.days
                  | slice : rowIndex : rowIndex + view.totalDaysVisibleInWeek;
                trackBy: trackByDate
              "
              [ngClass]="day?.cssClass"
              [day]="day"
              [openDay]="openDay"
              [locale]="locale"
              [tooltipPlacement]="tooltipPlacement"
              [tooltipAppendToBody]="tooltipAppendToBody"
              [tooltipTemplate]="tooltipTemplate"
              [tooltipDelay]="tooltipDelay"
              [customTemplate]="cellTemplate"
              [ngStyle]="{ backgroundColor: day.backgroundColor }"
              (mwlClick)="dayClicked.emit({ day: day, sourceEvent: $event })"
              [clickListenerDisabled]="dayClicked.observers.length === 0"
              (mwlKeydownEnter)="
                dayClicked.emit({ day: day, sourceEvent: $event })
              "
              (highlightDay)="toggleDayHighlight($event.event, true)"
              (unhighlightDay)="toggleDayHighlight($event.event, false)"
              mwlDroppable
              dragOverClass="cal-drag-over"
              (drop)="
                eventDropped(
                  day,
                  $event.dropData.event,
                  $event.dropData.draggedFrom
                )
              "
              (eventClicked)="
                eventClicked.emit({
                  event: $event.event,
                  sourceEvent: $event.sourceEvent
                })
              "
              [attr.tabindex]="{} | calendarA11y : 'monthCellTabIndex'"
            >
            </mwl-calendar-month-cell>
          </div>
          <mwl-calendar-open-day-events
            [locale]="locale"
            [isOpen]="openRowIndex === rowIndex"
            [events]="openDay?.events"
            [date]="openDay?.date"
            [customTemplate]="openDayEventsTemplate"
            [eventTitleTemplate]="eventTitleTemplate"
            [eventActionsTemplate]="eventActionsTemplate"
            (eventClicked)="
              eventClicked.emit({
                event: $event.event,
                sourceEvent: $event.sourceEvent
              })
            "
            mwlDroppable
            dragOverClass="cal-drag-over"
            (drop)="
              eventDropped(
                openDay,
                $event.dropData.event,
                $event.dropData.draggedFrom
              )
            "
          >
          </mwl-calendar-open-day-events>
        </div>
      </div>
    </div>
  `
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: CalendarUtils
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [LOCALE_ID]
      }]
    }, {
      type: DateAdapter
    }];
  }, {
    viewDate: [{
      type: Input
    }],
    events: [{
      type: Input
    }],
    excludeDays: [{
      type: Input
    }],
    activeDayIsOpen: [{
      type: Input
    }],
    activeDay: [{
      type: Input
    }],
    refresh: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    tooltipPlacement: [{
      type: Input
    }],
    tooltipTemplate: [{
      type: Input
    }],
    tooltipAppendToBody: [{
      type: Input
    }],
    tooltipDelay: [{
      type: Input
    }],
    weekStartsOn: [{
      type: Input
    }],
    headerTemplate: [{
      type: Input
    }],
    cellTemplate: [{
      type: Input
    }],
    openDayEventsTemplate: [{
      type: Input
    }],
    eventTitleTemplate: [{
      type: Input
    }],
    eventActionsTemplate: [{
      type: Input
    }],
    weekendDays: [{
      type: Input
    }],
    beforeViewRender: [{
      type: Output
    }],
    dayClicked: [{
      type: Output
    }],
    eventClicked: [{
      type: Output
    }],
    columnHeaderClicked: [{
      type: Output
    }],
    eventTimesChanged: [{
      type: Output
    }]
  });
})();
var CalendarMonthModule = class {
};
CalendarMonthModule.ɵfac = function CalendarMonthModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CalendarMonthModule)();
};
CalendarMonthModule.ɵmod = ɵɵdefineNgModule({
  type: CalendarMonthModule,
  declarations: [CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent],
  imports: [CommonModule, DragAndDropModule, CalendarCommonModule],
  exports: [DragAndDropModule, CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent]
});
CalendarMonthModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, DragAndDropModule, CalendarCommonModule, DragAndDropModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarMonthModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, DragAndDropModule, CalendarCommonModule],
      declarations: [CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent],
      exports: [DragAndDropModule, CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent]
    }]
  }], null, null);
})();
var CalendarDragHelper = class {
  constructor(dragContainerElement, draggableElement) {
    this.dragContainerElement = dragContainerElement;
    this.startPosition = draggableElement.getBoundingClientRect();
  }
  validateDrag({
    x,
    y,
    snapDraggedEvents,
    dragAlreadyMoved,
    transform
  }) {
    const isDraggedWithinThreshold = isWithinThreshold({
      x,
      y
    }) || dragAlreadyMoved;
    if (snapDraggedEvents) {
      const inner = Object.assign({}, this.startPosition, {
        left: this.startPosition.left + transform.x,
        right: this.startPosition.right + transform.x,
        top: this.startPosition.top + transform.y,
        bottom: this.startPosition.bottom + transform.y
      });
      if (isDraggedWithinThreshold) {
        const outer = this.dragContainerElement.getBoundingClientRect();
        const isTopInside = outer.top < inner.top && inner.top < outer.bottom;
        const isBottomInside = outer.top < inner.bottom && inner.bottom < outer.bottom;
        return isInsideLeftAndRight(outer, inner) && (isTopInside || isBottomInside);
      }
      return false;
    } else {
      return isDraggedWithinThreshold;
    }
  }
};
var CalendarResizeHelper = class {
  constructor(resizeContainerElement, minWidth, rtl) {
    this.resizeContainerElement = resizeContainerElement;
    this.minWidth = minWidth;
    this.rtl = rtl;
  }
  validateResize({
    rectangle,
    edges
  }) {
    if (this.rtl) {
      if (typeof edges.left !== "undefined") {
        rectangle.left -= edges.left;
        rectangle.right += edges.left;
      } else if (typeof edges.right !== "undefined") {
        rectangle.left += edges.right;
        rectangle.right -= edges.right;
      }
      rectangle.width = rectangle.right - rectangle.left;
    }
    if (this.minWidth && Math.ceil(rectangle.width) < Math.ceil(this.minWidth)) {
      return false;
    }
    return isInside(this.resizeContainerElement.getBoundingClientRect(), rectangle);
  }
};
var CalendarWeekViewHeaderComponent = class {
  constructor() {
    this.dayHeaderClicked = new EventEmitter();
    this.eventDropped = new EventEmitter();
    this.dragEnter = new EventEmitter();
    this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
  }
};
CalendarWeekViewHeaderComponent.ɵfac = function CalendarWeekViewHeaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CalendarWeekViewHeaderComponent)();
};
CalendarWeekViewHeaderComponent.ɵcmp = ɵɵdefineComponent({
  type: CalendarWeekViewHeaderComponent,
  selectors: [["mwl-calendar-week-view-header"]],
  inputs: {
    days: "days",
    locale: "locale",
    customTemplate: "customTemplate"
  },
  outputs: {
    dayHeaderClicked: "dayHeaderClicked",
    eventDropped: "eventDropped",
    dragEnter: "dragEnter"
  },
  decls: 3,
  vars: 9,
  consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "row", 1, "cal-day-headers"], ["class", "cal-header", "mwlDroppable", "", "dragOverClass", "cal-drag-over", "tabindex", "0", "role", "columnheader", 3, "cal-past", "cal-today", "cal-future", "cal-weekend", "ngClass", "mwlClick", "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", "tabindex", "0", "role", "columnheader", 1, "cal-header", 3, "mwlClick", "drop", "dragEnter", "ngClass"]],
  template: function CalendarWeekViewHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, CalendarWeekViewHeaderComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, CalendarWeekViewHeaderComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    }
    if (rf & 2) {
      const defaultTemplate_r9 = ɵɵreference(1);
      ɵɵadvance(2);
      ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || defaultTemplate_r9)("ngTemplateOutletContext", ɵɵpureFunction6(2, _c16, ctx.days, ctx.locale, ctx.dayHeaderClicked, ctx.eventDropped, ctx.dragEnter, ctx.trackByWeekDayHeaderDate));
    }
  },
  dependencies: [NgClass, NgForOf, NgTemplateOutlet, DroppableDirective, ClickDirective, CalendarDatePipe],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarWeekViewHeaderComponent, [{
    type: Component,
    args: [{
      selector: "mwl-calendar-week-view-header",
      template: `
    <ng-template
      #defaultTemplate
      let-days="days"
      let-locale="locale"
      let-dayHeaderClicked="dayHeaderClicked"
      let-eventDropped="eventDropped"
      let-trackByWeekDayHeaderDate="trackByWeekDayHeaderDate"
      let-dragEnter="dragEnter"
    >
      <div class="cal-day-headers" role="row">
        <div
          class="cal-header"
          *ngFor="let day of days; trackBy: trackByWeekDayHeaderDate"
          [class.cal-past]="day.isPast"
          [class.cal-today]="day.isToday"
          [class.cal-future]="day.isFuture"
          [class.cal-weekend]="day.isWeekend"
          [ngClass]="day.cssClass"
          (mwlClick)="dayHeaderClicked.emit({ day: day, sourceEvent: $event })"
          mwlDroppable
          dragOverClass="cal-drag-over"
          (drop)="
            eventDropped.emit({
              event: $event.dropData.event,
              newStart: day.date
            })
          "
          (dragEnter)="dragEnter.emit({ date: day.date })"
          tabindex="0"
          role="columnheader"
        >
          <b>{{ day.date | calendarDate : 'weekViewColumnHeader' : locale }}</b
          ><br />
          <span>{{
            day.date | calendarDate : 'weekViewColumnSubHeader' : locale
          }}</span>
        </div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        days: days,
        locale: locale,
        dayHeaderClicked: dayHeaderClicked,
        eventDropped: eventDropped,
        dragEnter: dragEnter,
        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate
      }"
    >
    </ng-template>
  `
    }]
  }], null, {
    days: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    customTemplate: [{
      type: Input
    }],
    dayHeaderClicked: [{
      type: Output
    }],
    eventDropped: [{
      type: Output
    }],
    dragEnter: [{
      type: Output
    }]
  });
})();
var CalendarWeekViewEventComponent = class {
  constructor() {
    this.eventClicked = new EventEmitter();
  }
};
CalendarWeekViewEventComponent.ɵfac = function CalendarWeekViewEventComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CalendarWeekViewEventComponent)();
};
CalendarWeekViewEventComponent.ɵcmp = ɵɵdefineComponent({
  type: CalendarWeekViewEventComponent,
  selectors: [["mwl-calendar-week-view-event"]],
  inputs: {
    locale: "locale",
    weekEvent: "weekEvent",
    tooltipPlacement: "tooltipPlacement",
    tooltipAppendToBody: "tooltipAppendToBody",
    tooltipDisabled: "tooltipDisabled",
    tooltipDelay: "tooltipDelay",
    customTemplate: "customTemplate",
    eventTitleTemplate: "eventTitleTemplate",
    eventActionsTemplate: "eventActionsTemplate",
    tooltipTemplate: "tooltipTemplate",
    column: "column",
    daysInWeek: "daysInWeek"
  },
  outputs: {
    eventClicked: "eventClicked"
  },
  decls: 3,
  vars: 12,
  consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "0", "role", "application", 1, "cal-event", 3, "mwlClick", "mwlKeydownEnter", "ngStyle", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay"], [3, "event", "customTemplate"], [3, "event", "customTemplate", "view"]],
  template: function CalendarWeekViewEventComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, CalendarWeekViewEventComponent_ng_template_0_Template, 6, 27, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, CalendarWeekViewEventComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    }
    if (rf & 2) {
      const defaultTemplate_r11 = ɵɵreference(1);
      ɵɵadvance(2);
      ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || defaultTemplate_r11)("ngTemplateOutletContext", ɵɵpureFunctionV(2, _c17, [ctx.weekEvent, ctx.tooltipPlacement, ctx.eventClicked, ctx.tooltipTemplate, ctx.tooltipAppendToBody, ctx.tooltipDisabled, ctx.tooltipDelay, ctx.column, ctx.daysInWeek]));
    }
  },
  dependencies: [NgTemplateOutlet, NgStyle, CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipDirective, ClickDirective, KeydownEnterDirective, CalendarEventTitlePipe, CalendarA11yPipe],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarWeekViewEventComponent, [{
    type: Component,
    args: [{
      selector: "mwl-calendar-week-view-event",
      template: `
    <ng-template
      #defaultTemplate
      let-weekEvent="weekEvent"
      let-tooltipPlacement="tooltipPlacement"
      let-eventClicked="eventClicked"
      let-tooltipTemplate="tooltipTemplate"
      let-tooltipAppendToBody="tooltipAppendToBody"
      let-tooltipDisabled="tooltipDisabled"
      let-tooltipDelay="tooltipDelay"
      let-column="column"
      let-daysInWeek="daysInWeek"
    >
      <div
        class="cal-event"
        [ngStyle]="{
          color: weekEvent.event.color?.secondaryText,
          backgroundColor: weekEvent.event.color?.secondary,
          borderColor: weekEvent.event.color?.primary
        }"
        [mwlCalendarTooltip]="
          !tooltipDisabled
            ? (weekEvent.event.title
              | calendarEventTitle
                : (daysInWeek === 1 ? 'dayTooltip' : 'weekTooltip')
                : weekEvent.tempEvent || weekEvent.event)
            : ''
        "
        [tooltipPlacement]="tooltipPlacement"
        [tooltipEvent]="weekEvent.tempEvent || weekEvent.event"
        [tooltipTemplate]="tooltipTemplate"
        [tooltipAppendToBody]="tooltipAppendToBody"
        [tooltipDelay]="tooltipDelay"
        (mwlClick)="eventClicked.emit({ sourceEvent: $event })"
        (mwlKeydownEnter)="eventClicked.emit({ sourceEvent: $event })"
        tabindex="0"
        role="application"
        [attr.aria-label]="
          { event: weekEvent.tempEvent || weekEvent.event, locale: locale }
            | calendarA11y : 'eventDescription'
        "
      >
        <mwl-calendar-event-actions
          [event]="weekEvent.tempEvent || weekEvent.event"
          [customTemplate]="eventActionsTemplate"
        >
        </mwl-calendar-event-actions>
        &ngsp;
        <mwl-calendar-event-title
          [event]="weekEvent.tempEvent || weekEvent.event"
          [customTemplate]="eventTitleTemplate"
          [view]="daysInWeek === 1 ? 'day' : 'week'"
        >
        </mwl-calendar-event-title>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        weekEvent: weekEvent,
        tooltipPlacement: tooltipPlacement,
        eventClicked: eventClicked,
        tooltipTemplate: tooltipTemplate,
        tooltipAppendToBody: tooltipAppendToBody,
        tooltipDisabled: tooltipDisabled,
        tooltipDelay: tooltipDelay,
        column: column,
        daysInWeek: daysInWeek
      }"
    >
    </ng-template>
  `
    }]
  }], null, {
    locale: [{
      type: Input
    }],
    weekEvent: [{
      type: Input
    }],
    tooltipPlacement: [{
      type: Input
    }],
    tooltipAppendToBody: [{
      type: Input
    }],
    tooltipDisabled: [{
      type: Input
    }],
    tooltipDelay: [{
      type: Input
    }],
    customTemplate: [{
      type: Input
    }],
    eventTitleTemplate: [{
      type: Input
    }],
    eventActionsTemplate: [{
      type: Input
    }],
    tooltipTemplate: [{
      type: Input
    }],
    column: [{
      type: Input
    }],
    daysInWeek: [{
      type: Input
    }],
    eventClicked: [{
      type: Output
    }]
  });
})();
var CalendarWeekViewHourSegmentComponent = class {
};
CalendarWeekViewHourSegmentComponent.ɵfac = function CalendarWeekViewHourSegmentComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CalendarWeekViewHourSegmentComponent)();
};
CalendarWeekViewHourSegmentComponent.ɵcmp = ɵɵdefineComponent({
  type: CalendarWeekViewHourSegmentComponent,
  selectors: [["mwl-calendar-week-view-hour-segment"]],
  inputs: {
    segment: "segment",
    segmentHeight: "segmentHeight",
    locale: "locale",
    isTimeLabel: "isTimeLabel",
    daysInWeek: "daysInWeek",
    customTemplate: "customTemplate"
  },
  decls: 3,
  vars: 8,
  consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-hour-segment", 3, "ngClass"], ["class", "cal-time", 4, "ngIf"], [1, "cal-time"]],
  template: function CalendarWeekViewHourSegmentComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, CalendarWeekViewHourSegmentComponent_ng_template_0_Template, 3, 13, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, CalendarWeekViewHourSegmentComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    }
    if (rf & 2) {
      const defaultTemplate_r7 = ɵɵreference(1);
      ɵɵadvance(2);
      ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || defaultTemplate_r7)("ngTemplateOutletContext", ɵɵpureFunction5(2, _c19, ctx.segment, ctx.locale, ctx.segmentHeight, ctx.isTimeLabel, ctx.daysInWeek));
    }
  },
  dependencies: [NgClass, NgIf, NgTemplateOutlet, CalendarDatePipe, CalendarA11yPipe],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarWeekViewHourSegmentComponent, [{
    type: Component,
    args: [{
      selector: "mwl-calendar-week-view-hour-segment",
      template: `
    <ng-template
      #defaultTemplate
      let-segment="segment"
      let-locale="locale"
      let-segmentHeight="segmentHeight"
      let-isTimeLabel="isTimeLabel"
      let-daysInWeek="daysInWeek"
    >
      <div
        [attr.aria-hidden]="
          {}
            | calendarA11y
              : (daysInWeek === 1
                  ? 'hideDayHourSegment'
                  : 'hideWeekHourSegment')
        "
        class="cal-hour-segment"
        [style.height.px]="segmentHeight"
        [class.cal-hour-start]="segment.isStart"
        [class.cal-after-hour-start]="!segment.isStart"
        [ngClass]="segment.cssClass"
      >
        <div class="cal-time" *ngIf="isTimeLabel">
          {{
            segment.displayDate
              | calendarDate
                : (daysInWeek === 1 ? 'dayViewHour' : 'weekViewHour')
                : locale
          }}
        </div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        segment: segment,
        locale: locale,
        segmentHeight: segmentHeight,
        isTimeLabel: isTimeLabel,
        daysInWeek: daysInWeek
      }"
    >
    </ng-template>
  `
    }]
  }], null, {
    segment: [{
      type: Input
    }],
    segmentHeight: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    isTimeLabel: [{
      type: Input
    }],
    daysInWeek: [{
      type: Input
    }],
    customTemplate: [{
      type: Input
    }]
  });
})();
var CalendarWeekViewCurrentTimeMarkerComponent = class {
  constructor(dateAdapter, zone) {
    this.dateAdapter = dateAdapter;
    this.zone = zone;
    this.columnDate$ = new BehaviorSubject(void 0);
    this.marker$ = this.zone.onStable.pipe(switchMap(() => interval(60 * 1e3)), startWith(0), switchMapTo(this.columnDate$), map((columnDate) => {
      const startOfDay = this.dateAdapter.setMinutes(this.dateAdapter.setHours(columnDate, this.dayStartHour), this.dayStartMinute);
      const endOfDay = this.dateAdapter.setMinutes(this.dateAdapter.setHours(columnDate, this.dayEndHour), this.dayEndMinute);
      const hourHeightModifier = this.hourSegments * this.hourSegmentHeight / (this.hourDuration || 60);
      const now = /* @__PURE__ */ new Date();
      return {
        isVisible: this.dateAdapter.isSameDay(columnDate, now) && now >= startOfDay && now <= endOfDay,
        top: this.dateAdapter.differenceInMinutes(now, startOfDay) * hourHeightModifier
      };
    }));
  }
  ngOnChanges(changes) {
    if (changes.columnDate) {
      this.columnDate$.next(changes.columnDate.currentValue);
    }
  }
};
CalendarWeekViewCurrentTimeMarkerComponent.ɵfac = function CalendarWeekViewCurrentTimeMarkerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CalendarWeekViewCurrentTimeMarkerComponent)(ɵɵdirectiveInject(DateAdapter), ɵɵdirectiveInject(NgZone));
};
CalendarWeekViewCurrentTimeMarkerComponent.ɵcmp = ɵɵdefineComponent({
  type: CalendarWeekViewCurrentTimeMarkerComponent,
  selectors: [["mwl-calendar-week-view-current-time-marker"]],
  inputs: {
    columnDate: "columnDate",
    dayStartHour: "dayStartHour",
    dayStartMinute: "dayStartMinute",
    dayEndHour: "dayEndHour",
    dayEndMinute: "dayEndMinute",
    hourSegments: "hourSegments",
    hourDuration: "hourDuration",
    hourSegmentHeight: "hourSegmentHeight",
    customTemplate: "customTemplate"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 5,
  vars: 14,
  consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-current-time-marker", 3, "top", 4, "ngIf"], [1, "cal-current-time-marker"]],
  template: function CalendarWeekViewCurrentTimeMarkerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
      ɵɵpipe(3, "async");
      ɵɵpipe(4, "async");
    }
    if (rf & 2) {
      let tmp_2_0;
      const defaultTemplate_r3 = ɵɵreference(1);
      ɵɵadvance(2);
      ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || defaultTemplate_r3)("ngTemplateOutletContext", ɵɵpureFunction7(6, _c20, ctx.columnDate, ctx.dayStartHour, ctx.dayStartMinute, ctx.dayEndHour, ctx.dayEndMinute, (tmp_2_0 = ɵɵpipeBind1(3, 2, ctx.marker$)) == null ? null : tmp_2_0.isVisible, (tmp_2_0 = ɵɵpipeBind1(4, 4, ctx.marker$)) == null ? null : tmp_2_0.top));
    }
  },
  dependencies: [NgIf, NgTemplateOutlet, AsyncPipe],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarWeekViewCurrentTimeMarkerComponent, [{
    type: Component,
    args: [{
      selector: "mwl-calendar-week-view-current-time-marker",
      template: `
    <ng-template
      #defaultTemplate
      let-columnDate="columnDate"
      let-dayStartHour="dayStartHour"
      let-dayStartMinute="dayStartMinute"
      let-dayEndHour="dayEndHour"
      let-dayEndMinute="dayEndMinute"
      let-isVisible="isVisible"
      let-topPx="topPx"
    >
      <div
        class="cal-current-time-marker"
        *ngIf="isVisible"
        [style.top.px]="topPx"
      ></div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        columnDate: columnDate,
        dayStartHour: dayStartHour,
        dayStartMinute: dayStartMinute,
        dayEndHour: dayEndHour,
        dayEndMinute: dayEndMinute,
        isVisible: (marker$ | async)?.isVisible,
        topPx: (marker$ | async)?.top
      }"
    >
    </ng-template>
  `
    }]
  }], function() {
    return [{
      type: DateAdapter
    }, {
      type: NgZone
    }];
  }, {
    columnDate: [{
      type: Input
    }],
    dayStartHour: [{
      type: Input
    }],
    dayStartMinute: [{
      type: Input
    }],
    dayEndHour: [{
      type: Input
    }],
    dayEndMinute: [{
      type: Input
    }],
    hourSegments: [{
      type: Input
    }],
    hourDuration: [{
      type: Input
    }],
    hourSegmentHeight: [{
      type: Input
    }],
    customTemplate: [{
      type: Input
    }]
  });
})();
var CalendarWeekViewComponent = class {
  /**
   * @hidden
   */
  constructor(cdr, utils, locale, dateAdapter, element) {
    this.cdr = cdr;
    this.utils = utils;
    this.dateAdapter = dateAdapter;
    this.element = element;
    this.events = [];
    this.excludeDays = [];
    this.tooltipPlacement = "auto";
    this.tooltipAppendToBody = true;
    this.tooltipDelay = null;
    this.precision = "days";
    this.snapDraggedEvents = true;
    this.hourSegments = 2;
    this.hourSegmentHeight = 30;
    this.minimumEventHeight = 30;
    this.dayStartHour = 0;
    this.dayStartMinute = 0;
    this.dayEndHour = 23;
    this.dayEndMinute = 59;
    this.dayHeaderClicked = new EventEmitter();
    this.eventClicked = new EventEmitter();
    this.eventTimesChanged = new EventEmitter();
    this.beforeViewRender = new EventEmitter();
    this.hourSegmentClicked = new EventEmitter();
    this.allDayEventResizes = /* @__PURE__ */ new Map();
    this.timeEventResizes = /* @__PURE__ */ new Map();
    this.eventDragEnterByType = {
      allDay: 0,
      time: 0
    };
    this.dragActive = false;
    this.dragAlreadyMoved = false;
    this.calendarId = Symbol("angular calendar week view id");
    this.rtl = false;
    this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
    this.trackByHourSegment = trackByHourSegment;
    this.trackByHour = trackByHour;
    this.trackByWeekAllDayEvent = trackByWeekAllDayEvent;
    this.trackByWeekTimeEvent = trackByWeekTimeEvent;
    this.trackByHourColumn = (index, column) => column.hours[0] ? column.hours[0].segments[0].date.toISOString() : column;
    this.trackById = (index, row) => row.id;
    this.locale = locale;
  }
  /**
   * @hidden
   */
  ngOnInit() {
    if (this.refresh) {
      this.refreshSubscription = this.refresh.subscribe(() => {
        this.refreshAll();
        this.cdr.markForCheck();
      });
    }
  }
  /**
   * @hidden
   */
  ngOnChanges(changes) {
    const refreshHeader = changes.viewDate || changes.excludeDays || changes.weekendDays || changes.daysInWeek || changes.weekStartsOn;
    const refreshBody = changes.viewDate || changes.dayStartHour || changes.dayStartMinute || changes.dayEndHour || changes.dayEndMinute || changes.hourSegments || changes.hourDuration || changes.weekStartsOn || changes.weekendDays || changes.excludeDays || changes.hourSegmentHeight || changes.events || changes.daysInWeek || changes.minimumEventHeight;
    if (refreshHeader) {
      this.refreshHeader();
    }
    if (changes.events) {
      validateEvents2(this.events);
    }
    if (refreshBody) {
      this.refreshBody();
    }
    if (refreshHeader || refreshBody) {
      this.emitBeforeViewRender();
    }
  }
  /**
   * @hidden
   */
  ngOnDestroy() {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }
  /**
   * @hidden
   */
  ngAfterViewInit() {
    this.rtl = typeof window !== "undefined" && getComputedStyle(this.element.nativeElement).direction === "rtl";
    this.cdr.detectChanges();
  }
  /**
   * @hidden
   */
  timeEventResizeStarted(eventsContainer, timeEvent, resizeEvent) {
    this.timeEventResizes.set(timeEvent.event, resizeEvent);
    this.resizeStarted(eventsContainer, timeEvent);
  }
  /**
   * @hidden
   */
  timeEventResizing(timeEvent, resizeEvent) {
    this.timeEventResizes.set(timeEvent.event, resizeEvent);
    const adjustedEvents = /* @__PURE__ */ new Map();
    const tempEvents = [...this.events];
    this.timeEventResizes.forEach((lastResizeEvent, event) => {
      const newEventDates = this.getTimeEventResizedDates(event, lastResizeEvent);
      const adjustedEvent = __spreadValues(__spreadValues({}, event), newEventDates);
      adjustedEvents.set(adjustedEvent, event);
      const eventIndex = tempEvents.indexOf(event);
      tempEvents[eventIndex] = adjustedEvent;
    });
    this.restoreOriginalEvents(tempEvents, adjustedEvents, true);
  }
  /**
   * @hidden
   */
  timeEventResizeEnded(timeEvent) {
    this.view = this.getWeekView(this.events);
    const lastResizeEvent = this.timeEventResizes.get(timeEvent.event);
    if (lastResizeEvent) {
      this.timeEventResizes.delete(timeEvent.event);
      const newEventDates = this.getTimeEventResizedDates(timeEvent.event, lastResizeEvent);
      this.eventTimesChanged.emit({
        newStart: newEventDates.start,
        newEnd: newEventDates.end,
        event: timeEvent.event,
        type: CalendarEventTimesChangedEventType.Resize
      });
    }
  }
  /**
   * @hidden
   */
  allDayEventResizeStarted(allDayEventsContainer, allDayEvent, resizeEvent) {
    this.allDayEventResizes.set(allDayEvent, {
      originalOffset: allDayEvent.offset,
      originalSpan: allDayEvent.span,
      edge: typeof resizeEvent.edges.left !== "undefined" ? "left" : "right"
    });
    this.resizeStarted(allDayEventsContainer, allDayEvent, this.getDayColumnWidth(allDayEventsContainer));
  }
  /**
   * @hidden
   */
  allDayEventResizing(allDayEvent, resizeEvent, dayWidth) {
    const currentResize = this.allDayEventResizes.get(allDayEvent);
    const modifier = this.rtl ? -1 : 1;
    if (typeof resizeEvent.edges.left !== "undefined") {
      const diff = Math.round(+resizeEvent.edges.left / dayWidth) * modifier;
      allDayEvent.offset = currentResize.originalOffset + diff;
      allDayEvent.span = currentResize.originalSpan - diff;
    } else if (typeof resizeEvent.edges.right !== "undefined") {
      const diff = Math.round(+resizeEvent.edges.right / dayWidth) * modifier;
      allDayEvent.span = currentResize.originalSpan + diff;
    }
  }
  /**
   * @hidden
   */
  allDayEventResizeEnded(allDayEvent) {
    const currentResize = this.allDayEventResizes.get(allDayEvent);
    if (currentResize) {
      const allDayEventResizingBeforeStart = currentResize.edge === "left";
      let daysDiff;
      if (allDayEventResizingBeforeStart) {
        daysDiff = allDayEvent.offset - currentResize.originalOffset;
      } else {
        daysDiff = allDayEvent.span - currentResize.originalSpan;
      }
      allDayEvent.offset = currentResize.originalOffset;
      allDayEvent.span = currentResize.originalSpan;
      const newDates = this.getAllDayEventResizedDates(allDayEvent.event, daysDiff, allDayEventResizingBeforeStart);
      this.eventTimesChanged.emit({
        newStart: newDates.start,
        newEnd: newDates.end,
        event: allDayEvent.event,
        type: CalendarEventTimesChangedEventType.Resize
      });
      this.allDayEventResizes.delete(allDayEvent);
    }
  }
  /**
   * @hidden
   */
  getDayColumnWidth(eventRowContainer) {
    return Math.floor(eventRowContainer.offsetWidth / this.days.length);
  }
  /**
   * @hidden
   */
  dateDragEnter(date) {
    this.lastDragEnterDate = date;
  }
  /**
   * @hidden
   */
  eventDropped(dropEvent, date, allDay) {
    if (shouldFireDroppedEvent(dropEvent, date, allDay, this.calendarId) && this.lastDragEnterDate.getTime() === date.getTime() && (!this.snapDraggedEvents || dropEvent.dropData.event !== this.lastDraggedEvent)) {
      this.eventTimesChanged.emit({
        type: CalendarEventTimesChangedEventType.Drop,
        event: dropEvent.dropData.event,
        newStart: date,
        allDay
      });
    }
    this.lastDraggedEvent = null;
  }
  /**
   * @hidden
   */
  dragEnter(type) {
    this.eventDragEnterByType[type]++;
  }
  /**
   * @hidden
   */
  dragLeave(type) {
    this.eventDragEnterByType[type]--;
  }
  /**
   * @hidden
   */
  dragStarted(eventsContainerElement, eventElement, event, useY) {
    this.dayColumnWidth = this.getDayColumnWidth(eventsContainerElement);
    const dragHelper = new CalendarDragHelper(eventsContainerElement, eventElement);
    this.validateDrag = ({
      x,
      y,
      transform
    }) => {
      const isAllowed = this.allDayEventResizes.size === 0 && this.timeEventResizes.size === 0 && dragHelper.validateDrag({
        x,
        y,
        snapDraggedEvents: this.snapDraggedEvents,
        dragAlreadyMoved: this.dragAlreadyMoved,
        transform
      });
      if (isAllowed && this.validateEventTimesChanged) {
        const newEventTimes = this.getDragMovedEventTimes(event, {
          x,
          y
        }, this.dayColumnWidth, useY);
        return this.validateEventTimesChanged({
          type: CalendarEventTimesChangedEventType.Drag,
          event: event.event,
          newStart: newEventTimes.start,
          newEnd: newEventTimes.end
        });
      }
      return isAllowed;
    };
    this.dragActive = true;
    this.dragAlreadyMoved = false;
    this.lastDraggedEvent = null;
    this.eventDragEnterByType = {
      allDay: 0,
      time: 0
    };
    if (!this.snapDraggedEvents && useY) {
      this.view.hourColumns.forEach((column) => {
        const linkedEvent = column.events.find((columnEvent) => columnEvent.event === event.event && columnEvent !== event);
        if (linkedEvent) {
          linkedEvent.width = 0;
          linkedEvent.height = 0;
        }
      });
    }
    this.cdr.markForCheck();
  }
  /**
   * @hidden
   */
  dragMove(dayEvent, dragEvent) {
    const newEventTimes = this.getDragMovedEventTimes(dayEvent, dragEvent, this.dayColumnWidth, true);
    const originalEvent = dayEvent.event;
    const adjustedEvent = __spreadValues(__spreadValues({}, originalEvent), newEventTimes);
    const tempEvents = this.events.map((event) => {
      if (event === originalEvent) {
        return adjustedEvent;
      }
      return event;
    });
    this.restoreOriginalEvents(tempEvents, /* @__PURE__ */ new Map([[adjustedEvent, originalEvent]]), this.snapDraggedEvents);
    this.dragAlreadyMoved = true;
  }
  /**
   * @hidden
   */
  allDayEventDragMove() {
    this.dragAlreadyMoved = true;
  }
  /**
   * @hidden
   */
  dragEnded(weekEvent, dragEndEvent, dayWidth, useY = false) {
    this.view = this.getWeekView(this.events);
    this.dragActive = false;
    this.validateDrag = null;
    const {
      start,
      end
    } = this.getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY);
    if ((this.snapDraggedEvents || this.eventDragEnterByType[useY ? "time" : "allDay"] > 0) && isDraggedWithinPeriod(start, end, this.view.period)) {
      this.lastDraggedEvent = weekEvent.event;
      this.eventTimesChanged.emit({
        newStart: start,
        newEnd: end,
        event: weekEvent.event,
        type: CalendarEventTimesChangedEventType.Drag,
        allDay: !useY
      });
    }
  }
  refreshHeader() {
    this.days = this.utils.getWeekViewHeader(__spreadValues({
      viewDate: this.viewDate,
      weekStartsOn: this.weekStartsOn,
      excluded: this.excludeDays,
      weekendDays: this.weekendDays
    }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
  }
  refreshBody() {
    this.view = this.getWeekView(this.events);
  }
  refreshAll() {
    this.refreshHeader();
    this.refreshBody();
    this.emitBeforeViewRender();
  }
  emitBeforeViewRender() {
    if (this.days && this.view) {
      this.beforeViewRender.emit(__spreadValues({
        header: this.days
      }, this.view));
    }
  }
  getWeekView(events) {
    return this.utils.getWeekView(__spreadValues({
      events,
      viewDate: this.viewDate,
      weekStartsOn: this.weekStartsOn,
      excluded: this.excludeDays,
      precision: this.precision,
      absolutePositionedEvents: true,
      hourSegments: this.hourSegments,
      hourDuration: this.hourDuration,
      dayStart: {
        hour: this.dayStartHour,
        minute: this.dayStartMinute
      },
      dayEnd: {
        hour: this.dayEndHour,
        minute: this.dayEndMinute
      },
      segmentHeight: this.hourSegmentHeight,
      weekendDays: this.weekendDays,
      minimumEventHeight: this.minimumEventHeight
    }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
  }
  getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY) {
    const daysDragged = roundToNearest(dragEndEvent.x, dayWidth) / dayWidth * (this.rtl ? -1 : 1);
    const minutesMoved = useY ? getMinutesMoved(dragEndEvent.y, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize, this.hourDuration) : 0;
    const start = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.start, daysDragged, this.excludeDays), minutesMoved);
    let end;
    if (weekEvent.event.end) {
      end = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.end, daysDragged, this.excludeDays), minutesMoved);
    }
    return {
      start,
      end
    };
  }
  restoreOriginalEvents(tempEvents, adjustedEvents, snapDraggedEvents = true) {
    const previousView = this.view;
    if (snapDraggedEvents) {
      this.view = this.getWeekView(tempEvents);
    }
    const adjustedEventsArray = tempEvents.filter((event) => adjustedEvents.has(event));
    this.view.hourColumns.forEach((column, columnIndex) => {
      previousView.hourColumns[columnIndex].hours.forEach((hour, hourIndex) => {
        hour.segments.forEach((segment, segmentIndex) => {
          column.hours[hourIndex].segments[segmentIndex].cssClass = segment.cssClass;
        });
      });
      adjustedEventsArray.forEach((adjustedEvent) => {
        const originalEvent = adjustedEvents.get(adjustedEvent);
        const existingColumnEvent = column.events.find((columnEvent) => columnEvent.event === (snapDraggedEvents ? adjustedEvent : originalEvent));
        if (existingColumnEvent) {
          existingColumnEvent.event = originalEvent;
          existingColumnEvent["tempEvent"] = adjustedEvent;
          if (!snapDraggedEvents) {
            existingColumnEvent.height = 0;
            existingColumnEvent.width = 0;
          }
        } else {
          const event = {
            event: originalEvent,
            left: 0,
            top: 0,
            height: 0,
            width: 0,
            startsBeforeDay: false,
            endsAfterDay: false,
            tempEvent: adjustedEvent
          };
          column.events.push(event);
        }
      });
    });
    adjustedEvents.clear();
  }
  getTimeEventResizedDates(calendarEvent, resizeEvent) {
    const newEventDates = {
      start: calendarEvent.start,
      end: getDefaultEventEnd(this.dateAdapter, calendarEvent, this.minimumEventHeight)
    };
    const _a = calendarEvent, {
      end
    } = _a, eventWithoutEnd = __objRest(_a, [
      "end"
    ]);
    const smallestResizes = {
      start: this.dateAdapter.addMinutes(newEventDates.end, this.minimumEventHeight * -1),
      end: getDefaultEventEnd(this.dateAdapter, eventWithoutEnd, this.minimumEventHeight)
    };
    const modifier = this.rtl ? -1 : 1;
    if (typeof resizeEvent.edges.left !== "undefined") {
      const daysDiff = Math.round(+resizeEvent.edges.left / this.dayColumnWidth) * modifier;
      const newStart = addDaysWithExclusions(this.dateAdapter, newEventDates.start, daysDiff, this.excludeDays);
      if (newStart < smallestResizes.start) {
        newEventDates.start = newStart;
      } else {
        newEventDates.start = smallestResizes.start;
      }
    } else if (typeof resizeEvent.edges.right !== "undefined") {
      const daysDiff = Math.round(+resizeEvent.edges.right / this.dayColumnWidth) * modifier;
      const newEnd = addDaysWithExclusions(this.dateAdapter, newEventDates.end, daysDiff, this.excludeDays);
      if (newEnd > smallestResizes.end) {
        newEventDates.end = newEnd;
      } else {
        newEventDates.end = smallestResizes.end;
      }
    }
    if (typeof resizeEvent.edges.top !== "undefined") {
      const minutesMoved = getMinutesMoved(resizeEvent.edges.top, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize, this.hourDuration);
      const newStart = this.dateAdapter.addMinutes(newEventDates.start, minutesMoved);
      if (newStart < smallestResizes.start) {
        newEventDates.start = newStart;
      } else {
        newEventDates.start = smallestResizes.start;
      }
    } else if (typeof resizeEvent.edges.bottom !== "undefined") {
      const minutesMoved = getMinutesMoved(resizeEvent.edges.bottom, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize, this.hourDuration);
      const newEnd = this.dateAdapter.addMinutes(newEventDates.end, minutesMoved);
      if (newEnd > smallestResizes.end) {
        newEventDates.end = newEnd;
      } else {
        newEventDates.end = smallestResizes.end;
      }
    }
    return newEventDates;
  }
  resizeStarted(eventsContainer, event, dayWidth) {
    this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
    const resizeHelper = new CalendarResizeHelper(eventsContainer, dayWidth, this.rtl);
    this.validateResize = ({
      rectangle,
      edges
    }) => {
      const isWithinBoundary = resizeHelper.validateResize({
        rectangle: __spreadValues({}, rectangle),
        edges
      });
      if (isWithinBoundary && this.validateEventTimesChanged) {
        let newEventDates;
        if (!dayWidth) {
          newEventDates = this.getTimeEventResizedDates(event.event, {
            rectangle,
            edges
          });
        } else {
          const modifier = this.rtl ? -1 : 1;
          if (typeof edges.left !== "undefined") {
            const diff = Math.round(+edges.left / dayWidth) * modifier;
            newEventDates = this.getAllDayEventResizedDates(event.event, diff, !this.rtl);
          } else {
            const diff = Math.round(+edges.right / dayWidth) * modifier;
            newEventDates = this.getAllDayEventResizedDates(event.event, diff, this.rtl);
          }
        }
        return this.validateEventTimesChanged({
          type: CalendarEventTimesChangedEventType.Resize,
          event: event.event,
          newStart: newEventDates.start,
          newEnd: newEventDates.end
        });
      }
      return isWithinBoundary;
    };
    this.cdr.markForCheck();
  }
  /**
   * @hidden
   */
  getAllDayEventResizedDates(event, daysDiff, beforeStart) {
    let start = event.start;
    let end = event.end || event.start;
    if (beforeStart) {
      start = addDaysWithExclusions(this.dateAdapter, start, daysDiff, this.excludeDays);
    } else {
      end = addDaysWithExclusions(this.dateAdapter, end, daysDiff, this.excludeDays);
    }
    return {
      start,
      end
    };
  }
};
CalendarWeekViewComponent.ɵfac = function CalendarWeekViewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CalendarWeekViewComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(CalendarUtils), ɵɵdirectiveInject(LOCALE_ID), ɵɵdirectiveInject(DateAdapter), ɵɵdirectiveInject(ElementRef));
};
CalendarWeekViewComponent.ɵcmp = ɵɵdefineComponent({
  type: CalendarWeekViewComponent,
  selectors: [["mwl-calendar-week-view"]],
  inputs: {
    viewDate: "viewDate",
    events: "events",
    excludeDays: "excludeDays",
    refresh: "refresh",
    locale: "locale",
    tooltipPlacement: "tooltipPlacement",
    tooltipTemplate: "tooltipTemplate",
    tooltipAppendToBody: "tooltipAppendToBody",
    tooltipDelay: "tooltipDelay",
    weekStartsOn: "weekStartsOn",
    headerTemplate: "headerTemplate",
    eventTemplate: "eventTemplate",
    eventTitleTemplate: "eventTitleTemplate",
    eventActionsTemplate: "eventActionsTemplate",
    precision: "precision",
    weekendDays: "weekendDays",
    snapDraggedEvents: "snapDraggedEvents",
    hourSegments: "hourSegments",
    hourDuration: "hourDuration",
    hourSegmentHeight: "hourSegmentHeight",
    minimumEventHeight: "minimumEventHeight",
    dayStartHour: "dayStartHour",
    dayStartMinute: "dayStartMinute",
    dayEndHour: "dayEndHour",
    dayEndMinute: "dayEndMinute",
    hourSegmentTemplate: "hourSegmentTemplate",
    eventSnapSize: "eventSnapSize",
    allDayEventsLabelTemplate: "allDayEventsLabelTemplate",
    daysInWeek: "daysInWeek",
    currentTimeMarkerTemplate: "currentTimeMarkerTemplate",
    validateEventTimesChanged: "validateEventTimesChanged",
    resizeCursors: "resizeCursors"
  },
  outputs: {
    dayHeaderClicked: "dayHeaderClicked",
    eventClicked: "eventClicked",
    eventTimesChanged: "eventTimesChanged",
    beforeViewRender: "beforeViewRender",
    hourSegmentClicked: "hourSegmentClicked"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 8,
  vars: 9,
  consts: [["dayColumns", ""], ["allDayEventsContainer", ""], ["eventRowContainer", ""], ["event", ""], ["weekEventTemplate", ""], ["role", "grid", 1, "cal-week-view"], [3, "dayHeaderClicked", "eventDropped", "dragEnter", "days", "locale", "customTemplate"], ["class", "cal-all-day-events", "mwlDroppable", "", 3, "dragEnter", "dragLeave", 4, "ngIf"], ["mwlDroppable", "", 1, "cal-time-events", 3, "dragEnter", "dragLeave"], ["class", "cal-time-label-column", 4, "ngIf"], [1, "cal-day-columns"], ["class", "cal-day-column", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", 1, "cal-all-day-events", 3, "dragEnter", "dragLeave"], [1, "cal-time-label-column"], [4, "ngTemplateOutlet"], ["class", "cal-day-column", "mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "cal-events-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 1, "cal-day-column", 3, "drop", "dragEnter"], [1, "cal-events-row"], ["class", "cal-event-container", "mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "cal-draggable", "cal-starts-within-week", "cal-ends-within-week", "ngClass", "width", "marginLeft", "marginRight", "resizeCursors", "resizeSnapGrid", "validateResize", "dropData", "dragAxis", "dragSnapGrid", "validateDrag", "touchStartLongPress", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event-container", 3, "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd", "ngClass", "resizeCursors", "resizeSnapGrid", "validateResize", "dropData", "dragAxis", "dragSnapGrid", "validateDrag", "touchStartLongPress"], ["class", "cal-resize-handle cal-resize-handle-before-start", "mwlResizeHandle", "", 3, "resizeEdges", 4, "ngIf"], [3, "eventClicked", "locale", "weekEvent", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "daysInWeek"], ["class", "cal-resize-handle cal-resize-handle-after-end", "mwlResizeHandle", "", 3, "resizeEdges", 4, "ngIf"], ["mwlResizeHandle", "", 1, "cal-resize-handle", "cal-resize-handle-before-start", 3, "resizeEdges"], ["mwlResizeHandle", "", 1, "cal-resize-handle", "cal-resize-handle-after-end", 3, "resizeEdges"], ["class", "cal-hour", 3, "cal-hour-odd", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cal-hour"], [3, "height", "segment", "segmentHeight", "locale", "customTemplate", "isTimeLabel", "daysInWeek", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "segment", "segmentHeight", "locale", "customTemplate", "isTimeLabel", "daysInWeek"], [1, "cal-day-column"], [3, "columnDate", "dayStartHour", "dayStartMinute", "dayEndHour", "dayEndMinute", "hourSegments", "hourDuration", "hourSegmentHeight", "customTemplate"], [1, "cal-events-container"], ["class", "cal-event-container", "mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "cal-draggable", "cal-starts-within-day", "cal-ends-within-day", "ngClass", "hidden", "top", "height", "left", "width", "resizeCursors", "resizeSnapGrid", "validateResize", "allowNegativeResizes", "dropData", "dragAxis", "dragSnapGrid", "touchStartLongPress", "ghostDragEnabled", "ghostElementTemplate", "validateDrag", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event-container", 3, "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd", "ngClass", "hidden", "resizeCursors", "resizeSnapGrid", "validateResize", "allowNegativeResizes", "dropData", "dragAxis", "dragSnapGrid", "touchStartLongPress", "ghostDragEnabled", "ghostElementTemplate", "validateDrag"], [3, "ngTemplateOutlet"], [3, "eventClicked", "locale", "weekEvent", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDisabled", "tooltipDelay", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "column", "daysInWeek"], ["mwlDroppable", "", "dragActiveClass", "cal-drag-active", 3, "height", "segment", "segmentHeight", "locale", "customTemplate", "daysInWeek", "clickListenerDisabled", "dragOverClass", "isTimeLabel", "mwlClick", "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragActiveClass", "cal-drag-active", 3, "mwlClick", "drop", "dragEnter", "segment", "segmentHeight", "locale", "customTemplate", "daysInWeek", "clickListenerDisabled", "dragOverClass", "isTimeLabel"]],
  template: function CalendarWeekViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "div", 5)(1, "mwl-calendar-week-view-header", 6);
      ɵɵlistener("dayHeaderClicked", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_dayHeaderClicked_1_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.dayHeaderClicked.emit($event));
      })("eventDropped", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_eventDropped_1_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.eventDropped({
          dropData: $event
        }, $event.newStart, true));
      })("dragEnter", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_dragEnter_1_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.dateDragEnter($event.date));
      });
      ɵɵelementEnd();
      ɵɵtemplate(2, CalendarWeekViewComponent_div_2_Template, 7, 5, "div", 7);
      ɵɵelementStart(3, "div", 8);
      ɵɵlistener("dragEnter", function CalendarWeekViewComponent_Template_div_dragEnter_3_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.dragEnter("time"));
      })("dragLeave", function CalendarWeekViewComponent_Template_div_dragLeave_3_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.dragLeave("time"));
      });
      ɵɵtemplate(4, CalendarWeekViewComponent_div_4_Template, 2, 2, "div", 9);
      ɵɵelementStart(5, "div", 10, 0);
      ɵɵtemplate(7, CalendarWeekViewComponent_div_7_Template, 5, 13, "div", 11);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("days", ctx.days)("locale", ctx.locale)("customTemplate", ctx.headerTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.view.allDayEventRows.length > 0);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.view.hourColumns.length > 0 && ctx.daysInWeek !== 1);
      ɵɵadvance();
      ɵɵclassProp("cal-resize-active", ctx.timeEventResizes.size > 0);
      ɵɵadvance(2);
      ɵɵproperty("ngForOf", ctx.view.hourColumns)("ngForTrackBy", ctx.trackByHourColumn);
    }
  },
  dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, ResizableDirective, ResizeHandleDirective, DraggableDirective, DroppableDirective, ClickDirective, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarWeekViewComponent, [{
    type: Component,
    args: [{
      selector: "mwl-calendar-week-view",
      template: `
    <div class="cal-week-view" role="grid">
      <mwl-calendar-week-view-header
        [days]="days"
        [locale]="locale"
        [customTemplate]="headerTemplate"
        (dayHeaderClicked)="dayHeaderClicked.emit($event)"
        (eventDropped)="
          eventDropped({ dropData: $event }, $event.newStart, true)
        "
        (dragEnter)="dateDragEnter($event.date)"
      >
      </mwl-calendar-week-view-header>
      <div
        class="cal-all-day-events"
        #allDayEventsContainer
        *ngIf="view.allDayEventRows.length > 0"
        mwlDroppable
        (dragEnter)="dragEnter('allDay')"
        (dragLeave)="dragLeave('allDay')"
      >
        <div class="cal-day-columns">
          <div class="cal-time-label-column">
            <ng-container
              *ngTemplateOutlet="allDayEventsLabelTemplate"
            ></ng-container>
          </div>
          <div
            class="cal-day-column"
            *ngFor="let day of days; trackBy: trackByWeekDayHeaderDate"
            mwlDroppable
            dragOverClass="cal-drag-over"
            (drop)="eventDropped($event, day.date, true)"
            (dragEnter)="dateDragEnter(day.date)"
          ></div>
        </div>
        <div
          *ngFor="let eventRow of view.allDayEventRows; trackBy: trackById"
          #eventRowContainer
          class="cal-events-row"
        >
          <div
            *ngFor="
              let allDayEvent of eventRow.row;
              trackBy: trackByWeekAllDayEvent
            "
            #event
            class="cal-event-container"
            [class.cal-draggable]="
              allDayEvent.event.draggable && allDayEventResizes.size === 0
            "
            [class.cal-starts-within-week]="!allDayEvent.startsBeforeWeek"
            [class.cal-ends-within-week]="!allDayEvent.endsAfterWeek"
            [ngClass]="allDayEvent.event?.cssClass"
            [style.width.%]="(100 / days.length) * allDayEvent.span"
            [style.marginLeft.%]="
              rtl ? null : (100 / days.length) * allDayEvent.offset
            "
            [style.marginRight.%]="
              rtl ? (100 / days.length) * allDayEvent.offset : null
            "
            mwlResizable
            [resizeCursors]="resizeCursors"
            [resizeSnapGrid]="{ left: dayColumnWidth, right: dayColumnWidth }"
            [validateResize]="validateResize"
            (resizeStart)="
              allDayEventResizeStarted(eventRowContainer, allDayEvent, $event)
            "
            (resizing)="
              allDayEventResizing(allDayEvent, $event, dayColumnWidth)
            "
            (resizeEnd)="allDayEventResizeEnded(allDayEvent)"
            mwlDraggable
            dragActiveClass="cal-drag-active"
            [dropData]="{ event: allDayEvent.event, calendarId: calendarId }"
            [dragAxis]="{
              x: allDayEvent.event.draggable && allDayEventResizes.size === 0,
              y:
                !snapDraggedEvents &&
                allDayEvent.event.draggable &&
                allDayEventResizes.size === 0
            }"
            [dragSnapGrid]="snapDraggedEvents ? { x: dayColumnWidth } : {}"
            [validateDrag]="validateDrag"
            [touchStartLongPress]="{ delay: 300, delta: 30 }"
            (dragStart)="
              dragStarted(eventRowContainer, event, allDayEvent, false)
            "
            (dragging)="allDayEventDragMove()"
            (dragEnd)="dragEnded(allDayEvent, $event, dayColumnWidth)"
          >
            <div
              class="cal-resize-handle cal-resize-handle-before-start"
              *ngIf="
                allDayEvent.event?.resizable?.beforeStart &&
                !allDayEvent.startsBeforeWeek
              "
              mwlResizeHandle
              [resizeEdges]="{ left: true }"
            ></div>
            <mwl-calendar-week-view-event
              [locale]="locale"
              [weekEvent]="allDayEvent"
              [tooltipPlacement]="tooltipPlacement"
              [tooltipTemplate]="tooltipTemplate"
              [tooltipAppendToBody]="tooltipAppendToBody"
              [tooltipDelay]="tooltipDelay"
              [customTemplate]="eventTemplate"
              [eventTitleTemplate]="eventTitleTemplate"
              [eventActionsTemplate]="eventActionsTemplate"
              [daysInWeek]="daysInWeek"
              (eventClicked)="
                eventClicked.emit({
                  event: allDayEvent.event,
                  sourceEvent: $event.sourceEvent
                })
              "
            >
            </mwl-calendar-week-view-event>
            <div
              class="cal-resize-handle cal-resize-handle-after-end"
              *ngIf="
                allDayEvent.event?.resizable?.afterEnd &&
                !allDayEvent.endsAfterWeek
              "
              mwlResizeHandle
              [resizeEdges]="{ right: true }"
            ></div>
          </div>
        </div>
      </div>
      <div
        class="cal-time-events"
        mwlDroppable
        (dragEnter)="dragEnter('time')"
        (dragLeave)="dragLeave('time')"
      >
        <div
          class="cal-time-label-column"
          *ngIf="view.hourColumns.length > 0 && daysInWeek !== 1"
        >
          <div
            *ngFor="
              let hour of view.hourColumns[0].hours;
              trackBy: trackByHour;
              let odd = odd
            "
            class="cal-hour"
            [class.cal-hour-odd]="odd"
          >
            <mwl-calendar-week-view-hour-segment
              *ngFor="let segment of hour.segments; trackBy: trackByHourSegment"
              [style.height.px]="hourSegmentHeight"
              [segment]="segment"
              [segmentHeight]="hourSegmentHeight"
              [locale]="locale"
              [customTemplate]="hourSegmentTemplate"
              [isTimeLabel]="true"
              [daysInWeek]="daysInWeek"
            >
            </mwl-calendar-week-view-hour-segment>
          </div>
        </div>
        <div
          class="cal-day-columns"
          [class.cal-resize-active]="timeEventResizes.size > 0"
          #dayColumns
        >
          <div
            class="cal-day-column"
            *ngFor="let column of view.hourColumns; trackBy: trackByHourColumn"
          >
            <mwl-calendar-week-view-current-time-marker
              [columnDate]="column.date"
              [dayStartHour]="dayStartHour"
              [dayStartMinute]="dayStartMinute"
              [dayEndHour]="dayEndHour"
              [dayEndMinute]="dayEndMinute"
              [hourSegments]="hourSegments"
              [hourDuration]="hourDuration"
              [hourSegmentHeight]="hourSegmentHeight"
              [customTemplate]="currentTimeMarkerTemplate"
            ></mwl-calendar-week-view-current-time-marker>
            <div class="cal-events-container">
              <div
                *ngFor="
                  let timeEvent of column.events;
                  trackBy: trackByWeekTimeEvent
                "
                #event
                class="cal-event-container"
                [class.cal-draggable]="
                  timeEvent.event.draggable && timeEventResizes.size === 0
                "
                [class.cal-starts-within-day]="!timeEvent.startsBeforeDay"
                [class.cal-ends-within-day]="!timeEvent.endsAfterDay"
                [ngClass]="timeEvent.event.cssClass"
                [hidden]="timeEvent.height === 0 && timeEvent.width === 0"
                [style.top.px]="timeEvent.top"
                [style.height.px]="timeEvent.height"
                [style.left.%]="timeEvent.left"
                [style.width.%]="timeEvent.width"
                mwlResizable
                [resizeCursors]="resizeCursors"
                [resizeSnapGrid]="{
                  left: dayColumnWidth,
                  right: dayColumnWidth,
                  top: eventSnapSize || hourSegmentHeight,
                  bottom: eventSnapSize || hourSegmentHeight
                }"
                [validateResize]="validateResize"
                [allowNegativeResizes]="true"
                (resizeStart)="
                  timeEventResizeStarted(dayColumns, timeEvent, $event)
                "
                (resizing)="timeEventResizing(timeEvent, $event)"
                (resizeEnd)="timeEventResizeEnded(timeEvent)"
                mwlDraggable
                dragActiveClass="cal-drag-active"
                [dropData]="{ event: timeEvent.event, calendarId: calendarId }"
                [dragAxis]="{
                  x: timeEvent.event.draggable && timeEventResizes.size === 0,
                  y: timeEvent.event.draggable && timeEventResizes.size === 0
                }"
                [dragSnapGrid]="
                  snapDraggedEvents
                    ? {
                        x: dayColumnWidth,
                        y: eventSnapSize || hourSegmentHeight
                      }
                    : {}
                "
                [touchStartLongPress]="{ delay: 300, delta: 30 }"
                [ghostDragEnabled]="!snapDraggedEvents"
                [ghostElementTemplate]="weekEventTemplate"
                [validateDrag]="validateDrag"
                (dragStart)="dragStarted(dayColumns, event, timeEvent, true)"
                (dragging)="dragMove(timeEvent, $event)"
                (dragEnd)="dragEnded(timeEvent, $event, dayColumnWidth, true)"
              >
                <div
                  class="cal-resize-handle cal-resize-handle-before-start"
                  *ngIf="
                    timeEvent.event?.resizable?.beforeStart &&
                    !timeEvent.startsBeforeDay
                  "
                  mwlResizeHandle
                  [resizeEdges]="{
                    left: true,
                    top: true
                  }"
                ></div>
                <ng-template
                  [ngTemplateOutlet]="weekEventTemplate"
                ></ng-template>
                <ng-template #weekEventTemplate>
                  <mwl-calendar-week-view-event
                    [locale]="locale"
                    [weekEvent]="timeEvent"
                    [tooltipPlacement]="tooltipPlacement"
                    [tooltipTemplate]="tooltipTemplate"
                    [tooltipAppendToBody]="tooltipAppendToBody"
                    [tooltipDisabled]="dragActive || timeEventResizes.size > 0"
                    [tooltipDelay]="tooltipDelay"
                    [customTemplate]="eventTemplate"
                    [eventTitleTemplate]="eventTitleTemplate"
                    [eventActionsTemplate]="eventActionsTemplate"
                    [column]="column"
                    [daysInWeek]="daysInWeek"
                    (eventClicked)="
                      eventClicked.emit({
                        event: timeEvent.event,
                        sourceEvent: $event.sourceEvent
                      })
                    "
                  >
                  </mwl-calendar-week-view-event>
                </ng-template>
                <div
                  class="cal-resize-handle cal-resize-handle-after-end"
                  *ngIf="
                    timeEvent.event?.resizable?.afterEnd &&
                    !timeEvent.endsAfterDay
                  "
                  mwlResizeHandle
                  [resizeEdges]="{
                    right: true,
                    bottom: true
                  }"
                ></div>
              </div>
            </div>

            <div
              *ngFor="
                let hour of column.hours;
                trackBy: trackByHour;
                let odd = odd
              "
              class="cal-hour"
              [class.cal-hour-odd]="odd"
            >
              <mwl-calendar-week-view-hour-segment
                *ngFor="
                  let segment of hour.segments;
                  trackBy: trackByHourSegment
                "
                [style.height.px]="hourSegmentHeight"
                [segment]="segment"
                [segmentHeight]="hourSegmentHeight"
                [locale]="locale"
                [customTemplate]="hourSegmentTemplate"
                [daysInWeek]="daysInWeek"
                (mwlClick)="
                  hourSegmentClicked.emit({
                    date: segment.date,
                    sourceEvent: $event
                  })
                "
                [clickListenerDisabled]="
                  hourSegmentClicked.observers.length === 0
                "
                mwlDroppable
                [dragOverClass]="
                  !dragActive || !snapDraggedEvents ? 'cal-drag-over' : null
                "
                dragActiveClass="cal-drag-active"
                (drop)="eventDropped($event, segment.date, false)"
                (dragEnter)="dateDragEnter(segment.date)"
                [isTimeLabel]="daysInWeek === 1"
              >
              </mwl-calendar-week-view-hour-segment>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: CalendarUtils
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [LOCALE_ID]
      }]
    }, {
      type: DateAdapter
    }, {
      type: ElementRef
    }];
  }, {
    viewDate: [{
      type: Input
    }],
    events: [{
      type: Input
    }],
    excludeDays: [{
      type: Input
    }],
    refresh: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    tooltipPlacement: [{
      type: Input
    }],
    tooltipTemplate: [{
      type: Input
    }],
    tooltipAppendToBody: [{
      type: Input
    }],
    tooltipDelay: [{
      type: Input
    }],
    weekStartsOn: [{
      type: Input
    }],
    headerTemplate: [{
      type: Input
    }],
    eventTemplate: [{
      type: Input
    }],
    eventTitleTemplate: [{
      type: Input
    }],
    eventActionsTemplate: [{
      type: Input
    }],
    precision: [{
      type: Input
    }],
    weekendDays: [{
      type: Input
    }],
    snapDraggedEvents: [{
      type: Input
    }],
    hourSegments: [{
      type: Input
    }],
    hourDuration: [{
      type: Input
    }],
    hourSegmentHeight: [{
      type: Input
    }],
    minimumEventHeight: [{
      type: Input
    }],
    dayStartHour: [{
      type: Input
    }],
    dayStartMinute: [{
      type: Input
    }],
    dayEndHour: [{
      type: Input
    }],
    dayEndMinute: [{
      type: Input
    }],
    hourSegmentTemplate: [{
      type: Input
    }],
    eventSnapSize: [{
      type: Input
    }],
    allDayEventsLabelTemplate: [{
      type: Input
    }],
    daysInWeek: [{
      type: Input
    }],
    currentTimeMarkerTemplate: [{
      type: Input
    }],
    validateEventTimesChanged: [{
      type: Input
    }],
    resizeCursors: [{
      type: Input
    }],
    dayHeaderClicked: [{
      type: Output
    }],
    eventClicked: [{
      type: Output
    }],
    eventTimesChanged: [{
      type: Output
    }],
    beforeViewRender: [{
      type: Output
    }],
    hourSegmentClicked: [{
      type: Output
    }]
  });
})();
var CalendarWeekModule = class {
};
CalendarWeekModule.ɵfac = function CalendarWeekModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CalendarWeekModule)();
};
CalendarWeekModule.ɵmod = ɵɵdefineNgModule({
  type: CalendarWeekModule,
  declarations: [CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent],
  imports: [CommonModule, ResizableModule, DragAndDropModule, CalendarCommonModule],
  exports: [ResizableModule, DragAndDropModule, CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent]
});
CalendarWeekModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, ResizableModule, DragAndDropModule, CalendarCommonModule, ResizableModule, DragAndDropModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarWeekModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ResizableModule, DragAndDropModule, CalendarCommonModule],
      declarations: [CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent],
      exports: [ResizableModule, DragAndDropModule, CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent]
    }]
  }], null, null);
})();
var CalendarDayViewComponent = class {
  constructor() {
    this.events = [];
    this.hourSegments = 2;
    this.hourSegmentHeight = 30;
    this.minimumEventHeight = 30;
    this.dayStartHour = 0;
    this.dayStartMinute = 0;
    this.dayEndHour = 23;
    this.dayEndMinute = 59;
    this.tooltipPlacement = "auto";
    this.tooltipAppendToBody = true;
    this.tooltipDelay = null;
    this.snapDraggedEvents = true;
    this.eventClicked = new EventEmitter();
    this.hourSegmentClicked = new EventEmitter();
    this.eventTimesChanged = new EventEmitter();
    this.beforeViewRender = new EventEmitter();
  }
};
CalendarDayViewComponent.ɵfac = function CalendarDayViewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CalendarDayViewComponent)();
};
CalendarDayViewComponent.ɵcmp = ɵɵdefineComponent({
  type: CalendarDayViewComponent,
  selectors: [["mwl-calendar-day-view"]],
  inputs: {
    viewDate: "viewDate",
    events: "events",
    hourSegments: "hourSegments",
    hourSegmentHeight: "hourSegmentHeight",
    hourDuration: "hourDuration",
    minimumEventHeight: "minimumEventHeight",
    dayStartHour: "dayStartHour",
    dayStartMinute: "dayStartMinute",
    dayEndHour: "dayEndHour",
    dayEndMinute: "dayEndMinute",
    refresh: "refresh",
    locale: "locale",
    eventSnapSize: "eventSnapSize",
    tooltipPlacement: "tooltipPlacement",
    tooltipTemplate: "tooltipTemplate",
    tooltipAppendToBody: "tooltipAppendToBody",
    tooltipDelay: "tooltipDelay",
    hourSegmentTemplate: "hourSegmentTemplate",
    eventTemplate: "eventTemplate",
    eventTitleTemplate: "eventTitleTemplate",
    eventActionsTemplate: "eventActionsTemplate",
    snapDraggedEvents: "snapDraggedEvents",
    allDayEventsLabelTemplate: "allDayEventsLabelTemplate",
    currentTimeMarkerTemplate: "currentTimeMarkerTemplate",
    validateEventTimesChanged: "validateEventTimesChanged",
    resizeCursors: "resizeCursors"
  },
  outputs: {
    eventClicked: "eventClicked",
    hourSegmentClicked: "hourSegmentClicked",
    eventTimesChanged: "eventTimesChanged",
    beforeViewRender: "beforeViewRender"
  },
  decls: 1,
  vars: 27,
  consts: [[1, "cal-day-view", 3, "eventClicked", "hourSegmentClicked", "eventTimesChanged", "beforeViewRender", "daysInWeek", "viewDate", "events", "hourSegments", "hourDuration", "hourSegmentHeight", "minimumEventHeight", "dayStartHour", "dayStartMinute", "dayEndHour", "dayEndMinute", "refresh", "locale", "eventSnapSize", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "resizeCursors", "hourSegmentTemplate", "eventTemplate", "eventTitleTemplate", "eventActionsTemplate", "snapDraggedEvents", "allDayEventsLabelTemplate", "currentTimeMarkerTemplate", "validateEventTimesChanged"]],
  template: function CalendarDayViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "mwl-calendar-week-view", 0);
      ɵɵlistener("eventClicked", function CalendarDayViewComponent_Template_mwl_calendar_week_view_eventClicked_0_listener($event) {
        return ctx.eventClicked.emit($event);
      })("hourSegmentClicked", function CalendarDayViewComponent_Template_mwl_calendar_week_view_hourSegmentClicked_0_listener($event) {
        return ctx.hourSegmentClicked.emit($event);
      })("eventTimesChanged", function CalendarDayViewComponent_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) {
        return ctx.eventTimesChanged.emit($event);
      })("beforeViewRender", function CalendarDayViewComponent_Template_mwl_calendar_week_view_beforeViewRender_0_listener($event) {
        return ctx.beforeViewRender.emit($event);
      });
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("daysInWeek", 1)("viewDate", ctx.viewDate)("events", ctx.events)("hourSegments", ctx.hourSegments)("hourDuration", ctx.hourDuration)("hourSegmentHeight", ctx.hourSegmentHeight)("minimumEventHeight", ctx.minimumEventHeight)("dayStartHour", ctx.dayStartHour)("dayStartMinute", ctx.dayStartMinute)("dayEndHour", ctx.dayEndHour)("dayEndMinute", ctx.dayEndMinute)("refresh", ctx.refresh)("locale", ctx.locale)("eventSnapSize", ctx.eventSnapSize)("tooltipPlacement", ctx.tooltipPlacement)("tooltipTemplate", ctx.tooltipTemplate)("tooltipAppendToBody", ctx.tooltipAppendToBody)("tooltipDelay", ctx.tooltipDelay)("resizeCursors", ctx.resizeCursors)("hourSegmentTemplate", ctx.hourSegmentTemplate)("eventTemplate", ctx.eventTemplate)("eventTitleTemplate", ctx.eventTitleTemplate)("eventActionsTemplate", ctx.eventActionsTemplate)("snapDraggedEvents", ctx.snapDraggedEvents)("allDayEventsLabelTemplate", ctx.allDayEventsLabelTemplate)("currentTimeMarkerTemplate", ctx.currentTimeMarkerTemplate)("validateEventTimesChanged", ctx.validateEventTimesChanged);
    }
  },
  dependencies: [CalendarWeekViewComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarDayViewComponent, [{
    type: Component,
    args: [{
      selector: "mwl-calendar-day-view",
      template: `
    <mwl-calendar-week-view
      class="cal-day-view"
      [daysInWeek]="1"
      [viewDate]="viewDate"
      [events]="events"
      [hourSegments]="hourSegments"
      [hourDuration]="hourDuration"
      [hourSegmentHeight]="hourSegmentHeight"
      [minimumEventHeight]="minimumEventHeight"
      [dayStartHour]="dayStartHour"
      [dayStartMinute]="dayStartMinute"
      [dayEndHour]="dayEndHour"
      [dayEndMinute]="dayEndMinute"
      [refresh]="refresh"
      [locale]="locale"
      [eventSnapSize]="eventSnapSize"
      [tooltipPlacement]="tooltipPlacement"
      [tooltipTemplate]="tooltipTemplate"
      [tooltipAppendToBody]="tooltipAppendToBody"
      [tooltipDelay]="tooltipDelay"
      [resizeCursors]="resizeCursors"
      [hourSegmentTemplate]="hourSegmentTemplate"
      [eventTemplate]="eventTemplate"
      [eventTitleTemplate]="eventTitleTemplate"
      [eventActionsTemplate]="eventActionsTemplate"
      [snapDraggedEvents]="snapDraggedEvents"
      [allDayEventsLabelTemplate]="allDayEventsLabelTemplate"
      [currentTimeMarkerTemplate]="currentTimeMarkerTemplate"
      [validateEventTimesChanged]="validateEventTimesChanged"
      (eventClicked)="eventClicked.emit($event)"
      (hourSegmentClicked)="hourSegmentClicked.emit($event)"
      (eventTimesChanged)="eventTimesChanged.emit($event)"
      (beforeViewRender)="beforeViewRender.emit($event)"
    ></mwl-calendar-week-view>
  `
    }]
  }], null, {
    viewDate: [{
      type: Input
    }],
    events: [{
      type: Input
    }],
    hourSegments: [{
      type: Input
    }],
    hourSegmentHeight: [{
      type: Input
    }],
    hourDuration: [{
      type: Input
    }],
    minimumEventHeight: [{
      type: Input
    }],
    dayStartHour: [{
      type: Input
    }],
    dayStartMinute: [{
      type: Input
    }],
    dayEndHour: [{
      type: Input
    }],
    dayEndMinute: [{
      type: Input
    }],
    refresh: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    eventSnapSize: [{
      type: Input
    }],
    tooltipPlacement: [{
      type: Input
    }],
    tooltipTemplate: [{
      type: Input
    }],
    tooltipAppendToBody: [{
      type: Input
    }],
    tooltipDelay: [{
      type: Input
    }],
    hourSegmentTemplate: [{
      type: Input
    }],
    eventTemplate: [{
      type: Input
    }],
    eventTitleTemplate: [{
      type: Input
    }],
    eventActionsTemplate: [{
      type: Input
    }],
    snapDraggedEvents: [{
      type: Input
    }],
    allDayEventsLabelTemplate: [{
      type: Input
    }],
    currentTimeMarkerTemplate: [{
      type: Input
    }],
    validateEventTimesChanged: [{
      type: Input
    }],
    resizeCursors: [{
      type: Input
    }],
    eventClicked: [{
      type: Output
    }],
    hourSegmentClicked: [{
      type: Output
    }],
    eventTimesChanged: [{
      type: Output
    }],
    beforeViewRender: [{
      type: Output
    }]
  });
})();
var CalendarDayModule = class {
};
CalendarDayModule.ɵfac = function CalendarDayModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CalendarDayModule)();
};
CalendarDayModule.ɵmod = ɵɵdefineNgModule({
  type: CalendarDayModule,
  declarations: [CalendarDayViewComponent],
  imports: [CommonModule, CalendarCommonModule, CalendarWeekModule],
  exports: [CalendarDayViewComponent]
});
CalendarDayModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, CalendarCommonModule, CalendarWeekModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarDayModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, CalendarCommonModule, CalendarWeekModule],
      declarations: [CalendarDayViewComponent],
      exports: [CalendarDayViewComponent]
    }]
  }], null, null);
})();
var CalendarModule = class _CalendarModule {
  static forRoot(dateAdapter, config = {}) {
    return {
      ngModule: _CalendarModule,
      providers: [dateAdapter, config.eventTitleFormatter || CalendarEventTitleFormatter, config.dateFormatter || CalendarDateFormatter, config.utils || CalendarUtils, config.a11y || CalendarA11y]
    };
  }
};
CalendarModule.ɵfac = function CalendarModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CalendarModule)();
};
CalendarModule.ɵmod = ɵɵdefineNgModule({
  type: CalendarModule,
  imports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule],
  exports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule]
});
CalendarModule.ɵinj = ɵɵdefineInjector({
  imports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule, CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarModule, [{
    type: NgModule,
    args: [{
      imports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule],
      exports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule]
    }]
  }], null, null);
})();
export {
  CalendarA11y,
  CalendarAngularDateFormatter,
  CalendarCommonModule,
  CalendarDateFormatter,
  CalendarDayModule,
  CalendarDayViewComponent,
  CalendarEventTimesChangedEventType,
  CalendarEventTitleFormatter,
  CalendarModule,
  CalendarMomentDateFormatter,
  CalendarMonthModule,
  CalendarMonthViewComponent,
  CalendarNativeDateFormatter,
  CalendarUtils,
  CalendarView,
  CalendarWeekModule,
  CalendarWeekViewComponent,
  DAYS_OF_WEEK,
  DateAdapter,
  MOMENT,
  collapseAnimation,
  getWeekViewPeriod,
  CalendarA11yPipe as ɵCalendarA11yPipe,
  CalendarDatePipe as ɵCalendarDatePipe,
  CalendarEventActionsComponent as ɵCalendarEventActionsComponent,
  CalendarEventTitleComponent as ɵCalendarEventTitleComponent,
  CalendarEventTitlePipe as ɵCalendarEventTitlePipe,
  CalendarMonthCellComponent as ɵCalendarMonthCellComponent,
  CalendarMonthViewHeaderComponent as ɵCalendarMonthViewHeaderComponent,
  CalendarNextViewDirective as ɵCalendarNextViewDirective,
  CalendarOpenDayEventsComponent as ɵCalendarOpenDayEventsComponent,
  CalendarPreviousViewDirective as ɵCalendarPreviousViewDirective,
  CalendarTodayDirective as ɵCalendarTodayDirective,
  CalendarTooltipDirective as ɵCalendarTooltipDirective,
  CalendarTooltipWindowComponent as ɵCalendarTooltipWindowComponent,
  CalendarWeekViewCurrentTimeMarkerComponent as ɵCalendarWeekViewCurrentTimeMarkerComponent,
  CalendarWeekViewEventComponent as ɵCalendarWeekViewEventComponent,
  CalendarWeekViewHeaderComponent as ɵCalendarWeekViewHeaderComponent,
  CalendarWeekViewHourSegmentComponent as ɵCalendarWeekViewHourSegmentComponent,
  ClickDirective as ɵClickDirective,
  KeydownEnterDirective as ɵKeydownEnterDirective
};
//# sourceMappingURL=angular-calendar.js.map
