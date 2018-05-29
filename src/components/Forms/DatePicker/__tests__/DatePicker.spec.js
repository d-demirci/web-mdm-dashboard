import days from "../days"
import months from "../months"

describe('DatePicker', () => {
    it('should get the days of February', () => {
        expect(JSON.parse(JSON.stringify(days(2018, 'February')))).toEqual(JSON.parse(JSON.stringify([{"_owner": null, "_store": {}, "key": "day1", "props": {"children": 1, "value": 1}, "ref": null,"type": "option"}, {"_owner": null, "_store": {}, "key": "day2", "props": {"children": 2, "value": 2}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day3", "props": {"children": 3, "value": 3}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day4", "props": {"children": 4, "value": 4}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day5", "props": {"children": 5, "value": 5}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day6", "props": {"children": 6, "value": 6}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day7", "props": {"children": 7, "value": 7}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day8", "props": {"children": 8, "value": 8}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day9", "props": {"children": 9, "value": 9}, "ref": null, "type":"option"}, {"_owner": null, "_store": {}, "key": "day10", "props": {"children": 10, "value": 10}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day11", "props": {"children": 11, "value": 11}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day12", "props": {"children": 12, "value": 12}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day13", "props": {"children": 13, "value": 13}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day14", "props": {"children": 14, "value": 14}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day15", "props": {"children": 15, "value": 15}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day16", "props": {"children": 16, "value": 16}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day17", "props": {"children": 17, "value": 17}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day18", "props": {"children": 18, "value": 18}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day19", "props": {"children": 19, "value": 19}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day20","props": {"children": 20, "value": 20}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day21", "props": {"children": 21, "value": 21}, "ref": null, "type": "option"}, {"_owner": null,"_store": {}, "key": "day22", "props": {"children": 22, "value": 22}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day23", "props": {"children": 23, "value": 23}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day24", "props": {"children": 24, "value": 24}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day25", "props": {"children": 25, "value": 25}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day26", "props": {"children": 26, "value": 26}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day27", "props": {"children": 27, "value": 27}, "ref": null, "type": "option"}, {"_owner": null, "_store": {},"key": "day28", "props": {"children": 28, "value": 28}, "ref": null, "type": "option"}])))
    })
    it('should get the days of February in a leap year', () => {
        expect(JSON.parse(JSON.stringify(days(2016, 'February')))).toEqual(JSON.parse(JSON.stringify([{"_owner": null, "_store": {}, "key": "day1", "props": {"children": 1, "value": 1}, "ref": null,"type": "option"}, {"_owner": null, "_store": {}, "key": "day2", "props": {"children": 2, "value": 2}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day3", "props": {"children": 3, "value": 3}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day4", "props": {"children": 4, "value": 4}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day5", "props": {"children": 5, "value": 5}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day6", "props": {"children": 6, "value": 6}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day7", "props": {"children": 7, "value": 7}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day8", "props": {"children": 8, "value": 8}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day9", "props": {"children": 9, "value": 9}, "ref": null, "type":"option"}, {"_owner": null, "_store": {}, "key": "day10", "props": {"children": 10, "value": 10}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day11", "props": {"children": 11, "value": 11}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day12", "props": {"children": 12, "value": 12}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day13", "props": {"children": 13, "value": 13}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day14", "props": {"children": 14, "value": 14}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day15", "props": {"children": 15, "value": 15}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day16", "props": {"children": 16, "value": 16}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day17", "props": {"children": 17, "value": 17}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day18", "props": {"children": 18, "value": 18}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day19", "props": {"children": 19, "value": 19}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day20","props": {"children": 20, "value": 20}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day21", "props": {"children": 21, "value": 21}, "ref": null, "type": "option"}, {"_owner": null,"_store": {}, "key": "day22", "props": {"children": 22, "value": 22}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day23", "props": {"children": 23, "value": 23}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day24", "props": {"children": 24, "value": 24}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day25", "props": {"children": 25, "value": 25}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day26", "props": {"children": 26, "value": 26}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day27", "props": {"children": 27, "value": 27}, "ref": null, "type": "option"}, {"_owner": null, "_store": {},"key": "day28", "props": {"children": 28, "value": 28}, "ref": null, "type": "option"}, {"_owner": null, "_store": {}, "key": "day29", "props": {"children": 29, "value": 29}, "ref": null, "type": "option"}])))
    })
})