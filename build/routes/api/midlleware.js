"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var checkImages_1 = require("./checkImages");
var theInfo = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var filename, width, height;
    return __generator(this, function (_a) {
        filename = req.query.filename;
        width = parseInt(req.query.width);
        height = parseInt(req.query.height);
        // check if there is a filename
        if (!filename) {
            return [2 /*return*/, res.send("there is no filename please rewrite it")];
        }
        //check the width and height
        if (width < 1 || height < 1) {
            return [2 /*return*/, res.send("please enter numbers greater than 1")];
        }
        //check if the user doesn't write width and the height
        if (!width && !height) {
            return [2 /*return*/, res.send("please enter the width and the height")];
        }
        //check if the user doesn't write width
        if (!width) {
            return [2 /*return*/, res.send("please enter the width")];
        }
        //check if the user doesn't write height
        if (!height) {
            return [2 /*return*/, res.send("please enter the height")];
        }
        if (width > 3000 || height > 3000) {
            return [2 /*return*/, res.send("this numbers are so big please enter number less than 3000")];
        }
        //check if the image doesn't exict
        if (!(0, checkImages_1.theImageExict)(filename)) {
            return [2 /*return*/, res.send("the image doesn't exict please choose one of this images : image1/image2/image3/image4/image5")];
        }
        // cashing: check if the image is already exict in the thump folder
        if ((0, checkImages_1.thumpImage)(req.query)) {
            return [2 /*return*/, res.sendFile("thump/".concat(filename, "-").concat(width, "-").concat(height, ".jpg"), { root: 'images', })];
        }
        next();
        return [2 /*return*/];
    });
}); };
exports.default = theInfo;
