"use strict";
exports.id = 643;
exports.ids = [643];
exports.modules = {

/***/ 643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const initIsotope = ()=>{
    var grid = document.querySelectorAll(".gallery");
    var iso;
    if (grid.length >= 1) {
        grid.forEach((item)=>{
            iso = new Isotope(item, {
                itemSelector: ".items"
            });
        });
    }
    var gridMons = document.querySelectorAll(".gallery-mons");
    if (gridMons.length >= 1) {
        gridMons.forEach((item)=>{
            iso = new Isotope(item, {
                itemSelector: ".items",
                masonry: {
                    columnWidth: ".width2"
                }
            });
        });
    }
    var filtersElem = document.querySelector(".filtering");
    if (filtersElem) {
        filtersElem.addEventListener("click", function(event) {
            if (!matchesSelector(event.target, "span")) {
                return;
            }
            var filterValue = event.target.getAttribute("data-filter");
            filterValue = filterValue;
            iso.arrange({
                filter: filterValue
            });
        });
        var buttonGroups = document.querySelectorAll(".filtering");
        for(var i = 0, len = buttonGroups.length; i < len; i++){
            var buttonGroup = buttonGroups[i];
            radioButtonGroup(buttonGroup);
        }
        function radioButtonGroup(buttonGroup) {
            buttonGroup.addEventListener("click", function(event) {
                if (!matchesSelector(event.target, "span")) {
                    return;
                }
                buttonGroup.querySelector(".active").classList.remove("active");
                event.target.classList.add("active");
            });
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initIsotope);


/***/ })

};
;