{
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": { "text": "Cheapest European cities" },
    "data": {
    "url":
    "https://raw.githubusercontent.com/JiazhouLiu/FIT3179/main/VegaLite/city_daily_cost.csv"
    },
    "mark": "bar",
    "encoding": {
    "x": { "field": "daily_cost", "type": "quantitative" },
    "y": { "field": "city", "type": "nominal" }
    }
    }
    