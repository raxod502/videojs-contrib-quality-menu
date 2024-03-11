/*! @name videojs-contrib-quality-menu @version 1.0.0 @license Apache-2.0 */
(function (QUnit, sinon, videojs) {
	'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var QUnit__default = /*#__PURE__*/_interopDefaultLegacy(QUnit);
	var sinon__default = /*#__PURE__*/_interopDefaultLegacy(sinon);
	var videojs__default = /*#__PURE__*/_interopDefaultLegacy(videojs);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getAugmentedNamespace(n) {
		if (n.__esModule) return n;
		var a = Object.defineProperty({}, '__esModule', {value: true});
		Object.keys(n).forEach(function (k) {
			var d = Object.getOwnPropertyDescriptor(n, k);
			Object.defineProperty(a, k, d.get ? d : {
				enumerable: true,
				get: function () {
					return n[k];
				}
			});
		});
		return a;
	}

	var _nodeResolve_empty = {};

	var _nodeResolve_empty$1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': _nodeResolve_empty
	});

	var require$$0 = /*@__PURE__*/getAugmentedNamespace(_nodeResolve_empty$1);

	var topLevel = typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof window !== 'undefined' ? window : {};
	var minDoc = require$$0;
	var doccy;
	if (typeof document !== 'undefined') {
	  doccy = document;
	} else {
	  doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];
	  if (!doccy) {
	    doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
	  }
	}
	var document_1 = doccy;

	function cov_oyf8pqoqq() {
	  var path = "/home/invidious/files/videojs-contrib-quality-menu/src/quality-menu-item.js";
	  var hash = "4e5ed13bfd969a611a8aa76023a76872bfa69b3c";
	  var global = new Function("return this")();
	  var gcv = "__coverage__";
	  var coverageData = {
	    path: "/home/invidious/files/videojs-contrib-quality-menu/src/quality-menu-item.js",
	    statementMap: {
	      "0": {
	        start: {
	          line: 6,
	          column: 17
	        },
	        end: {
	          line: 6,
	          column: 49
	        }
	      },
	      "1": {
	        start: {
	          line: 7,
	          column: 12
	        },
	        end: {
	          line: 7,
	          column: 34
	        }
	      },
	      "2": {
	        start: {
	          line: 42,
	          column: 27
	        },
	        end: {
	          line: 42,
	          column: 43
	        }
	      },
	      "3": {
	        start: {
	          line: 49,
	          column: 4
	        },
	        end: {
	          line: 49,
	          column: 38
	        }
	      },
	      "4": {
	        start: {
	          line: 51,
	          column: 4
	        },
	        end: {
	          line: 51,
	          column: 27
	        }
	      },
	      "5": {
	        start: {
	          line: 53,
	          column: 26
	        },
	        end: {
	          line: 53,
	          column: 48
	        }
	      },
	      "6": {
	        start: {
	          line: 55,
	          column: 4
	        },
	        end: {
	          line: 55,
	          column: 34
	        }
	      },
	      "7": {
	        start: {
	          line: 56,
	          column: 4
	        },
	        end: {
	          line: 56,
	          column: 36
	        }
	      },
	      "8": {
	        start: {
	          line: 57,
	          column: 4
	        },
	        end: {
	          line: 57,
	          column: 67
	        }
	      },
	      "9": {
	        start: {
	          line: 59,
	          column: 4
	        },
	        end: {
	          line: 59,
	          column: 42
	        }
	      },
	      "10": {
	        start: {
	          line: 61,
	          column: 4
	        },
	        end: {
	          line: 61,
	          column: 63
	        }
	      },
	      "11": {
	        start: {
	          line: 63,
	          column: 4
	        },
	        end: {
	          line: 65,
	          column: 7
	        }
	      },
	      "12": {
	        start: {
	          line: 64,
	          column: 6
	        },
	        end: {
	          line: 64,
	          column: 66
	        }
	      },
	      "13": {
	        start: {
	          line: 82,
	          column: 15
	        },
	        end: {
	          line: 82,
	          column: 49
	        }
	      },
	      "14": {
	        start: {
	          line: 84,
	          column: 21
	        },
	        end: {
	          line: 87,
	          column: 6
	        }
	      },
	      "15": {
	        start: {
	          line: 89,
	          column: 4
	        },
	        end: {
	          line: 89,
	          column: 30
	        }
	      },
	      "16": {
	        start: {
	          line: 91,
	          column: 4
	        },
	        end: {
	          line: 93,
	          column: 5
	        }
	      },
	      "17": {
	        start: {
	          line: 92,
	          column: 6
	        },
	        end: {
	          line: 92,
	          column: 31
	        }
	      },
	      "18": {
	        start: {
	          line: 95,
	          column: 4
	        },
	        end: {
	          line: 95,
	          column: 14
	        }
	      },
	      "19": {
	        start: {
	          line: 104,
	          column: 4
	        },
	        end: {
	          line: 104,
	          column: 27
	        }
	      },
	      "20": {
	        start: {
	          line: 106,
	          column: 26
	        },
	        end: {
	          line: 106,
	          column: 55
	        }
	      },
	      "21": {
	        start: {
	          line: 107,
	          column: 30
	        },
	        end: {
	          line: 107,
	          column: 57
	        }
	      },
	      "22": {
	        start: {
	          line: 109,
	          column: 4
	        },
	        end: {
	          line: 116,
	          column: 5
	        }
	      },
	      "23": {
	        start: {
	          line: 109,
	          column: 17
	        },
	        end: {
	          line: 109,
	          column: 18
	        }
	      },
	      "24": {
	        start: {
	          line: 109,
	          column: 24
	        },
	        end: {
	          line: 109,
	          column: 44
	        }
	      },
	      "25": {
	        start: {
	          line: 113,
	          column: 6
	        },
	        end: {
	          line: 115,
	          column: 7
	        }
	      },
	      "26": {
	        start: {
	          line: 114,
	          column: 8
	        },
	        end: {
	          line: 114,
	          column: 41
	        }
	      },
	      "27": {
	        start: {
	          line: 118,
	          column: 4
	        },
	        end: {
	          line: 120,
	          column: 5
	        }
	      },
	      "28": {
	        start: {
	          line: 118,
	          column: 17
	        },
	        end: {
	          line: 118,
	          column: 18
	        }
	      },
	      "29": {
	        start: {
	          line: 118,
	          column: 24
	        },
	        end: {
	          line: 118,
	          column: 43
	        }
	      },
	      "30": {
	        start: {
	          line: 119,
	          column: 6
	        },
	        end: {
	          line: 119,
	          column: 52
	        }
	      },
	      "31": {
	        start: {
	          line: 124,
	          column: 4
	        },
	        end: {
	          line: 126,
	          column: 5
	        }
	      },
	      "32": {
	        start: {
	          line: 125,
	          column: 6
	        },
	        end: {
	          line: 125,
	          column: 55
	        }
	      },
	      "33": {
	        start: {
	          line: 135,
	          column: 26
	        },
	        end: {
	          line: 135,
	          column: 55
	        }
	      },
	      "34": {
	        start: {
	          line: 136,
	          column: 19
	        },
	        end: {
	          line: 136,
	          column: 73
	        }
	      },
	      "35": {
	        start: {
	          line: 138,
	          column: 4
	        },
	        end: {
	          line: 138,
	          column: 26
	        }
	      },
	      "36": {
	        start: {
	          line: 149,
	          column: 4
	        },
	        end: {
	          line: 151,
	          column: 5
	        }
	      },
	      "37": {
	        start: {
	          line: 150,
	          column: 6
	        },
	        end: {
	          line: 150,
	          column: 13
	        }
	      },
	      "38": {
	        start: {
	          line: 153,
	          column: 4
	        },
	        end: {
	          line: 178,
	          column: 5
	        }
	      },
	      "39": {
	        start: {
	          line: 154,
	          column: 6
	        },
	        end: {
	          line: 154,
	          column: 36
	        }
	      },
	      "40": {
	        start: {
	          line: 155,
	          column: 6
	        },
	        end: {
	          line: 155,
	          column: 52
	        }
	      },
	      "41": {
	        start: {
	          line: 158,
	          column: 6
	        },
	        end: {
	          line: 158,
	          column: 97
	        }
	      },
	      "42": {
	        start: {
	          line: 160,
	          column: 25
	        },
	        end: {
	          line: 160,
	          column: 49
	        }
	      },
	      "43": {
	        start: {
	          line: 161,
	          column: 25
	        },
	        end: {
	          line: 161,
	          column: 65
	        }
	      },
	      "44": {
	        start: {
	          line: 163,
	          column: 6
	        },
	        end: {
	          line: 171,
	          column: 7
	        }
	      },
	      "45": {
	        start: {
	          line: 168,
	          column: 8
	        },
	        end: {
	          line: 168,
	          column: 63
	        }
	      },
	      "46": {
	        start: {
	          line: 170,
	          column: 8
	        },
	        end: {
	          line: 170,
	          column: 66
	        }
	      },
	      "47": {
	        start: {
	          line: 173,
	          column: 6
	        },
	        end: {
	          line: 173,
	          column: 39
	        }
	      },
	      "48": {
	        start: {
	          line: 174,
	          column: 6
	        },
	        end: {
	          line: 174,
	          column: 53
	        }
	      },
	      "49": {
	        start: {
	          line: 177,
	          column: 6
	        },
	        end: {
	          line: 177,
	          column: 50
	        }
	      },
	      "50": {
	        start: {
	          line: 187,
	          column: 26
	        },
	        end: {
	          line: 187,
	          column: 55
	        }
	      },
	      "51": {
	        start: {
	          line: 188,
	          column: 23
	        },
	        end: {
	          line: 188,
	          column: 47
	        }
	      },
	      "52": {
	        start: {
	          line: 189,
	          column: 22
	        },
	        end: {
	          line: 189,
	          column: 68
	        }
	      },
	      "53": {
	        start: {
	          line: 191,
	          column: 4
	        },
	        end: {
	          line: 197,
	          column: 5
	        }
	      },
	      "54": {
	        start: {
	          line: 191,
	          column: 17
	        },
	        end: {
	          line: 191,
	          column: 18
	        }
	      },
	      "55": {
	        start: {
	          line: 191,
	          column: 24
	        },
	        end: {
	          line: 191,
	          column: 40
	        }
	      },
	      "56": {
	        start: {
	          line: 192,
	          column: 19
	        },
	        end: {
	          line: 192,
	          column: 31
	        }
	      },
	      "57": {
	        start: {
	          line: 193,
	          column: 21
	        },
	        end: {
	          line: 193,
	          column: 75
	        }
	      },
	      "58": {
	        start: {
	          line: 195,
	          column: 6
	        },
	        end: {
	          line: 195,
	          column: 37
	        }
	      },
	      "59": {
	        start: {
	          line: 196,
	          column: 6
	        },
	        end: {
	          line: 196,
	          column: 28
	        }
	      }
	    },
	    fnMap: {
	      "0": {
	        name: "(anonymous_0)",
	        decl: {
	          start: {
	            line: 41,
	            column: 2
	          },
	          end: {
	            line: 41,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 41,
	            column: 36
	          },
	          end: {
	            line: 66,
	            column: 3
	          }
	        },
	        line: 41
	      },
	      "1": {
	        name: "(anonymous_1)",
	        decl: {
	          start: {
	            line: 63,
	            column: 23
	          },
	          end: {
	            line: 63,
	            column: 24
	          }
	        },
	        loc: {
	          start: {
	            line: 63,
	            column: 29
	          },
	          end: {
	            line: 65,
	            column: 5
	          }
	        },
	        line: 63
	      },
	      "2": {
	        name: "(anonymous_2)",
	        decl: {
	          start: {
	            line: 81,
	            column: 2
	          },
	          end: {
	            line: 81,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 81,
	            column: 31
	          },
	          end: {
	            line: 96,
	            column: 3
	          }
	        },
	        line: 81
	      },
	      "3": {
	        name: "(anonymous_3)",
	        decl: {
	          start: {
	            line: 103,
	            column: 2
	          },
	          end: {
	            line: 103,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 103,
	            column: 16
	          },
	          end: {
	            line: 127,
	            column: 3
	          }
	        },
	        line: 103
	      },
	      "4": {
	        name: "(anonymous_4)",
	        decl: {
	          start: {
	            line: 134,
	            column: 2
	          },
	          end: {
	            line: 134,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 134,
	            column: 24
	          },
	          end: {
	            line: 139,
	            column: 3
	          }
	        },
	        line: 134
	      },
	      "5": {
	        name: "(anonymous_5)",
	        decl: {
	          start: {
	            line: 148,
	            column: 2
	          },
	          end: {
	            line: 148,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 148,
	            column: 19
	          },
	          end: {
	            line: 179,
	            column: 3
	          }
	        },
	        line: 148
	      },
	      "6": {
	        name: "(anonymous_6)",
	        decl: {
	          start: {
	            line: 186,
	            column: 2
	          },
	          end: {
	            line: 186,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 186,
	            column: 20
	          },
	          end: {
	            line: 198,
	            column: 3
	          }
	        },
	        line: 186
	      }
	    },
	    branchMap: {
	      "0": {
	        loc: {
	          start: {
	            line: 7,
	            column: 12
	          },
	          end: {
	            line: 7,
	            column: 34
	          }
	        },
	        type: "binary-expr",
	        locations: [{
	          start: {
	            line: 7,
	            column: 12
	          },
	          end: {
	            line: 7,
	            column: 23
	          }
	        }, {
	          start: {
	            line: 7,
	            column: 27
	          },
	          end: {
	            line: 7,
	            column: 34
	          }
	        }],
	        line: 7
	      },
	      "1": {
	        loc: {
	          start: {
	            line: 41,
	            column: 22
	          },
	          end: {
	            line: 41,
	            column: 34
	          }
	        },
	        type: "default-arg",
	        locations: [{
	          start: {
	            line: 41,
	            column: 32
	          },
	          end: {
	            line: 41,
	            column: 34
	          }
	        }],
	        line: 41
	      },
	      "2": {
	        loc: {
	          start: {
	            line: 86,
	            column: 31
	          },
	          end: {
	            line: 86,
	            column: 59
	          }
	        },
	        type: "binary-expr",
	        locations: [{
	          start: {
	            line: 86,
	            column: 31
	          },
	          end: {
	            line: 86,
	            column: 53
	          }
	        }, {
	          start: {
	            line: 86,
	            column: 57
	          },
	          end: {
	            line: 86,
	            column: 59
	          }
	        }],
	        line: 86
	      },
	      "3": {
	        loc: {
	          start: {
	            line: 91,
	            column: 4
	          },
	          end: {
	            line: 93,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 91,
	            column: 4
	          },
	          end: {
	            line: 93,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 91,
	            column: 4
	          },
	          end: {
	            line: 93,
	            column: 5
	          }
	        }],
	        line: 91
	      },
	      "4": {
	        loc: {
	          start: {
	            line: 113,
	            column: 6
	          },
	          end: {
	            line: 115,
	            column: 7
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 113,
	            column: 6
	          },
	          end: {
	            line: 115,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 113,
	            column: 6
	          },
	          end: {
	            line: 115,
	            column: 7
	          }
	        }],
	        line: 113
	      },
	      "5": {
	        loc: {
	          start: {
	            line: 124,
	            column: 4
	          },
	          end: {
	            line: 126,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 124,
	            column: 4
	          },
	          end: {
	            line: 126,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 124,
	            column: 4
	          },
	          end: {
	            line: 126,
	            column: 5
	          }
	        }],
	        line: 124
	      },
	      "6": {
	        loc: {
	          start: {
	            line: 124,
	            column: 8
	          },
	          end: {
	            line: 124,
	            column: 82
	          }
	        },
	        type: "binary-expr",
	        locations: [{
	          start: {
	            line: 124,
	            column: 8
	          },
	          end: {
	            line: 124,
	            column: 32
	          }
	        }, {
	          start: {
	            line: 124,
	            column: 36
	          },
	          end: {
	            line: 124,
	            column: 82
	          }
	        }],
	        line: 124
	      },
	      "7": {
	        loc: {
	          start: {
	            line: 149,
	            column: 4
	          },
	          end: {
	            line: 151,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 149,
	            column: 4
	          },
	          end: {
	            line: 151,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 149,
	            column: 4
	          },
	          end: {
	            line: 151,
	            column: 5
	          }
	        }],
	        line: 149
	      },
	      "8": {
	        loc: {
	          start: {
	            line: 153,
	            column: 4
	          },
	          end: {
	            line: 178,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 153,
	            column: 4
	          },
	          end: {
	            line: 178,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 153,
	            column: 4
	          },
	          end: {
	            line: 178,
	            column: 5
	          }
	        }],
	        line: 153
	      },
	      "9": {
	        loc: {
	          start: {
	            line: 163,
	            column: 6
	          },
	          end: {
	            line: 171,
	            column: 7
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 163,
	            column: 6
	          },
	          end: {
	            line: 171,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 163,
	            column: 6
	          },
	          end: {
	            line: 171,
	            column: 7
	          }
	        }],
	        line: 163
	      }
	    },
	    s: {
	      "0": 0,
	      "1": 0,
	      "2": 0,
	      "3": 0,
	      "4": 0,
	      "5": 0,
	      "6": 0,
	      "7": 0,
	      "8": 0,
	      "9": 0,
	      "10": 0,
	      "11": 0,
	      "12": 0,
	      "13": 0,
	      "14": 0,
	      "15": 0,
	      "16": 0,
	      "17": 0,
	      "18": 0,
	      "19": 0,
	      "20": 0,
	      "21": 0,
	      "22": 0,
	      "23": 0,
	      "24": 0,
	      "25": 0,
	      "26": 0,
	      "27": 0,
	      "28": 0,
	      "29": 0,
	      "30": 0,
	      "31": 0,
	      "32": 0,
	      "33": 0,
	      "34": 0,
	      "35": 0,
	      "36": 0,
	      "37": 0,
	      "38": 0,
	      "39": 0,
	      "40": 0,
	      "41": 0,
	      "42": 0,
	      "43": 0,
	      "44": 0,
	      "45": 0,
	      "46": 0,
	      "47": 0,
	      "48": 0,
	      "49": 0,
	      "50": 0,
	      "51": 0,
	      "52": 0,
	      "53": 0,
	      "54": 0,
	      "55": 0,
	      "56": 0,
	      "57": 0,
	      "58": 0,
	      "59": 0
	    },
	    f: {
	      "0": 0,
	      "1": 0,
	      "2": 0,
	      "3": 0,
	      "4": 0,
	      "5": 0,
	      "6": 0
	    },
	    b: {
	      "0": [0, 0],
	      "1": [0],
	      "2": [0, 0],
	      "3": [0, 0],
	      "4": [0, 0],
	      "5": [0, 0],
	      "6": [0, 0],
	      "7": [0, 0],
	      "8": [0, 0],
	      "9": [0, 0]
	    },
	    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
	    hash: "4e5ed13bfd969a611a8aa76023a76872bfa69b3c"
	  };
	  var coverage = global[gcv] || (global[gcv] = {});
	  if (!coverage[path] || coverage[path].hash !== hash) {
	    coverage[path] = coverageData;
	  }
	  var actualCoverage = coverage[path];
	  {
	    // @ts-ignore
	    cov_oyf8pqoqq = function () {
	      return actualCoverage;
	    };
	  }
	  return actualCoverage;
	}
	cov_oyf8pqoqq(); /**
	                 * @file quality-menu-item.js
	                 */
	const MenuItem = (cov_oyf8pqoqq().s[0]++, videojs__default["default"].getComponent('MenuItem'));
	const dom = (cov_oyf8pqoqq().s[1]++, (cov_oyf8pqoqq().b[0][0]++, videojs__default["default"].dom) || (cov_oyf8pqoqq().b[0][1]++, videojs__default["default"])); /**
	                                                                                                                        * The quality level menu quality
	                                                                                                                        *
	                                                                                                                        * @extends MenuItem
	                                                                                                                        * @class QualityMenuItem
	                                                                                                                        */
	class QualityMenuItem extends MenuItem {
	  /**
	  * Creates a QualityMenuItem
	  *
	  * @param {Player|Object} player
	  *        Main Player
	  * @param {Object} [options]
	  *        Options for menu item
	  * @param {number[]} options.levels
	  *        Array of indices mapping to QualityLevels in the QualityLevelList for
	  *        this menu item
	  * @param {string} options.label
	  *        Label for this menu item
	  * @param {string} options.controlText
	  *        control text for this menu item
	  * @param {string} options.subLabel
	  *        sub label text for this menu item
	  * @param {boolean} options.active
	  *        True if the QualityLevelList.selectedIndex is contained in the levels list
	  *        for this menu
	  * @param {boolean} options.selected
	  *        True if this menu item is the selected item in the UI
	  * @param {boolean} options.selectable
	  *        True if this menu item should be selectable in the UI
	  */
	  constructor(player, options = (cov_oyf8pqoqq().b[1][0]++, {})) {
	    cov_oyf8pqoqq().f[0]++;
	    const selectedOption = (cov_oyf8pqoqq().s[2]++, options.selected); // We need to change options.seleted to options.active because the call to super
	    // causes us to run MenuItem's constructor which calls this.selected(options.selected)
	    // However, for QualityMenuItem, we change the meaning of the parameter to
	    // this.selected() to be what we mean for 'active' which is True if the
	    // QualityLevelList.selectedIndex is contained in the levels list for this menu
	    cov_oyf8pqoqq().s[3]++;
	    options.selected = options.active;
	    cov_oyf8pqoqq().s[4]++;
	    super(player, options);
	    const qualityLevels = (cov_oyf8pqoqq().s[5]++, player.qualityLevels());
	    cov_oyf8pqoqq().s[6]++;
	    this.levels_ = options.levels;
	    cov_oyf8pqoqq().s[7]++;
	    this.selected_ = selectedOption;
	    cov_oyf8pqoqq().s[8]++;
	    this.handleQualityChange = this.handleQualityChange.bind(this);
	    cov_oyf8pqoqq().s[9]++;
	    this.controlText(options.controlText);
	    cov_oyf8pqoqq().s[10]++;
	    this.on(qualityLevels, 'change', this.handleQualityChange);
	    cov_oyf8pqoqq().s[11]++;
	    this.on('dispose', () => {
	      cov_oyf8pqoqq().f[1]++;
	      cov_oyf8pqoqq().s[12]++;
	      this.off(qualityLevels, 'change', this.handleQualityChange);
	    });
	  } /**
	    * Create the component's DOM element
	    *
	    * @param {string} [type]
	    *        Element type
	    * @param {Object} [props]
	    *        Element properties
	    * @param {Object} [attrs]
	    *        An object of attributes that should be set on the element
	    * @return {Element}
	    *         The DOM element
	    * @method createEl
	    */
	  createEl(type, props, attrs) {
	    cov_oyf8pqoqq().f[2]++;
	    const el = (cov_oyf8pqoqq().s[13]++, super.createEl(type, props, attrs));
	    const subLabel = (cov_oyf8pqoqq().s[14]++, dom.createEl('span', {
	      className: 'vjs-quality-menu-item-sub-label',
	      innerHTML: this.localize((cov_oyf8pqoqq().b[2][0]++, this.options_.subLabel) || (cov_oyf8pqoqq().b[2][1]++, ''))
	    }));
	    cov_oyf8pqoqq().s[15]++;
	    this.subLabel_ = subLabel;
	    cov_oyf8pqoqq().s[16]++;
	    if (el) {
	      cov_oyf8pqoqq().b[3][0]++;
	      cov_oyf8pqoqq().s[17]++;
	      el.appendChild(subLabel);
	    } else {
	      cov_oyf8pqoqq().b[3][1]++;
	    }
	    cov_oyf8pqoqq().s[18]++;
	    return el;
	  } /**
	    * Handle a click on the menu item, and set it to selected
	    *
	    * @method handleClick
	    */
	  handleClick() {
	    cov_oyf8pqoqq().f[3]++;
	    cov_oyf8pqoqq().s[19]++;
	    this.updateSiblings_();
	    const qualityLevels = (cov_oyf8pqoqq().s[20]++, this.player().qualityLevels());
	    const currentlySelected = (cov_oyf8pqoqq().s[21]++, qualityLevels.selectedIndex);
	    cov_oyf8pqoqq().s[22]++;
	    for (let i = (cov_oyf8pqoqq().s[23]++, 0), l = (cov_oyf8pqoqq().s[24]++, qualityLevels.length); i < l; i++) {
	      cov_oyf8pqoqq().s[25]++; // do not disable the currently selected quality until the end to prevent
	      // playlist selection from selecting something new until we've enabled/disabled
	      // all the quality levels
	      if (i !== currentlySelected) {
	        cov_oyf8pqoqq().b[4][0]++;
	        cov_oyf8pqoqq().s[26]++;
	        qualityLevels[i].enabled = false;
	      } else {
	        cov_oyf8pqoqq().b[4][1]++;
	      }
	    }
	    cov_oyf8pqoqq().s[27]++;
	    for (let i = (cov_oyf8pqoqq().s[28]++, 0), l = (cov_oyf8pqoqq().s[29]++, this.levels_.length); i < l; i++) {
	      cov_oyf8pqoqq().s[30]++;
	      qualityLevels[this.levels_[i]].enabled = true;
	    } // Disable the quality level that was selected before the click if it is not
	    // associated with this menu item
	    cov_oyf8pqoqq().s[31]++;
	    if ((cov_oyf8pqoqq().b[6][0]++, currentlySelected !== -1) && (cov_oyf8pqoqq().b[6][1]++, this.levels_.indexOf(currentlySelected) === -1)) {
	      cov_oyf8pqoqq().b[5][0]++;
	      cov_oyf8pqoqq().s[32]++;
	      qualityLevels[currentlySelected].enabled = false;
	    } else {
	      cov_oyf8pqoqq().b[5][1]++;
	    }
	  } /**
	    * Handle a change event from the QualityLevelList
	    *
	    * @method handleQualityChange
	    */
	  handleQualityChange() {
	    cov_oyf8pqoqq().f[4]++;
	    const qualityLevels = (cov_oyf8pqoqq().s[33]++, this.player().qualityLevels());
	    const active = (cov_oyf8pqoqq().s[34]++, this.levels_.indexOf(qualityLevels.selectedIndex) > -1);
	    cov_oyf8pqoqq().s[35]++;
	    this.selected(active);
	  } /**
	    * Set this menu item as selected or not
	    *
	    * @param  {boolean} active
	    *         True if the active quality level is controlled by this item
	    * @method selected
	    */
	  selected(active) {
	    cov_oyf8pqoqq().f[5]++;
	    cov_oyf8pqoqq().s[36]++;
	    if (!this.selectable) {
	      cov_oyf8pqoqq().b[7][0]++;
	      cov_oyf8pqoqq().s[37]++;
	      return;
	    } else {
	      cov_oyf8pqoqq().b[7][1]++;
	    }
	    cov_oyf8pqoqq().s[38]++;
	    if (this.selected_) {
	      cov_oyf8pqoqq().b[8][0]++;
	      cov_oyf8pqoqq().s[39]++;
	      this.addClass('vjs-selected');
	      cov_oyf8pqoqq().s[40]++;
	      this.el_.setAttribute('aria-checked', 'true'); // aria-checked isn't fully supported by browsers/screen readers,
	      // so indicate selected state to screen reader in the control text.
	      cov_oyf8pqoqq().s[41]++;
	      this.controlText(this.localize('{1}, selected', this.localize(this.options_.controlText)));
	      const controlBar = (cov_oyf8pqoqq().s[42]++, this.player().controlBar);
	      const menuButton = (cov_oyf8pqoqq().s[43]++, controlBar.getChild('QualityMenuButton'));
	      cov_oyf8pqoqq().s[44]++;
	      if (!active) {
	        cov_oyf8pqoqq().b[9][0]++;
	        cov_oyf8pqoqq().s[45]++; // This menu item is manually selected but the current playing quality level
	        // is NOT associated with this menu item. This can happen if the quality hasnt
	        // changed yet or something went wrong with rendition selection such as failed
	        // server responses for playlists
	        menuButton.addClass('vjs-quality-menu-button-waiting');
	      } else {
	        cov_oyf8pqoqq().b[9][1]++;
	        cov_oyf8pqoqq().s[46]++;
	        menuButton.removeClass('vjs-quality-menu-button-waiting');
	      }
	    } else {
	      cov_oyf8pqoqq().b[8][1]++;
	      cov_oyf8pqoqq().s[47]++;
	      this.removeClass('vjs-selected');
	      cov_oyf8pqoqq().s[48]++;
	      this.el_.setAttribute('aria-checked', 'false'); // Indicate un-selected state to screen reader
	      // Note that a space clears out the selected state text
	      cov_oyf8pqoqq().s[49]++;
	      this.controlText(this.options_.controlText);
	    }
	  } /**
	    * Sets this QualityMenuItem to be selected and deselects the other items
	    *
	    * @method updateSiblings_
	    */
	  updateSiblings_() {
	    cov_oyf8pqoqq().f[6]++;
	    const qualityLevels = (cov_oyf8pqoqq().s[50]++, this.player().qualityLevels());
	    const controlBar = (cov_oyf8pqoqq().s[51]++, this.player().controlBar);
	    const menuItems = (cov_oyf8pqoqq().s[52]++, controlBar.getChild('QualityMenuButton').items);
	    cov_oyf8pqoqq().s[53]++;
	    for (let i = (cov_oyf8pqoqq().s[54]++, 0), l = (cov_oyf8pqoqq().s[55]++, menuItems.length); i < l; i++) {
	      const item = (cov_oyf8pqoqq().s[56]++, menuItems[i]);
	      const active = (cov_oyf8pqoqq().s[57]++, item.levels_.indexOf(qualityLevels.selectedIndex) > -1);
	      cov_oyf8pqoqq().s[58]++;
	      item.selected_ = item === this;
	      cov_oyf8pqoqq().s[59]++;
	      item.selected(active);
	    }
	  }
	}

	function cov_10wxqs1fb2() {
	  var path = "/home/invidious/files/videojs-contrib-quality-menu/src/quality-menu-button.js";
	  var hash = "cb823f1691cd3908e7972f8868019a682b81a447";
	  var global = new Function("return this")();
	  var gcv = "__coverage__";
	  var coverageData = {
	    path: "/home/invidious/files/videojs-contrib-quality-menu/src/quality-menu-button.js",
	    statementMap: {
	      "0": {
	        start: {
	          line: 7,
	          column: 19
	        },
	        end: {
	          line: 7,
	          column: 53
	        }
	      },
	      "1": {
	        start: {
	          line: 18,
	          column: 26
	        },
	        end: {
	          line: 25,
	          column: 1
	        }
	      },
	      "2": {
	        start: {
	          line: 19,
	          column: 2
	        },
	        end: {
	          line: 23,
	          column: 3
	        }
	      },
	      "3": {
	        start: {
	          line: 19,
	          column: 15
	        },
	        end: {
	          line: 19,
	          column: 16
	        }
	      },
	      "4": {
	        start: {
	          line: 19,
	          column: 22
	        },
	        end: {
	          line: 19,
	          column: 45
	        }
	      },
	      "5": {
	        start: {
	          line: 20,
	          column: 4
	        },
	        end: {
	          line: 22,
	          column: 5
	        }
	      },
	      "6": {
	        start: {
	          line: 21,
	          column: 6
	        },
	        end: {
	          line: 21,
	          column: 19
	        }
	      },
	      "7": {
	        start: {
	          line: 24,
	          column: 2
	        },
	        end: {
	          line: 24,
	          column: 14
	        }
	      },
	      "8": {
	        start: {
	          line: 36,
	          column: 20
	        },
	        end: {
	          line: 44,
	          column: 1
	        }
	      },
	      "9": {
	        start: {
	          line: 37,
	          column: 2
	        },
	        end: {
	          line: 39,
	          column: 3
	        }
	      },
	      "10": {
	        start: {
	          line: 38,
	          column: 4
	        },
	        end: {
	          line: 38,
	          column: 16
	        }
	      },
	      "11": {
	        start: {
	          line: 40,
	          column: 2
	        },
	        end: {
	          line: 42,
	          column: 3
	        }
	      },
	      "12": {
	        start: {
	          line: 41,
	          column: 4
	        },
	        end: {
	          line: 41,
	          column: 16
	        }
	      },
	      "13": {
	        start: {
	          line: 43,
	          column: 2
	        },
	        end: {
	          line: 43,
	          column: 12
	        }
	      },
	      "14": {
	        start: {
	          line: 63,
	          column: 4
	        },
	        end: {
	          line: 63,
	          column: 27
	        }
	      },
	      "15": {
	        start: {
	          line: 65,
	          column: 4
	        },
	        end: {
	          line: 65,
	          column: 73
	        }
	      },
	      "16": {
	        start: {
	          line: 66,
	          column: 4
	        },
	        end: {
	          line: 66,
	          column: 39
	        }
	      },
	      "17": {
	        start: {
	          line: 68,
	          column: 4
	        },
	        end: {
	          line: 68,
	          column: 49
	        }
	      },
	      "18": {
	        start: {
	          line: 70,
	          column: 4
	        },
	        end: {
	          line: 70,
	          column: 41
	        }
	      },
	      "19": {
	        start: {
	          line: 71,
	          column: 4
	        },
	        end: {
	          line: 71,
	          column: 69
	        }
	      },
	      "20": {
	        start: {
	          line: 72,
	          column: 4
	        },
	        end: {
	          line: 80,
	          column: 6
	        }
	      },
	      "21": {
	        start: {
	          line: 73,
	          column: 32
	        },
	        end: {
	          line: 73,
	          column: 63
	        }
	      },
	      "22": {
	        start: {
	          line: 75,
	          column: 6
	        },
	        end: {
	          line: 79,
	          column: 7
	        }
	      },
	      "23": {
	        start: {
	          line: 75,
	          column: 19
	        },
	        end: {
	          line: 75,
	          column: 20
	        }
	      },
	      "24": {
	        start: {
	          line: 76,
	          column: 8
	        },
	        end: {
	          line: 78,
	          column: 9
	        }
	      },
	      "25": {
	        start: {
	          line: 77,
	          column: 10
	        },
	        end: {
	          line: 77,
	          column: 38
	        }
	      },
	      "26": {
	        start: {
	          line: 82,
	          column: 4
	        },
	        end: {
	          line: 82,
	          column: 65
	        }
	      },
	      "27": {
	        start: {
	          line: 83,
	          column: 4
	        },
	        end: {
	          line: 83,
	          column: 68
	        }
	      },
	      "28": {
	        start: {
	          line: 84,
	          column: 4
	        },
	        end: {
	          line: 84,
	          column: 70
	        }
	      },
	      "29": {
	        start: {
	          line: 85,
	          column: 4
	        },
	        end: {
	          line: 85,
	          column: 65
	        }
	      },
	      "30": {
	        start: {
	          line: 87,
	          column: 4
	        },
	        end: {
	          line: 87,
	          column: 18
	        }
	      },
	      "31": {
	        start: {
	          line: 89,
	          column: 4
	        },
	        end: {
	          line: 94,
	          column: 7
	        }
	      },
	      "32": {
	        start: {
	          line: 90,
	          column: 6
	        },
	        end: {
	          line: 90,
	          column: 68
	        }
	      },
	      "33": {
	        start: {
	          line: 91,
	          column: 6
	        },
	        end: {
	          line: 91,
	          column: 71
	        }
	      },
	      "34": {
	        start: {
	          line: 92,
	          column: 6
	        },
	        end: {
	          line: 92,
	          column: 73
	        }
	      },
	      "35": {
	        start: {
	          line: 93,
	          column: 6
	        },
	        end: {
	          line: 93,
	          column: 67
	        }
	      },
	      "36": {
	        start: {
	          line: 105,
	          column: 4
	        },
	        end: {
	          line: 105,
	          column: 70
	        }
	      },
	      "37": {
	        start: {
	          line: 116,
	          column: 4
	        },
	        end: {
	          line: 116,
	          column: 62
	        }
	      },
	      "38": {
	        start: {
	          line: 127,
	          column: 18
	        },
	        end: {
	          line: 127,
	          column: 20
	        }
	      },
	      "39": {
	        start: {
	          line: 129,
	          column: 4
	        },
	        end: {
	          line: 131,
	          column: 5
	        }
	      },
	      "40": {
	        start: {
	          line: 130,
	          column: 6
	        },
	        end: {
	          line: 130,
	          column: 19
	        }
	      },
	      "41": {
	        start: {
	          line: 135,
	          column: 4
	        },
	        end: {
	          line: 141,
	          column: 5
	        }
	      },
	      "42": {
	        start: {
	          line: 136,
	          column: 6
	        },
	        end: {
	          line: 136,
	          column: 41
	        }
	      },
	      "43": {
	        start: {
	          line: 137,
	          column: 6
	        },
	        end: {
	          line: 137,
	          column: 62
	        }
	      },
	      "44": {
	        start: {
	          line: 139,
	          column: 6
	        },
	        end: {
	          line: 139,
	          column: 38
	        }
	      },
	      "45": {
	        start: {
	          line: 140,
	          column: 6
	        },
	        end: {
	          line: 140,
	          column: 65
	        }
	      },
	      "46": {
	        start: {
	          line: 147,
	          column: 4
	        },
	        end: {
	          line: 149,
	          column: 5
	        }
	      },
	      "47": {
	        start: {
	          line: 148,
	          column: 6
	        },
	        end: {
	          line: 148,
	          column: 16
	        }
	      },
	      "48": {
	        start: {
	          line: 151,
	          column: 4
	        },
	        end: {
	          line: 157,
	          column: 7
	        }
	      },
	      "49": {
	        start: {
	          line: 152,
	          column: 6
	        },
	        end: {
	          line: 156,
	          column: 7
	        }
	      },
	      "50": {
	        start: {
	          line: 153,
	          column: 8
	        },
	        end: {
	          line: 153,
	          column: 32
	        }
	      },
	      "51": {
	        start: {
	          line: 155,
	          column: 8
	        },
	        end: {
	          line: 155,
	          column: 62
	        }
	      },
	      "52": {
	        start: {
	          line: 160,
	          column: 17
	        },
	        end: {
	          line: 167,
	          column: 6
	        }
	      },
	      "53": {
	        start: {
	          line: 161,
	          column: 74
	        },
	        end: {
	          line: 161,
	          column: 75
	        }
	      },
	      "54": {
	        start: {
	          line: 169,
	          column: 4
	        },
	        end: {
	          line: 169,
	          column: 30
	        }
	      },
	      "55": {
	        start: {
	          line: 171,
	          column: 4
	        },
	        end: {
	          line: 171,
	          column: 21
	        }
	      },
	      "56": {
	        start: {
	          line: 173,
	          column: 4
	        },
	        end: {
	          line: 173,
	          column: 17
	        }
	      },
	      "57": {
	        start: {
	          line: 184,
	          column: 19
	        },
	        end: {
	          line: 184,
	          column: 21
	        }
	      },
	      "58": {
	        start: {
	          line: 185,
	          column: 18
	        },
	        end: {
	          line: 185,
	          column: 20
	        }
	      },
	      "59": {
	        start: {
	          line: 187,
	          column: 4
	        },
	        end: {
	          line: 219,
	          column: 5
	        }
	      },
	      "60": {
	        start: {
	          line: 187,
	          column: 17
	        },
	        end: {
	          line: 187,
	          column: 18
	        }
	      },
	      "61": {
	        start: {
	          line: 187,
	          column: 24
	        },
	        end: {
	          line: 187,
	          column: 50
	        }
	      },
	      "62": {
	        start: {
	          line: 188,
	          column: 20
	        },
	        end: {
	          line: 188,
	          column: 42
	        }
	      },
	      "63": {
	        start: {
	          line: 189,
	          column: 21
	        },
	        end: {
	          line: 189,
	          column: 60
	        }
	      },
	      "64": {
	        start: {
	          line: 190,
	          column: 20
	        },
	        end: {
	          line: 190,
	          column: 32
	        }
	      },
	      "65": {
	        start: {
	          line: 193,
	          column: 6
	        },
	        end: {
	          line: 199,
	          column: 7
	        }
	      },
	      "66": {
	        start: {
	          line: 194,
	          column: 23
	        },
	        end: {
	          line: 194,
	          column: 55
	        }
	      },
	      "67": {
	        start: {
	          line: 196,
	          column: 8
	        },
	        end: {
	          line: 196,
	          column: 45
	        }
	      },
	      "68": {
	        start: {
	          line: 198,
	          column: 8
	        },
	        end: {
	          line: 198,
	          column: 28
	        }
	      },
	      "69": {
	        start: {
	          line: 201,
	          column: 6
	        },
	        end: {
	          line: 212,
	          column: 7
	        }
	      },
	      "70": {
	        start: {
	          line: 202,
	          column: 25
	        },
	        end: {
	          line: 202,
	          column: 43
	        }
	      },
	      "71": {
	        start: {
	          line: 204,
	          column: 8
	        },
	        end: {
	          line: 209,
	          column: 10
	        }
	      },
	      "72": {
	        start: {
	          line: 211,
	          column: 8
	        },
	        end: {
	          line: 211,
	          column: 37
	        }
	      },
	      "73": {
	        start: {
	          line: 214,
	          column: 6
	        },
	        end: {
	          line: 216,
	          column: 7
	        }
	      },
	      "74": {
	        start: {
	          line: 215,
	          column: 8
	        },
	        end: {
	          line: 215,
	          column: 36
	        }
	      },
	      "75": {
	        start: {
	          line: 218,
	          column: 6
	        },
	        end: {
	          line: 218,
	          column: 35
	        }
	      },
	      "76": {
	        start: {
	          line: 222,
	          column: 4
	        },
	        end: {
	          line: 222,
	          column: 44
	        }
	      },
	      "77": {
	        start: {
	          line: 222,
	          column: 25
	        },
	        end: {
	          line: 222,
	          column: 42
	        }
	      },
	      "78": {
	        start: {
	          line: 224,
	          column: 25
	        },
	        end: {
	          line: 224,
	          column: 27
	        }
	      },
	      "79": {
	        start: {
	          line: 226,
	          column: 4
	        },
	        end: {
	          line: 228,
	          column: 7
	        }
	      },
	      "80": {
	        start: {
	          line: 227,
	          column: 6
	        },
	        end: {
	          line: 227,
	          column: 45
	        }
	      },
	      "81": {
	        start: {
	          line: 230,
	          column: 4
	        },
	        end: {
	          line: 230,
	          column: 24
	        }
	      },
	      "82": {
	        start: {
	          line: 242,
	          column: 19
	        },
	        end: {
	          line: 253,
	          column: 5
	        }
	      },
	      "83": {
	        start: {
	          line: 255,
	          column: 4
	        },
	        end: {
	          line: 272,
	          column: 5
	        }
	      },
	      "84": {
	        start: {
	          line: 255,
	          column: 17
	        },
	        end: {
	          line: 255,
	          column: 18
	        }
	      },
	      "85": {
	        start: {
	          line: 255,
	          column: 24
	        },
	        end: {
	          line: 255,
	          column: 50
	        }
	      },
	      "86": {
	        start: {
	          line: 256,
	          column: 20
	        },
	        end: {
	          line: 256,
	          column: 42
	        }
	      },
	      "87": {
	        start: {
	          line: 257,
	          column: 21
	        },
	        end: {
	          line: 257,
	          column: 60
	        }
	      },
	      "88": {
	        start: {
	          line: 261,
	          column: 6
	        },
	        end: {
	          line: 265,
	          column: 7
	        }
	      },
	      "89": {
	        start: {
	          line: 262,
	          column: 8
	        },
	        end: {
	          line: 262,
	          column: 26
	        }
	      },
	      "90": {
	        start: {
	          line: 264,
	          column: 8
	        },
	        end: {
	          line: 264,
	          column: 26
	        }
	      },
	      "91": {
	        start: {
	          line: 267,
	          column: 6
	        },
	        end: {
	          line: 269,
	          column: 7
	        }
	      },
	      "92": {
	        start: {
	          line: 268,
	          column: 8
	        },
	        end: {
	          line: 268,
	          column: 28
	        }
	      },
	      "93": {
	        start: {
	          line: 271,
	          column: 6
	        },
	        end: {
	          line: 271,
	          column: 27
	        }
	      },
	      "94": {
	        start: {
	          line: 274,
	          column: 4
	        },
	        end: {
	          line: 280,
	          column: 5
	        }
	      },
	      "95": {
	        start: {
	          line: 279,
	          column: 6
	        },
	        end: {
	          line: 279,
	          column: 16
	        }
	      },
	      "96": {
	        start: {
	          line: 282,
	          column: 4
	        },
	        end: {
	          line: 282,
	          column: 18
	        }
	      },
	      "97": {
	        start: {
	          line: 291,
	          column: 21
	        },
	        end: {
	          line: 291,
	          column: 75
	        }
	      },
	      "98": {
	        start: {
	          line: 292,
	          column: 27
	        },
	        end: {
	          line: 293,
	          column: 65
	        }
	      },
	      "99": {
	        start: {
	          line: 295,
	          column: 19
	        },
	        end: {
	          line: 295,
	          column: 21
	        }
	      },
	      "100": {
	        start: {
	          line: 297,
	          column: 4
	        },
	        end: {
	          line: 303,
	          column: 5
	        }
	      },
	      "101": {
	        start: {
	          line: 298,
	          column: 6
	        },
	        end: {
	          line: 302,
	          column: 7
	        }
	      },
	      "102": {
	        start: {
	          line: 299,
	          column: 8
	        },
	        end: {
	          line: 299,
	          column: 48
	        }
	      },
	      "103": {
	        start: {
	          line: 300,
	          column: 13
	        },
	        end: {
	          line: 302,
	          column: 7
	        }
	      },
	      "104": {
	        start: {
	          line: 301,
	          column: 8
	        },
	        end: {
	          line: 301,
	          column: 24
	        }
	      },
	      "105": {
	        start: {
	          line: 305,
	          column: 4
	        },
	        end: {
	          line: 314,
	          column: 5
	        }
	      },
	      "106": {
	        start: {
	          line: 306,
	          column: 6
	        },
	        end: {
	          line: 306,
	          column: 55
	        }
	      },
	      "107": {
	        start: {
	          line: 307,
	          column: 6
	        },
	        end: {
	          line: 307,
	          column: 58
	        }
	      },
	      "108": {
	        start: {
	          line: 308,
	          column: 11
	        },
	        end: {
	          line: 314,
	          column: 5
	        }
	      },
	      "109": {
	        start: {
	          line: 309,
	          column: 6
	        },
	        end: {
	          line: 309,
	          column: 58
	        }
	      },
	      "110": {
	        start: {
	          line: 310,
	          column: 6
	        },
	        end: {
	          line: 310,
	          column: 55
	        }
	      },
	      "111": {
	        start: {
	          line: 312,
	          column: 6
	        },
	        end: {
	          line: 312,
	          column: 58
	        }
	      },
	      "112": {
	        start: {
	          line: 313,
	          column: 6
	        },
	        end: {
	          line: 313,
	          column: 58
	        }
	      },
	      "113": {
	        start: {
	          line: 316,
	          column: 4
	        },
	        end: {
	          line: 323,
	          column: 5
	        }
	      },
	      "114": {
	        start: {
	          line: 317,
	          column: 6
	        },
	        end: {
	          line: 322,
	          column: 7
	        }
	      },
	      "115": {
	        start: {
	          line: 319,
	          column: 8
	        },
	        end: {
	          line: 319,
	          column: 73
	        }
	      },
	      "116": {
	        start: {
	          line: 321,
	          column: 8
	        },
	        end: {
	          line: 321,
	          column: 52
	        }
	      },
	      "117": {
	        start: {
	          line: 327,
	          column: 0
	        },
	        end: {
	          line: 327,
	          column: 66
	        }
	      }
	    },
	    fnMap: {
	      "0": {
	        name: "(anonymous_0)",
	        decl: {
	          start: {
	            line: 18,
	            column: 26
	          },
	          end: {
	            line: 18,
	            column: 27
	          }
	        },
	        loc: {
	          start: {
	            line: 18,
	            column: 53
	          },
	          end: {
	            line: 25,
	            column: 1
	          }
	        },
	        line: 18
	      },
	      "1": {
	        name: "(anonymous_1)",
	        decl: {
	          start: {
	            line: 36,
	            column: 20
	          },
	          end: {
	            line: 36,
	            column: 21
	          }
	        },
	        loc: {
	          start: {
	            line: 36,
	            column: 36
	          },
	          end: {
	            line: 44,
	            column: 1
	          }
	        },
	        line: 36
	      },
	      "2": {
	        name: "(anonymous_2)",
	        decl: {
	          start: {
	            line: 62,
	            column: 2
	          },
	          end: {
	            line: 62,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 62,
	            column: 36
	          },
	          end: {
	            line: 95,
	            column: 3
	          }
	        },
	        line: 62
	      },
	      "3": {
	        name: "(anonymous_3)",
	        decl: {
	          start: {
	            line: 72,
	            column: 26
	          },
	          end: {
	            line: 72,
	            column: 27
	          }
	        },
	        loc: {
	          start: {
	            line: 72,
	            column: 32
	          },
	          end: {
	            line: 80,
	            column: 5
	          }
	        },
	        line: 72
	      },
	      "4": {
	        name: "(anonymous_4)",
	        decl: {
	          start: {
	            line: 89,
	            column: 23
	          },
	          end: {
	            line: 89,
	            column: 24
	          }
	        },
	        loc: {
	          start: {
	            line: 89,
	            column: 29
	          },
	          end: {
	            line: 94,
	            column: 5
	          }
	        },
	        line: 89
	      },
	      "5": {
	        name: "(anonymous_5)",
	        decl: {
	          start: {
	            line: 104,
	            column: 2
	          },
	          end: {
	            line: 104,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 104,
	            column: 25
	          },
	          end: {
	            line: 106,
	            column: 3
	          }
	        },
	        line: 104
	      },
	      "6": {
	        name: "(anonymous_6)",
	        decl: {
	          start: {
	            line: 115,
	            column: 2
	          },
	          end: {
	            line: 115,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 115,
	            column: 18
	          },
	          end: {
	            line: 117,
	            column: 3
	          }
	        },
	        line: 115
	      },
	      "7": {
	        name: "(anonymous_7)",
	        decl: {
	          start: {
	            line: 126,
	            column: 2
	          },
	          end: {
	            line: 126,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 126,
	            column: 16
	          },
	          end: {
	            line: 174,
	            column: 3
	          }
	        },
	        line: 126
	      },
	      "8": {
	        name: "(anonymous_8)",
	        decl: {
	          start: {
	            line: 151,
	            column: 19
	          },
	          end: {
	            line: 151,
	            column: 20
	          }
	        },
	        loc: {
	          start: {
	            line: 151,
	            column: 30
	          },
	          end: {
	            line: 157,
	            column: 5
	          }
	        },
	        line: 151
	      },
	      "9": {
	        name: "(anonymous_9)",
	        decl: {
	          start: {
	            line: 161,
	            column: 60
	          },
	          end: {
	            line: 161,
	            column: 61
	          }
	        },
	        loc: {
	          start: {
	            line: 161,
	            column: 74
	          },
	          end: {
	            line: 161,
	            column: 75
	          }
	        },
	        line: 161
	      },
	      "10": {
	        name: "(anonymous_10)",
	        decl: {
	          start: {
	            line: 183,
	            column: 2
	          },
	          end: {
	            line: 183,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 183,
	            column: 23
	          },
	          end: {
	            line: 231,
	            column: 3
	          }
	        },
	        line: 183
	      },
	      "11": {
	        name: "(anonymous_11)",
	        decl: {
	          start: {
	            line: 222,
	            column: 15
	          },
	          end: {
	            line: 222,
	            column: 16
	          }
	        },
	        loc: {
	          start: {
	            line: 222,
	            column: 25
	          },
	          end: {
	            line: 222,
	            column: 42
	          }
	        },
	        line: 222
	      },
	      "12": {
	        name: "(anonymous_12)",
	        decl: {
	          start: {
	            line: 226,
	            column: 18
	          },
	          end: {
	            line: 226,
	            column: 19
	          }
	        },
	        loc: {
	          start: {
	            line: 226,
	            column: 29
	          },
	          end: {
	            line: 228,
	            column: 5
	          }
	        },
	        line: 226
	      },
	      "13": {
	        name: "(anonymous_13)",
	        decl: {
	          start: {
	            line: 240,
	            column: 2
	          },
	          end: {
	            line: 240,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 240,
	            column: 20
	          },
	          end: {
	            line: 283,
	            column: 3
	          }
	        },
	        line: 240
	      },
	      "14": {
	        name: "(anonymous_14)",
	        decl: {
	          start: {
	            line: 290,
	            column: 2
	          },
	          end: {
	            line: 290,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 290,
	            column: 25
	          },
	          end: {
	            line: 324,
	            column: 3
	          }
	        },
	        line: 290
	      }
	    },
	    branchMap: {
	      "0": {
	        loc: {
	          start: {
	            line: 20,
	            column: 4
	          },
	          end: {
	            line: 22,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 20,
	            column: 4
	          },
	          end: {
	            line: 22,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 20,
	            column: 4
	          },
	          end: {
	            line: 22,
	            column: 5
	          }
	        }],
	        line: 20
	      },
	      "1": {
	        loc: {
	          start: {
	            line: 37,
	            column: 2
	          },
	          end: {
	            line: 39,
	            column: 3
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 37,
	            column: 2
	          },
	          end: {
	            line: 39,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 37,
	            column: 2
	          },
	          end: {
	            line: 39,
	            column: 3
	          }
	        }],
	        line: 37
	      },
	      "2": {
	        loc: {
	          start: {
	            line: 40,
	            column: 2
	          },
	          end: {
	            line: 42,
	            column: 3
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 40,
	            column: 2
	          },
	          end: {
	            line: 42,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 40,
	            column: 2
	          },
	          end: {
	            line: 42,
	            column: 3
	          }
	        }],
	        line: 40
	      },
	      "3": {
	        loc: {
	          start: {
	            line: 62,
	            column: 22
	          },
	          end: {
	            line: 62,
	            column: 34
	          }
	        },
	        type: "default-arg",
	        locations: [{
	          start: {
	            line: 62,
	            column: 32
	          },
	          end: {
	            line: 62,
	            column: 34
	          }
	        }],
	        line: 62
	      },
	      "4": {
	        loc: {
	          start: {
	            line: 76,
	            column: 8
	          },
	          end: {
	            line: 78,
	            column: 9
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 76,
	            column: 8
	          },
	          end: {
	            line: 78,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 76,
	            column: 8
	          },
	          end: {
	            line: 78,
	            column: 9
	          }
	        }],
	        line: 76
	      },
	      "5": {
	        loc: {
	          start: {
	            line: 129,
	            column: 4
	          },
	          end: {
	            line: 131,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 129,
	            column: 4
	          },
	          end: {
	            line: 131,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 129,
	            column: 4
	          },
	          end: {
	            line: 131,
	            column: 5
	          }
	        }],
	        line: 129
	      },
	      "6": {
	        loc: {
	          start: {
	            line: 129,
	            column: 10
	          },
	          end: {
	            line: 129,
	            column: 59
	          }
	        },
	        type: "binary-expr",
	        locations: [{
	          start: {
	            line: 129,
	            column: 10
	          },
	          end: {
	            line: 129,
	            column: 29
	          }
	        }, {
	          start: {
	            line: 129,
	            column: 33
	          },
	          end: {
	            line: 129,
	            column: 59
	          }
	        }],
	        line: 129
	      },
	      "7": {
	        loc: {
	          start: {
	            line: 135,
	            column: 4
	          },
	          end: {
	            line: 141,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 135,
	            column: 4
	          },
	          end: {
	            line: 141,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 135,
	            column: 4
	          },
	          end: {
	            line: 141,
	            column: 5
	          }
	        }],
	        line: 135
	      },
	      "8": {
	        loc: {
	          start: {
	            line: 135,
	            column: 8
	          },
	          end: {
	            line: 135,
	            column: 83
	          }
	        },
	        type: "binary-expr",
	        locations: [{
	          start: {
	            line: 135,
	            column: 8
	          },
	          end: {
	            line: 135,
	            column: 41
	          }
	        }, {
	          start: {
	            line: 135,
	            column: 45
	          },
	          end: {
	            line: 135,
	            column: 83
	          }
	        }],
	        line: 135
	      },
	      "9": {
	        loc: {
	          start: {
	            line: 147,
	            column: 4
	          },
	          end: {
	            line: 149,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 147,
	            column: 4
	          },
	          end: {
	            line: 149,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 147,
	            column: 4
	          },
	          end: {
	            line: 149,
	            column: 5
	          }
	        }],
	        line: 147
	      },
	      "10": {
	        loc: {
	          start: {
	            line: 152,
	            column: 6
	          },
	          end: {
	            line: 156,
	            column: 7
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 152,
	            column: 6
	          },
	          end: {
	            line: 156,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 152,
	            column: 6
	          },
	          end: {
	            line: 156,
	            column: 7
	          }
	        }],
	        line: 152
	      },
	      "11": {
	        loc: {
	          start: {
	            line: 193,
	            column: 6
	          },
	          end: {
	            line: 199,
	            column: 7
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 193,
	            column: 6
	          },
	          end: {
	            line: 199,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 193,
	            column: 6
	          },
	          end: {
	            line: 199,
	            column: 7
	          }
	        }],
	        line: 193
	      },
	      "12": {
	        loc: {
	          start: {
	            line: 201,
	            column: 6
	          },
	          end: {
	            line: 212,
	            column: 7
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 201,
	            column: 6
	          },
	          end: {
	            line: 212,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 201,
	            column: 6
	          },
	          end: {
	            line: 212,
	            column: 7
	          }
	        }],
	        line: 201
	      },
	      "13": {
	        loc: {
	          start: {
	            line: 214,
	            column: 6
	          },
	          end: {
	            line: 216,
	            column: 7
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 214,
	            column: 6
	          },
	          end: {
	            line: 216,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 214,
	            column: 6
	          },
	          end: {
	            line: 216,
	            column: 7
	          }
	        }],
	        line: 214
	      },
	      "14": {
	        loc: {
	          start: {
	            line: 261,
	            column: 6
	          },
	          end: {
	            line: 265,
	            column: 7
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 261,
	            column: 6
	          },
	          end: {
	            line: 265,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 261,
	            column: 6
	          },
	          end: {
	            line: 265,
	            column: 7
	          }
	        }],
	        line: 261
	      },
	      "15": {
	        loc: {
	          start: {
	            line: 267,
	            column: 6
	          },
	          end: {
	            line: 269,
	            column: 7
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 267,
	            column: 6
	          },
	          end: {
	            line: 269,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 267,
	            column: 6
	          },
	          end: {
	            line: 269,
	            column: 7
	          }
	        }],
	        line: 267
	      },
	      "16": {
	        loc: {
	          start: {
	            line: 274,
	            column: 4
	          },
	          end: {
	            line: 280,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 274,
	            column: 4
	          },
	          end: {
	            line: 280,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 274,
	            column: 4
	          },
	          end: {
	            line: 280,
	            column: 5
	          }
	        }],
	        line: 274
	      },
	      "17": {
	        loc: {
	          start: {
	            line: 274,
	            column: 8
	          },
	          end: {
	            line: 274,
	            column: 60
	          }
	        },
	        type: "binary-expr",
	        locations: [{
	          start: {
	            line: 274,
	            column: 8
	          },
	          end: {
	            line: 274,
	            column: 32
	          }
	        }, {
	          start: {
	            line: 274,
	            column: 36
	          },
	          end: {
	            line: 274,
	            column: 60
	          }
	        }],
	        line: 274
	      },
	      "18": {
	        loc: {
	          start: {
	            line: 292,
	            column: 27
	          },
	          end: {
	            line: 293,
	            column: 65
	          }
	        },
	        type: "binary-expr",
	        locations: [{
	          start: {
	            line: 292,
	            column: 27
	          },
	          end: {
	            line: 292,
	            column: 60
	          }
	        }, {
	          start: {
	            line: 293,
	            column: 27
	          },
	          end: {
	            line: 293,
	            column: 65
	          }
	        }],
	        line: 292
	      },
	      "19": {
	        loc: {
	          start: {
	            line: 297,
	            column: 4
	          },
	          end: {
	            line: 303,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 297,
	            column: 4
	          },
	          end: {
	            line: 303,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 297,
	            column: 4
	          },
	          end: {
	            line: 303,
	            column: 5
	          }
	        }],
	        line: 297
	      },
	      "20": {
	        loc: {
	          start: {
	            line: 298,
	            column: 6
	          },
	          end: {
	            line: 302,
	            column: 7
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 298,
	            column: 6
	          },
	          end: {
	            line: 302,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 298,
	            column: 6
	          },
	          end: {
	            line: 302,
	            column: 7
	          }
	        }],
	        line: 298
	      },
	      "21": {
	        loc: {
	          start: {
	            line: 300,
	            column: 13
	          },
	          end: {
	            line: 302,
	            column: 7
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 300,
	            column: 13
	          },
	          end: {
	            line: 302,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 300,
	            column: 13
	          },
	          end: {
	            line: 302,
	            column: 7
	          }
	        }],
	        line: 300
	      },
	      "22": {
	        loc: {
	          start: {
	            line: 305,
	            column: 4
	          },
	          end: {
	            line: 314,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 305,
	            column: 4
	          },
	          end: {
	            line: 314,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 305,
	            column: 4
	          },
	          end: {
	            line: 314,
	            column: 5
	          }
	        }],
	        line: 305
	      },
	      "23": {
	        loc: {
	          start: {
	            line: 308,
	            column: 11
	          },
	          end: {
	            line: 314,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 308,
	            column: 11
	          },
	          end: {
	            line: 314,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 308,
	            column: 11
	          },
	          end: {
	            line: 314,
	            column: 5
	          }
	        }],
	        line: 308
	      },
	      "24": {
	        loc: {
	          start: {
	            line: 316,
	            column: 4
	          },
	          end: {
	            line: 323,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 316,
	            column: 4
	          },
	          end: {
	            line: 323,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 316,
	            column: 4
	          },
	          end: {
	            line: 323,
	            column: 5
	          }
	        }],
	        line: 316
	      },
	      "25": {
	        loc: {
	          start: {
	            line: 317,
	            column: 6
	          },
	          end: {
	            line: 322,
	            column: 7
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 317,
	            column: 6
	          },
	          end: {
	            line: 322,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 317,
	            column: 6
	          },
	          end: {
	            line: 322,
	            column: 7
	          }
	        }],
	        line: 317
	      },
	      "26": {
	        loc: {
	          start: {
	            line: 317,
	            column: 10
	          },
	          end: {
	            line: 317,
	            column: 58
	          }
	        },
	        type: "binary-expr",
	        locations: [{
	          start: {
	            line: 317,
	            column: 10
	          },
	          end: {
	            line: 317,
	            column: 46
	          }
	        }, {
	          start: {
	            line: 317,
	            column: 50
	          },
	          end: {
	            line: 317,
	            column: 58
	          }
	        }],
	        line: 317
	      }
	    },
	    s: {
	      "0": 0,
	      "1": 0,
	      "2": 0,
	      "3": 0,
	      "4": 0,
	      "5": 0,
	      "6": 0,
	      "7": 0,
	      "8": 0,
	      "9": 0,
	      "10": 0,
	      "11": 0,
	      "12": 0,
	      "13": 0,
	      "14": 0,
	      "15": 0,
	      "16": 0,
	      "17": 0,
	      "18": 0,
	      "19": 0,
	      "20": 0,
	      "21": 0,
	      "22": 0,
	      "23": 0,
	      "24": 0,
	      "25": 0,
	      "26": 0,
	      "27": 0,
	      "28": 0,
	      "29": 0,
	      "30": 0,
	      "31": 0,
	      "32": 0,
	      "33": 0,
	      "34": 0,
	      "35": 0,
	      "36": 0,
	      "37": 0,
	      "38": 0,
	      "39": 0,
	      "40": 0,
	      "41": 0,
	      "42": 0,
	      "43": 0,
	      "44": 0,
	      "45": 0,
	      "46": 0,
	      "47": 0,
	      "48": 0,
	      "49": 0,
	      "50": 0,
	      "51": 0,
	      "52": 0,
	      "53": 0,
	      "54": 0,
	      "55": 0,
	      "56": 0,
	      "57": 0,
	      "58": 0,
	      "59": 0,
	      "60": 0,
	      "61": 0,
	      "62": 0,
	      "63": 0,
	      "64": 0,
	      "65": 0,
	      "66": 0,
	      "67": 0,
	      "68": 0,
	      "69": 0,
	      "70": 0,
	      "71": 0,
	      "72": 0,
	      "73": 0,
	      "74": 0,
	      "75": 0,
	      "76": 0,
	      "77": 0,
	      "78": 0,
	      "79": 0,
	      "80": 0,
	      "81": 0,
	      "82": 0,
	      "83": 0,
	      "84": 0,
	      "85": 0,
	      "86": 0,
	      "87": 0,
	      "88": 0,
	      "89": 0,
	      "90": 0,
	      "91": 0,
	      "92": 0,
	      "93": 0,
	      "94": 0,
	      "95": 0,
	      "96": 0,
	      "97": 0,
	      "98": 0,
	      "99": 0,
	      "100": 0,
	      "101": 0,
	      "102": 0,
	      "103": 0,
	      "104": 0,
	      "105": 0,
	      "106": 0,
	      "107": 0,
	      "108": 0,
	      "109": 0,
	      "110": 0,
	      "111": 0,
	      "112": 0,
	      "113": 0,
	      "114": 0,
	      "115": 0,
	      "116": 0,
	      "117": 0
	    },
	    f: {
	      "0": 0,
	      "1": 0,
	      "2": 0,
	      "3": 0,
	      "4": 0,
	      "5": 0,
	      "6": 0,
	      "7": 0,
	      "8": 0,
	      "9": 0,
	      "10": 0,
	      "11": 0,
	      "12": 0,
	      "13": 0,
	      "14": 0
	    },
	    b: {
	      "0": [0, 0],
	      "1": [0, 0],
	      "2": [0, 0],
	      "3": [0],
	      "4": [0, 0],
	      "5": [0, 0],
	      "6": [0, 0],
	      "7": [0, 0],
	      "8": [0, 0],
	      "9": [0, 0],
	      "10": [0, 0],
	      "11": [0, 0],
	      "12": [0, 0],
	      "13": [0, 0],
	      "14": [0, 0],
	      "15": [0, 0],
	      "16": [0, 0],
	      "17": [0, 0],
	      "18": [0, 0],
	      "19": [0, 0],
	      "20": [0, 0],
	      "21": [0, 0],
	      "22": [0, 0],
	      "23": [0, 0],
	      "24": [0, 0],
	      "25": [0, 0],
	      "26": [0, 0]
	    },
	    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
	    hash: "cb823f1691cd3908e7972f8868019a682b81a447"
	  };
	  var coverage = global[gcv] || (global[gcv] = {});
	  if (!coverage[path] || coverage[path].hash !== hash) {
	    coverage[path] = coverageData;
	  }
	  var actualCoverage = coverage[path];
	  {
	    // @ts-ignore
	    cov_10wxqs1fb2 = function () {
	      return actualCoverage;
	    };
	  }
	  return actualCoverage;
	}
	cov_10wxqs1fb2(); /**
	                  * @file quality-menu-button.js
	                  */
	const MenuButton = (cov_10wxqs1fb2().s[0]++, videojs__default["default"].getComponent('MenuButton')); /**
	                                                                                  * Checks whether all the QualityLevels in a QualityLevelList have resolution information
	                                                                                  *
	                                                                                  * @param {QualityLevelList} qualityLevelList
	                                                                                  *        The list of QualityLevels
	                                                                                  * @return {boolean}
	                                                                                  *         True if all levels have resolution information, false otherwise
	                                                                                  * @function hasResolutionInfo
	                                                                                  */
	cov_10wxqs1fb2().s[1]++;
	const hasResolutionInfo = function (qualityLevelList) {
	  cov_10wxqs1fb2().f[0]++;
	  cov_10wxqs1fb2().s[2]++;
	  for (let i = (cov_10wxqs1fb2().s[3]++, 0), l = (cov_10wxqs1fb2().s[4]++, qualityLevelList.length); i < l; i++) {
	    cov_10wxqs1fb2().s[5]++;
	    if (!qualityLevelList[i].height) {
	      cov_10wxqs1fb2().b[0][0]++;
	      cov_10wxqs1fb2().s[6]++;
	      return false;
	    } else {
	      cov_10wxqs1fb2().b[0][1]++;
	    }
	  }
	  cov_10wxqs1fb2().s[7]++;
	  return true;
	}; /**
	   * Determines the appropriate sub label for the given lines of resolution
	   *
	   * @param {number} lines
	   *        The horizontal lines of resolution
	   * @return {string}
	   *         sub label for given resolution
	   * @function getSubLabel
	   */
	cov_10wxqs1fb2().s[8]++;
	const getSubLabel = function (lines) {
	  cov_10wxqs1fb2().f[1]++;
	  cov_10wxqs1fb2().s[9]++;
	  if (lines >= 2160) {
	    cov_10wxqs1fb2().b[1][0]++;
	    cov_10wxqs1fb2().s[10]++;
	    return '4K';
	  } else {
	    cov_10wxqs1fb2().b[1][1]++;
	  }
	  cov_10wxqs1fb2().s[11]++;
	  if (lines >= 720) {
	    cov_10wxqs1fb2().b[2][0]++;
	    cov_10wxqs1fb2().s[12]++;
	    return 'HD';
	  } else {
	    cov_10wxqs1fb2().b[2][1]++;
	  }
	  cov_10wxqs1fb2().s[13]++;
	  return '';
	}; /**
	   * The component for controlling the quality menu
	   *
	   * @extends MenuButton
	   * @class QualityMenuButton
	   */
	class QualityMenuButton extends MenuButton {
	  /**
	  * Creates a QualityMenuButton
	  *
	  * @param {Player|Object} player
	  *        Main Player
	  * @param {Object} [options]
	  *        Options for QualityMenuButton
	  */
	  constructor(player, options = (cov_10wxqs1fb2().b[3][0]++, {})) {
	    cov_10wxqs1fb2().f[2]++;
	    cov_10wxqs1fb2().s[14]++;
	    super(player, options);
	    cov_10wxqs1fb2().s[15]++;
	    this.el_.setAttribute('aria-label', this.localize('Quality Levels'));
	    cov_10wxqs1fb2().s[16]++;
	    this.controlText('Quality Levels');
	    cov_10wxqs1fb2().s[17]++;
	    this.qualityLevels_ = player.qualityLevels();
	    cov_10wxqs1fb2().s[18]++;
	    this.update = this.update.bind(this);
	    cov_10wxqs1fb2().s[19]++;
	    this.handleQualityChange_ = this.handleQualityChange_.bind(this);
	    cov_10wxqs1fb2().s[20]++;
	    this.changeHandler_ = () => {
	      cov_10wxqs1fb2().f[3]++;
	      const defaultResolution = (cov_10wxqs1fb2().s[21]++, this.options_.defaultResolution);
	      cov_10wxqs1fb2().s[22]++;
	      for (let i = (cov_10wxqs1fb2().s[23]++, 0); i < this.items.length; i++) {
	        cov_10wxqs1fb2().s[24]++;
	        if (this.items[i].options_.label.indexOf(defaultResolution) !== -1) {
	          cov_10wxqs1fb2().b[4][0]++;
	          cov_10wxqs1fb2().s[25]++;
	          this.items[i].handleClick();
	        } else {
	          cov_10wxqs1fb2().b[4][1]++;
	        }
	      }
	    };
	    cov_10wxqs1fb2().s[26]++;
	    this.on(this.qualityLevels_, 'addqualitylevel', this.update);
	    cov_10wxqs1fb2().s[27]++;
	    this.on(this.qualityLevels_, 'removequalitylevel', this.update);
	    cov_10wxqs1fb2().s[28]++;
	    this.on(this.qualityLevels_, 'change', this.handleQualityChange_);
	    cov_10wxqs1fb2().s[29]++;
	    this.one(this.qualityLevels_, 'change', this.changeHandler_);
	    cov_10wxqs1fb2().s[30]++;
	    this.update();
	    cov_10wxqs1fb2().s[31]++;
	    this.on('dispose', () => {
	      cov_10wxqs1fb2().f[4]++;
	      cov_10wxqs1fb2().s[32]++;
	      this.off(this.qualityLevels_, 'addqualitylevel', this.update);
	      cov_10wxqs1fb2().s[33]++;
	      this.off(this.qualityLevels_, 'removequalitylevel', this.update);
	      cov_10wxqs1fb2().s[34]++;
	      this.off(this.qualityLevels_, 'change', this.handleQualityChange_);
	      cov_10wxqs1fb2().s[35]++;
	      this.off(this.qualityLevels_, 'change', this.changeHandler_);
	    });
	  } /**
	    * Allow sub components to stack CSS class names
	    *
	    * @return {string}
	    *         The constructed class name
	    * @method buildWrapperCSSClass
	    */
	  buildWrapperCSSClass() {
	    cov_10wxqs1fb2().f[5]++;
	    cov_10wxqs1fb2().s[36]++;
	    return `vjs-quality-menu-wrapper ${super.buildWrapperCSSClass()}`;
	  } /**
	    * Allow sub components to stack CSS class names
	    *
	    * @return {string}
	    *         The constructed class name
	    * @method buildCSSClass
	    */
	  buildCSSClass() {
	    cov_10wxqs1fb2().f[6]++;
	    cov_10wxqs1fb2().s[37]++;
	    return `vjs-quality-menu-button ${super.buildCSSClass()}`;
	  } /**
	    * Create the list of menu items.
	    *
	    * @return {Array}
	    *         The list of menu items
	    * @method createItems
	    */
	  createItems() {
	    cov_10wxqs1fb2().f[7]++;
	    const items = (cov_10wxqs1fb2().s[38]++, []);
	    cov_10wxqs1fb2().s[39]++;
	    if (!((cov_10wxqs1fb2().b[6][0]++, this.qualityLevels_) && (cov_10wxqs1fb2().b[6][1]++, this.qualityLevels_.length))) {
	      cov_10wxqs1fb2().b[5][0]++;
	      cov_10wxqs1fb2().s[40]++;
	      return items;
	    } else {
	      cov_10wxqs1fb2().b[5][1]++;
	    }
	    let groups;
	    cov_10wxqs1fb2().s[41]++;
	    if ((cov_10wxqs1fb2().b[8][0]++, this.options_.useResolutionLabels) && (cov_10wxqs1fb2().b[8][1]++, hasResolutionInfo(this.qualityLevels_))) {
	      cov_10wxqs1fb2().b[7][0]++;
	      cov_10wxqs1fb2().s[42]++;
	      groups = this.groupByResolution_();
	      cov_10wxqs1fb2().s[43]++;
	      this.addClass('vjs-quality-menu-button-use-resolution');
	    } else {
	      cov_10wxqs1fb2().b[7][1]++;
	      cov_10wxqs1fb2().s[44]++;
	      groups = this.groupByBitrate_();
	      cov_10wxqs1fb2().s[45]++;
	      this.removeClass('vjs-quality-menu-button-use-resolution');
	    } // if there is only 1 or 0 menu items, we should just return an empty list so
	    // the ui does not appear when there are no options. We consider 1 to be no options
	    // since Auto will have the same behavior as selecting the only other option,
	    // so it is as effective as not having any options.
	    cov_10wxqs1fb2().s[46]++;
	    if (groups.length <= 1) {
	      cov_10wxqs1fb2().b[9][0]++;
	      cov_10wxqs1fb2().s[47]++;
	      return [];
	    } else {
	      cov_10wxqs1fb2().b[9][1]++;
	    }
	    cov_10wxqs1fb2().s[48]++;
	    groups.forEach(group => {
	      cov_10wxqs1fb2().f[8]++;
	      cov_10wxqs1fb2().s[49]++;
	      if (group.levels.length) {
	        cov_10wxqs1fb2().b[10][0]++;
	        cov_10wxqs1fb2().s[50]++;
	        group.selectable = true;
	        cov_10wxqs1fb2().s[51]++;
	        items.push(new QualityMenuItem(this.player(), group));
	      } else {
	        cov_10wxqs1fb2().b[10][1]++;
	      }
	    }); // Add the Auto menu item
	    const auto = (cov_10wxqs1fb2().s[52]++, new QualityMenuItem(this.player(), {
	      levels: Array.prototype.map.call(this.qualityLevels_, (level, i) => {
	        cov_10wxqs1fb2().f[9]++;
	        cov_10wxqs1fb2().s[53]++;
	        return i;
	      }),
	      label: 'Auto',
	      controlText: 'Auto',
	      active: true,
	      selected: true,
	      selectable: true
	    }));
	    cov_10wxqs1fb2().s[54]++;
	    this.autoMenuItem_ = auto;
	    cov_10wxqs1fb2().s[55]++;
	    items.push(auto);
	    cov_10wxqs1fb2().s[56]++;
	    return items;
	  } /**
	    * Group quality levels by lines of resolution
	    *
	    * @return {Array}
	    *         Array of each group
	    * @method groupByResolution_
	    */
	  groupByResolution_() {
	    cov_10wxqs1fb2().f[10]++;
	    const groups = (cov_10wxqs1fb2().s[57]++, {});
	    const order = (cov_10wxqs1fb2().s[58]++, []);
	    cov_10wxqs1fb2().s[59]++;
	    for (let i = (cov_10wxqs1fb2().s[60]++, 0), l = (cov_10wxqs1fb2().s[61]++, this.qualityLevels_.length); i < l; i++) {
	      const level = (cov_10wxqs1fb2().s[62]++, this.qualityLevels_[i]);
	      const active = (cov_10wxqs1fb2().s[63]++, this.qualityLevels_.selectedIndex === i);
	      const lines = (cov_10wxqs1fb2().s[64]++, level.height);
	      let label;
	      cov_10wxqs1fb2().s[65]++;
	      if (this.options_.resolutionLabelBitrates) {
	        cov_10wxqs1fb2().b[11][0]++;
	        const kbRate = (cov_10wxqs1fb2().s[66]++, Math.round(level.bitrate / 1000));
	        cov_10wxqs1fb2().s[67]++;
	        label = `${lines}p @ ${kbRate} kbps`;
	      } else {
	        cov_10wxqs1fb2().b[11][1]++;
	        cov_10wxqs1fb2().s[68]++;
	        label = lines + 'p';
	      }
	      cov_10wxqs1fb2().s[69]++;
	      if (!groups[label]) {
	        cov_10wxqs1fb2().b[12][0]++;
	        const subLabel = (cov_10wxqs1fb2().s[70]++, getSubLabel(lines));
	        cov_10wxqs1fb2().s[71]++;
	        groups[label] = {
	          levels: [],
	          label,
	          controlText: label,
	          subLabel
	        };
	        cov_10wxqs1fb2().s[72]++;
	        order.push({
	          label,
	          lines
	        });
	      } else {
	        cov_10wxqs1fb2().b[12][1]++;
	      }
	      cov_10wxqs1fb2().s[73]++;
	      if (active) {
	        cov_10wxqs1fb2().b[13][0]++;
	        cov_10wxqs1fb2().s[74]++;
	        groups[label].active = true;
	      } else {
	        cov_10wxqs1fb2().b[13][1]++;
	      }
	      cov_10wxqs1fb2().s[75]++;
	      groups[label].levels.push(i);
	    } // Sort from High to Low
	    cov_10wxqs1fb2().s[76]++;
	    order.sort((a, b) => {
	      cov_10wxqs1fb2().f[11]++;
	      cov_10wxqs1fb2().s[77]++;
	      return b.lines - a.lines;
	    });
	    const sortedGroups = (cov_10wxqs1fb2().s[78]++, []);
	    cov_10wxqs1fb2().s[79]++;
	    order.forEach(group => {
	      cov_10wxqs1fb2().f[12]++;
	      cov_10wxqs1fb2().s[80]++;
	      sortedGroups.push(groups[group.label]);
	    });
	    cov_10wxqs1fb2().s[81]++;
	    return sortedGroups;
	  } /**
	    * Group quality levels by bitrate into SD and HD buckets
	    *
	    * @return {Array}
	    *         Array of each group
	    * @method groupByBitrate_
	    */
	  groupByBitrate_() {
	    cov_10wxqs1fb2().f[13]++; // groups[0] for HD, groups[1] for SD, since we want sorting from high to low\
	    const groups = (cov_10wxqs1fb2().s[82]++, [{
	      levels: [],
	      label: 'HD',
	      controlText: 'High Definition'
	    }, {
	      levels: [],
	      label: 'SD',
	      controlText: 'Standard Definition'
	    }]);
	    cov_10wxqs1fb2().s[83]++;
	    for (let i = (cov_10wxqs1fb2().s[84]++, 0), l = (cov_10wxqs1fb2().s[85]++, this.qualityLevels_.length); i < l; i++) {
	      const level = (cov_10wxqs1fb2().s[86]++, this.qualityLevels_[i]);
	      const active = (cov_10wxqs1fb2().s[87]++, this.qualityLevels_.selectedIndex === i);
	      let group;
	      cov_10wxqs1fb2().s[88]++;
	      if (level.bitrate < this.options_.sdBitrateLimit) {
	        cov_10wxqs1fb2().b[14][0]++;
	        cov_10wxqs1fb2().s[89]++;
	        group = groups[1];
	      } else {
	        cov_10wxqs1fb2().b[14][1]++;
	        cov_10wxqs1fb2().s[90]++;
	        group = groups[0];
	      }
	      cov_10wxqs1fb2().s[91]++;
	      if (active) {
	        cov_10wxqs1fb2().b[15][0]++;
	        cov_10wxqs1fb2().s[92]++;
	        group.active = true;
	      } else {
	        cov_10wxqs1fb2().b[15][1]++;
	      }
	      cov_10wxqs1fb2().s[93]++;
	      group.levels.push(i);
	    }
	    cov_10wxqs1fb2().s[94]++;
	    if ((cov_10wxqs1fb2().b[17][0]++, !groups[0].levels.length) || (cov_10wxqs1fb2().b[17][1]++, !groups[1].levels.length)) {
	      cov_10wxqs1fb2().b[16][0]++;
	      cov_10wxqs1fb2().s[95]++; // Either HD or SD do not have any quality levels, we should just return an empty
	      // list so the ui does not appear when there are no options. We consider 1
	      // to be no options since Auto will have the same behavior as selecting the only
	      // other option, so it is as effective as not having any options.
	      return [];
	    } else {
	      cov_10wxqs1fb2().b[16][1]++;
	    }
	    cov_10wxqs1fb2().s[96]++;
	    return groups;
	  } /**
	    * Handle a change event from the QualityLevelList
	    *
	    * @method handleQualityChange_
	    */
	  handleQualityChange_() {
	    cov_10wxqs1fb2().f[14]++;
	    const selected = (cov_10wxqs1fb2().s[97]++, this.qualityLevels_[this.qualityLevels_.selectedIndex]);
	    const useResolution = (cov_10wxqs1fb2().s[98]++, (cov_10wxqs1fb2().b[18][0]++, this.options_.useResolutionLabels) && (cov_10wxqs1fb2().b[18][1]++, hasResolutionInfo(this.qualityLevels_)));
	    let subLabel = (cov_10wxqs1fb2().s[99]++, '');
	    cov_10wxqs1fb2().s[100]++;
	    if (selected) {
	      cov_10wxqs1fb2().b[19][0]++;
	      cov_10wxqs1fb2().s[101]++;
	      if (useResolution) {
	        cov_10wxqs1fb2().b[20][0]++;
	        cov_10wxqs1fb2().s[102]++;
	        subLabel = getSubLabel(selected.height);
	      } else {
	        cov_10wxqs1fb2().b[20][1]++;
	        cov_10wxqs1fb2().s[103]++;
	        if (selected.bitrate >= this.options_.sdBitrateLimit) {
	          cov_10wxqs1fb2().b[21][0]++;
	          cov_10wxqs1fb2().s[104]++;
	          subLabel = 'HD';
	        } else {
	          cov_10wxqs1fb2().b[21][1]++;
	        }
	      }
	    } else {
	      cov_10wxqs1fb2().b[19][1]++;
	    }
	    cov_10wxqs1fb2().s[105]++;
	    if (subLabel === 'HD') {
	      cov_10wxqs1fb2().b[22][0]++;
	      cov_10wxqs1fb2().s[106]++;
	      this.addClass('vjs-quality-menu-button-HD-flag');
	      cov_10wxqs1fb2().s[107]++;
	      this.removeClass('vjs-quality-menu-button-4K-flag');
	    } else {
	      cov_10wxqs1fb2().b[22][1]++;
	      cov_10wxqs1fb2().s[108]++;
	      if (subLabel === '4K') {
	        cov_10wxqs1fb2().b[23][0]++;
	        cov_10wxqs1fb2().s[109]++;
	        this.removeClass('vjs-quality-menu-button-HD-flag');
	        cov_10wxqs1fb2().s[110]++;
	        this.addClass('vjs-quality-menu-button-4K-flag');
	      } else {
	        cov_10wxqs1fb2().b[23][1]++;
	        cov_10wxqs1fb2().s[111]++;
	        this.removeClass('vjs-quality-menu-button-HD-flag');
	        cov_10wxqs1fb2().s[112]++;
	        this.removeClass('vjs-quality-menu-button-4K-flag');
	      }
	    }
	    cov_10wxqs1fb2().s[113]++;
	    if (this.autoMenuItem_) {
	      cov_10wxqs1fb2().b[24][0]++;
	      cov_10wxqs1fb2().s[114]++;
	      if ((cov_10wxqs1fb2().b[26][0]++, this.autoMenuItem_.manuallySelected_) && (cov_10wxqs1fb2().b[26][1]++, selected)) {
	        cov_10wxqs1fb2().b[25][0]++;
	        cov_10wxqs1fb2().s[115]++; // auto mode, update the sub label
	        this.autoMenuItem_.subLabel_.innerHTML = this.localize(subLabel);
	      } else {
	        cov_10wxqs1fb2().b[25][1]++;
	        cov_10wxqs1fb2().s[116]++;
	        this.autoMenuItem_.subLabel_.innerHTML = '';
	      }
	    } else {
	      cov_10wxqs1fb2().b[24][1]++;
	    }
	  }
	}
	cov_10wxqs1fb2().s[117]++;
	videojs__default["default"].registerComponent('QualityMenuButton', QualityMenuButton);

	var version = "1.0.0";

	function cov_11nhgah1lr() {
	  var path = "/home/invidious/files/videojs-contrib-quality-menu/src/plugin.js";
	  var hash = "10dd779b883ab2a5309e13396e01241048719f71";
	  var global = new Function("return this")();
	  var gcv = "__coverage__";
	  var coverageData = {
	    path: "/home/invidious/files/videojs-contrib-quality-menu/src/plugin.js",
	    statementMap: {
	      "0": {
	        start: {
	          line: 6,
	          column: 17
	        },
	        end: {
	          line: 11,
	          column: 1
	        }
	      },
	      "1": {
	        start: {
	          line: 27,
	          column: 22
	        },
	        end: {
	          line: 43,
	          column: 1
	        }
	      },
	      "2": {
	        start: {
	          line: 28,
	          column: 2
	        },
	        end: {
	          line: 28,
	          column: 38
	        }
	      },
	      "3": {
	        start: {
	          line: 30,
	          column: 21
	        },
	        end: {
	          line: 30,
	          column: 50
	        }
	      },
	      "4": {
	        start: {
	          line: 32,
	          column: 17
	        },
	        end: {
	          line: 36,
	          column: 3
	        }
	      },
	      "5": {
	        start: {
	          line: 38,
	          column: 2
	        },
	        end: {
	          line: 42,
	          column: 4
	        }
	      },
	      "6": {
	        start: {
	          line: 39,
	          column: 4
	        },
	        end: {
	          line: 39,
	          column: 43
	        }
	      },
	      "7": {
	        start: {
	          line: 40,
	          column: 4
	        },
	        end: {
	          line: 40,
	          column: 35
	        }
	      },
	      "8": {
	        start: {
	          line: 41,
	          column: 4
	        },
	        end: {
	          line: 41,
	          column: 21
	        }
	      },
	      "9": {
	        start: {
	          line: 52,
	          column: 19
	        },
	        end: {
	          line: 72,
	          column: 1
	        }
	      },
	      "10": {
	        start: {
	          line: 53,
	          column: 2
	        },
	        end: {
	          line: 71,
	          column: 3
	        }
	      },
	      "11": {
	        start: {
	          line: 55,
	          column: 4
	        },
	        end: {
	          line: 55,
	          column: 27
	        }
	      },
	      "12": {
	        start: {
	          line: 57,
	          column: 20
	        },
	        end: {
	          line: 57,
	          column: 28
	        }
	      },
	      "13": {
	        start: {
	          line: 59,
	          column: 4
	        },
	        end: {
	          line: 66,
	          column: 7
	        }
	      },
	      "14": {
	        start: {
	          line: 60,
	          column: 6
	        },
	        end: {
	          line: 60,
	          column: 49
	        }
	      },
	      "15": {
	        start: {
	          line: 62,
	          column: 6
	        },
	        end: {
	          line: 65,
	          column: 9
	        }
	      },
	      "16": {
	        start: {
	          line: 63,
	          column: 8
	        },
	        end: {
	          line: 63,
	          column: 20
	        }
	      },
	      "17": {
	        start: {
	          line: 64,
	          column: 8
	        },
	        end: {
	          line: 64,
	          column: 51
	        }
	      },
	      "18": {
	        start: {
	          line: 69,
	          column: 4
	        },
	        end: {
	          line: 69,
	          column: 34
	        }
	      },
	      "19": {
	        start: {
	          line: 70,
	          column: 4
	        },
	        end: {
	          line: 70,
	          column: 41
	        }
	      },
	      "20": {
	        start: {
	          line: 86,
	          column: 20
	        },
	        end: {
	          line: 88,
	          column: 1
	        }
	      },
	      "21": {
	        start: {
	          line: 87,
	          column: 2
	        },
	        end: {
	          line: 87,
	          column: 57
	        }
	      },
	      "22": {
	        start: {
	          line: 91,
	          column: 0
	        },
	        end: {
	          line: 91,
	          column: 51
	        }
	      },
	      "23": {
	        start: {
	          line: 94,
	          column: 0
	        },
	        end: {
	          line: 94,
	          column: 30
	        }
	      }
	    },
	    fnMap: {
	      "0": {
	        name: "(anonymous_0)",
	        decl: {
	          start: {
	            line: 27,
	            column: 22
	          },
	          end: {
	            line: 27,
	            column: 23
	          }
	        },
	        loc: {
	          start: {
	            line: 27,
	            column: 43
	          },
	          end: {
	            line: 43,
	            column: 1
	          }
	        },
	        line: 27
	      },
	      "1": {
	        name: "(anonymous_1)",
	        decl: {
	          start: {
	            line: 38,
	            column: 9
	          },
	          end: {
	            line: 38,
	            column: 10
	          }
	        },
	        loc: {
	          start: {
	            line: 38,
	            column: 20
	          },
	          end: {
	            line: 42,
	            column: 3
	          }
	        },
	        line: 38
	      },
	      "2": {
	        name: "(anonymous_2)",
	        decl: {
	          start: {
	            line: 52,
	            column: 19
	          },
	          end: {
	            line: 52,
	            column: 20
	          }
	        },
	        loc: {
	          start: {
	            line: 52,
	            column: 45
	          },
	          end: {
	            line: 72,
	            column: 1
	          }
	        },
	        line: 52
	      },
	      "3": {
	        name: "(anonymous_3)",
	        decl: {
	          start: {
	            line: 57,
	            column: 20
	          },
	          end: {
	            line: 57,
	            column: 21
	          }
	        },
	        loc: {
	          start: {
	            line: 57,
	            column: 26
	          },
	          end: {
	            line: 57,
	            column: 28
	          }
	        },
	        line: 57
	      },
	      "4": {
	        name: "(anonymous_4)",
	        decl: {
	          start: {
	            line: 59,
	            column: 17
	          },
	          end: {
	            line: 59,
	            column: 18
	          }
	        },
	        loc: {
	          start: {
	            line: 59,
	            column: 23
	          },
	          end: {
	            line: 66,
	            column: 5
	          }
	        },
	        line: 59
	      },
	      "5": {
	        name: "(anonymous_5)",
	        decl: {
	          start: {
	            line: 62,
	            column: 29
	          },
	          end: {
	            line: 62,
	            column: 30
	          }
	        },
	        loc: {
	          start: {
	            line: 62,
	            column: 35
	          },
	          end: {
	            line: 65,
	            column: 7
	          }
	        },
	        line: 62
	      },
	      "6": {
	        name: "(anonymous_6)",
	        decl: {
	          start: {
	            line: 69,
	            column: 25
	          },
	          end: {
	            line: 69,
	            column: 26
	          }
	        },
	        loc: {
	          start: {
	            line: 69,
	            column: 31
	          },
	          end: {
	            line: 69,
	            column: 33
	          }
	        },
	        line: 69
	      },
	      "7": {
	        name: "(anonymous_7)",
	        decl: {
	          start: {
	            line: 86,
	            column: 20
	          },
	          end: {
	            line: 86,
	            column: 21
	          }
	        },
	        loc: {
	          start: {
	            line: 86,
	            column: 38
	          },
	          end: {
	            line: 88,
	            column: 1
	          }
	        },
	        line: 86
	      }
	    },
	    branchMap: {
	      "0": {
	        loc: {
	          start: {
	            line: 53,
	            column: 2
	          },
	          end: {
	            line: 71,
	            column: 3
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 53,
	            column: 2
	          },
	          end: {
	            line: 71,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 53,
	            column: 2
	          },
	          end: {
	            line: 71,
	            column: 3
	          }
	        }],
	        line: 53
	      }
	    },
	    s: {
	      "0": 0,
	      "1": 0,
	      "2": 0,
	      "3": 0,
	      "4": 0,
	      "5": 0,
	      "6": 0,
	      "7": 0,
	      "8": 0,
	      "9": 0,
	      "10": 0,
	      "11": 0,
	      "12": 0,
	      "13": 0,
	      "14": 0,
	      "15": 0,
	      "16": 0,
	      "17": 0,
	      "18": 0,
	      "19": 0,
	      "20": 0,
	      "21": 0,
	      "22": 0,
	      "23": 0
	    },
	    f: {
	      "0": 0,
	      "1": 0,
	      "2": 0,
	      "3": 0,
	      "4": 0,
	      "5": 0,
	      "6": 0,
	      "7": 0
	    },
	    b: {
	      "0": [0, 0]
	    },
	    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
	    hash: "10dd779b883ab2a5309e13396e01241048719f71"
	  };
	  var coverage = global[gcv] || (global[gcv] = {});
	  if (!coverage[path] || coverage[path].hash !== hash) {
	    coverage[path] = coverageData;
	  }
	  var actualCoverage = coverage[path];
	  {
	    // @ts-ignore
	    cov_11nhgah1lr = function () {
	      return actualCoverage;
	    };
	  }
	  return actualCoverage;
	}
	cov_11nhgah1lr();
	const defaults = (cov_11nhgah1lr().s[0]++, {
	  sdBitrateLimit: 2000000,
	  useResolutionLabels: true,
	  resolutionLabelBitrates: false,
	  defaultResolution: 'none'
	}); /**
	    * Function to invoke when the player is ready.
	    *
	    * This is a great place for your plugin to initialize itself. When this
	    * function is called, the player will have its DOM and child components
	    * in place.
	    *
	    * @function onPlayerReady
	    * @param    {Player} player
	    *           A Video.js player.
	    * @param    {Object} [options={}]
	    *           An object of options left to the plugin author to define.
	    * @return {Function} disposal function for re initialization
	    */
	cov_11nhgah1lr().s[1]++;
	const onPlayerReady = (player, options) => {
	  cov_11nhgah1lr().f[0]++;
	  cov_11nhgah1lr().s[2]++;
	  player.addClass('vjs-quality-menu');
	  const controlBar = (cov_11nhgah1lr().s[3]++, player.getChild('controlBar'));
	  const button = (cov_11nhgah1lr().s[4]++, controlBar.addChild('QualityMenuButton', options, controlBar.children_.length - 2));
	  cov_11nhgah1lr().s[5]++;
	  return function () {
	    cov_11nhgah1lr().f[1]++;
	    cov_11nhgah1lr().s[6]++;
	    player.removeClass('vjs-quality-menu');
	    cov_11nhgah1lr().s[7]++;
	    controlBar.removeChild(button);
	    cov_11nhgah1lr().s[8]++;
	    button.dispose();
	  };
	}; /**
	   * Main entry point for the plugin
	   *
	   * @function initPlugin
	   * @param {Player} player a reference to a videojs Player instance
	   * @param {Object} [options] an object with plugin options
	   */
	cov_11nhgah1lr().s[9]++;
	const initPlugin = function (player, options) {
	  cov_11nhgah1lr().f[2]++;
	  cov_11nhgah1lr().s[10]++;
	  if (typeof player.qualityLevels !== 'undefined') {
	    cov_11nhgah1lr().b[0][0]++;
	    cov_11nhgah1lr().s[11]++; // call qualityLevels to initialize it in case it hasnt been initialized yet
	    player.qualityLevels();
	    cov_11nhgah1lr().s[12]++;
	    let disposeFn = () => {
	      cov_11nhgah1lr().f[3]++;
	    };
	    cov_11nhgah1lr().s[13]++;
	    player.ready(() => {
	      cov_11nhgah1lr().f[4]++;
	      cov_11nhgah1lr().s[14]++;
	      disposeFn = onPlayerReady(player, options);
	      cov_11nhgah1lr().s[15]++;
	      player.on('loadstart', () => {
	        cov_11nhgah1lr().f[5]++;
	        cov_11nhgah1lr().s[16]++;
	        disposeFn();
	        cov_11nhgah1lr().s[17]++;
	        disposeFn = onPlayerReady(player, options);
	      });
	    }); // reinitialization is no-op for now
	    cov_11nhgah1lr().s[18]++;
	    player.qualityMenu = () => {
	      cov_11nhgah1lr().f[6]++;
	    };
	    cov_11nhgah1lr().s[19]++;
	    player.qualityMenu.VERSION = version;
	  } else {
	    cov_11nhgah1lr().b[0][1]++;
	  }
	}; /**
	   * A video.js plugin.
	   *
	   * In the plugin function, the value of `this` is a video.js `Player`
	   * instance. You cannot rely on the player being in a "ready" state here,
	   * depending on how the plugin is invoked. This may or may not be important
	   * to you; if not, remove the wait for "ready"!
	   *
	   * @function qualityMenu
	   * @param    {Object} [options={}]
	   *           An object of options left to the plugin author to define.
	   */
	cov_11nhgah1lr().s[20]++;
	const qualityMenu = function (options) {
	  cov_11nhgah1lr().f[7]++;
	  cov_11nhgah1lr().s[21]++;
	  initPlugin(this, videojs__default["default"].obj.merge(defaults, options));
	}; // Register the plugin with video.js.
	cov_11nhgah1lr().s[22]++;
	videojs__default["default"].registerPlugin('qualityMenu', qualityMenu); // Include the version number.
	cov_11nhgah1lr().s[23]++;
	qualityMenu.VERSION = version;

	const Player = videojs__default["default"].getComponent('Player');
	QUnit__default["default"].test('the environment is sane', function (assert) {
	  assert.strictEqual(typeof Array.isArray, 'function', 'es5 exists');
	  assert.strictEqual(typeof sinon__default["default"], 'object', 'sinon exists');
	  assert.strictEqual(typeof videojs__default["default"], 'function', 'videojs exists');
	  assert.strictEqual(typeof qualityMenu, 'function', 'plugin is a function');
	});
	QUnit__default["default"].module('videojs-contrib-quality-menu', {
	  beforeEach() {
	    // Mock the environment's timers because certain things - particularly
	    // player readiness - are asynchronous in video.js 5. This MUST come
	    // before any player is created; otherwise, timers could get created
	    // with the actual timer methods!
	    this.clock = sinon__default["default"].useFakeTimers();
	    this.fixture = document_1.getElementById('qunit-fixture');
	    this.video = document_1.createElement('video');
	    this.fixture.appendChild(this.video);
	    this.player = videojs__default["default"](this.video);
	  },
	  afterEach() {
	    this.player.dispose();
	    this.clock.restore();
	  }
	});
	QUnit__default["default"].test('registers itself with video.js', function (assert) {
	  assert.expect(2);
	  assert.strictEqual(typeof Player.prototype.qualityMenu, 'function', 'videojs-contrib-quality-menu plugin was registered');
	  this.player.qualityMenu();

	  // Tick the clock forward enough to trigger the player to be "ready".
	  this.clock.tick(1);
	  assert.ok(this.player.hasClass('vjs-quality-menu'), 'the plugin adds a class to the player');
	});
	QUnit__default["default"].test('Groups QualityLevels by bitrate when useResolutionLabels is false', function (assert) {
	  this.player.qualityMenu({
	    useResolutionLabels: false
	  });
	  // Tick the clock forward enough to trigger the player to be "ready".
	  this.clock.tick(1);
	  const levels = this.player.qualityLevels();
	  const button = this.player.getChild('controlBar').getChild('QualityMenuButton');
	  assert.equal(button.items.length, 0, 'no menu items when empty quality level list');
	  levels.addQualityLevel({
	    id: '1',
	    bandwidth: 2000001,
	    width: 500,
	    height: 500,
	    enabled: () => {}
	  });
	  levels.addQualityLevel({
	    id: '2',
	    bandwidth: 3000001,
	    width: 600,
	    height: 600,
	    enabled: () => {}
	  });
	  levels.addQualityLevel({
	    id: '3',
	    bandwidth: 19999,
	    width: 300,
	    height: 300,
	    enabled: () => {}
	  });
	  levels.addQualityLevel({
	    id: '4',
	    bandwidth: 1111,
	    width: 200,
	    height: 200,
	    enabled: () => {}
	  });
	  assert.equal(button.items.length, 3, 'created 3 menu items');
	  assert.equal(button.items[0].controlText(), 'High Definition', 'HD element');
	  assert.deepEqual(button.items[0].levels_, [0, 1], 'HD variants added to HD menu item');
	  assert.equal(button.items[1].controlText(), 'Standard Definition', 'SD element');
	  assert.deepEqual(button.items[1].levels_, [2, 3], 'SD variants added to SD menu item');
	  assert.equal(button.items[2].controlText(), 'Auto', 'Auto element');
	  assert.deepEqual(button.items[2].levels_, [0, 1, 2, 3], 'all variants added to Auto menu item');
	});
	QUnit__default["default"].test('Groups QualityLevels by resolution by default', function (assert) {
	  this.player.qualityMenu();
	  // Tick the clock forward enough to trigger the player to be "ready".
	  this.clock.tick(1);
	  const levels = this.player.qualityLevels();
	  const button = this.player.getChild('controlBar').getChild('QualityMenuButton');
	  assert.equal(button.items.length, 0, 'no menu items when empty quality level list');
	  levels.addQualityLevel({
	    id: '1',
	    bandwidth: 2000001,
	    width: 500,
	    height: 500,
	    enabled: () => {}
	  });
	  levels.addQualityLevel({
	    id: '2',
	    bandwidth: 3000001,
	    width: 600,
	    height: 600,
	    enabled: () => {}
	  });
	  levels.addQualityLevel({
	    id: '3',
	    bandwidth: 19999,
	    width: 300,
	    height: 300,
	    enabled: () => {}
	  });
	  levels.addQualityLevel({
	    id: '4',
	    bandwidth: 1111,
	    width: 200,
	    height: 200,
	    enabled: () => {}
	  });
	  assert.equal(button.items.length, 5, 'created 5 menu items');
	  assert.equal(button.items[0].controlText(), '600p', '600p');
	  assert.deepEqual(button.items[0].levels_, [1], '600p variants added to 600p menu item');
	  assert.equal(button.items[1].controlText(), '500p', '500p');
	  assert.deepEqual(button.items[1].levels_, [0], '500p variants added to 500p menu item');
	  assert.equal(button.items[2].controlText(), '300p', '300p');
	  assert.deepEqual(button.items[2].levels_, [2], '300p variants added to 300p menu item');
	  assert.equal(button.items[3].controlText(), '200p', '200p');
	  assert.deepEqual(button.items[3].levels_, [3], '200p variants added to 200p menu item');
	  assert.equal(button.items[4].controlText(), 'Auto', 'Auto');
	  assert.deepEqual(button.items[4].levels_, [0, 1, 2, 3], 'Auto variants added to Auto menu item');
	});
	QUnit__default["default"].test('Dispalys bitrate along with resolution when resolutionLabelBitrates option', function (assert) {
	  this.player.qualityMenu({
	    resolutionLabelBitrates: true
	  });
	  // Tick the clock forward enough to trigger the player to be "ready".
	  this.clock.tick(1);
	  const levels = this.player.qualityLevels();
	  const button = this.player.getChild('controlBar').getChild('QualityMenuButton');
	  assert.equal(button.items.length, 0, 'no menu items when empty quality level list');
	  levels.addQualityLevel({
	    id: '1',
	    bandwidth: 2000001,
	    width: 500,
	    height: 500,
	    enabled: () => {}
	  });
	  levels.addQualityLevel({
	    id: '2',
	    bandwidth: 3000001,
	    width: 600,
	    height: 600,
	    enabled: () => {}
	  });
	  levels.addQualityLevel({
	    id: '3',
	    bandwidth: 19999,
	    width: 300,
	    height: 300,
	    enabled: () => {}
	  });
	  levels.addQualityLevel({
	    id: '4',
	    bandwidth: 1111,
	    width: 200,
	    height: 200,
	    enabled: () => {}
	  });
	  assert.equal(button.items.length, 5, 'created 5 menu items');
	  assert.equal(button.items[0].controlText(), '600p @ 3000 kbps', '600p @ 3000 kbps');
	  assert.deepEqual(button.items[0].levels_, [1], '600p variants added to 600p menu item');
	  assert.equal(button.items[1].controlText(), '500p @ 2000 kbps', '500p @ 2000 kbps');
	  assert.deepEqual(button.items[1].levels_, [0], '500p variants added to 500p menu item');
	  assert.equal(button.items[2].controlText(), '300p @ 20 kbps', '300p @ 20 kbps');
	  assert.deepEqual(button.items[2].levels_, [2], '300p variants added to 300p menu item');
	  assert.equal(button.items[3].controlText(), '200p @ 1 kbps', '200p @ 1 kbps');
	  assert.deepEqual(button.items[3].levels_, [3], '200p variants added to 200p menu item');
	  assert.equal(button.items[4].controlText(), 'Auto', 'Auto');
	  assert.deepEqual(button.items[4].levels_, [0, 1, 2, 3], 'Auto variants added to Auto menu item');
	});
	QUnit__default["default"].test('Falls back to grouping by bitrate when no resolution info is available', function (assert) {
	  this.player.qualityMenu({
	    useResolutionLabels: true
	  });
	  // Tick the clock forward enough to trigger the player to be "ready".
	  this.clock.tick(1);
	  const levels = this.player.qualityLevels();
	  const button = this.player.getChild('controlBar').getChild('QualityMenuButton');
	  assert.equal(button.items.length, 0, 'no menu items when empty quality level list');
	  levels.addQualityLevel({
	    id: '1',
	    bandwidth: 2000001,
	    width: 500,
	    height: 500,
	    enabled: () => {}
	  });
	  levels.addQualityLevel({
	    id: '2',
	    bandwidth: 3000001,
	    width: 600,
	    height: 600,
	    enabled: () => {}
	  });
	  levels.addQualityLevel({
	    id: '3',
	    bandwidth: 19999,
	    width: 300,
	    height: 300,
	    enabled: () => {}
	  });
	  // No resolution info available in this level.
	  levels.addQualityLevel({
	    id: '4',
	    bandwidth: 1111,
	    enabled: () => {}
	  });
	  assert.equal(button.items.length, 3, 'created 3 menu items');
	  assert.equal(button.items[0].controlText(), 'High Definition', 'HD');
	  assert.deepEqual(button.items[0].levels_, [0, 1], 'HD variants added to HD menu item');
	  assert.equal(button.items[1].controlText(), 'Standard Definition', 'SD');
	  assert.deepEqual(button.items[1].levels_, [2, 3], 'SD variants added to SD menu item');
	  assert.equal(button.items[2].controlText(), 'Auto', 'Auto');
	  assert.deepEqual(button.items[2].levels_, [0, 1, 2, 3], 'Auto variants added to Auto menu item');
	});
	QUnit__default["default"].test('Attaches HD flag when an HD rendition is selected', function (assert) {
	  this.player.qualityMenu({
	    sdBitrateLimit: 100,
	    useResolutionLabels: false
	  });
	  // Tick the clock forward enough to trigger the player to be "ready".
	  this.clock.tick(1);
	  const levels = this.player.qualityLevels();
	  const button = this.player.getChild('controlBar').getChild('QualityMenuButton');
	  const menuContentElement = button.el().getElementsByTagName('ul')[0];
	  assert.equal(menuContentElement.children.length, 0, 'no menu items when empty quality level list');
	  levels.addQualityLevel({
	    id: '1',
	    bandwidth: 101,
	    width: 500,
	    height: 500,
	    enabled: () => {}
	  });
	  levels.addQualityLevel({
	    id: '2',
	    bandwidth: 99,
	    width: 100,
	    height: 100,
	    enabled: () => {}
	  });
	  assert.ok(!button.hasClass('vjs-quality-menu-button-HD-flag'), 'no hd flag when hd not selected');
	  levels.selectedIndex_ = 0;
	  videojs__default["default"].trigger(levels, 'change');
	  assert.ok(button.hasClass('vjs-quality-menu-button-HD-flag'), 'added hd flag');
	  levels.selectedIndex_ = 1;
	  videojs__default["default"].trigger(levels, 'change');
	  assert.ok(!button.hasClass('vjs-quality-menu-button-HD-flag'), 'no hd flag when hd not selected');
	});
	QUnit__default["default"].test('Passing default quality level reverts to auto if desired level is not found', function (assert) {
	  this.player.qualityMenu({
	    sdBitrateLimit: 100,
	    useResolutionLabels: false,
	    defaultResolution: 'HQ'
	  });
	  // Tick the clock forward enough to trigger the player to be "ready".
	  this.clock.tick(1);
	  const levels = this.player.qualityLevels();
	  const button = this.player.getChild('controlBar').getChild('QualityMenuButton');
	  const enabled = [true, true, true, true];
	  levels.addQualityLevel({
	    id: '0',
	    bandwidth: 102,
	    width: 500,
	    height: 500,
	    enabled: enable => {
	      if (typeof enable === 'undefined') {
	        return enabled[0];
	      }
	      enabled[0] = enable;
	      return enable;
	    }
	  });
	  levels.addQualityLevel({
	    id: '1',
	    bandwidth: 101,
	    width: 400,
	    height: 400,
	    enabled: enable => {
	      if (typeof enable === 'undefined') {
	        return enabled[1];
	      }
	      enabled[1] = enable;
	      return enable;
	    }
	  });
	  levels.addQualityLevel({
	    id: '2',
	    bandwidth: 99,
	    width: 200,
	    height: 200,
	    enabled: enable => {
	      if (typeof enable === 'undefined') {
	        return enabled[2];
	      }
	      enabled[2] = enable;
	      return enable;
	    }
	  });
	  levels.addQualityLevel({
	    id: '3',
	    bandwidth: 98,
	    width: 100,
	    height: 100,
	    enabled: enable => {
	      if (typeof enable === 'undefined') {
	        return enabled[3];
	      }
	      enabled[3] = enable;
	      return enable;
	    }
	  });
	  const items = button.items;
	  assert.equal(items.length, 3, '3 menu items, auto, sd, hd');
	  levels.selectedIndex_ = 2;
	  videojs__default["default"].trigger(levels, 'change');
	  assert.ok(!items[1].hasClass('vjs-selected'), 'sd menu item not selected');
	  assert.ok(items[items.length - 1].hasClass('vjs-selected'), 'auto menu item selected');
	  assert.ok(!items[0].hasClass('vjs-selected'), 'hd menu item not selected');
	  assert.ok(levels[0].enabled, 'all levels enabled');
	  assert.ok(levels[1].enabled, 'all levels enabled');
	  assert.ok(levels[2].enabled, 'all levels enabled');
	  assert.ok(levels[3].enabled, 'all levels enabled');
	});
	QUnit__default["default"].test('Passing default "HD/SD" quality level selects correct starting level', function (assert) {
	  this.player.qualityMenu({
	    sdBitrateLimit: 100,
	    useResolutionLabels: false,
	    defaultResolution: 'HD'
	  });
	  // Tick the clock forward enough to trigger the player to be "ready".
	  this.clock.tick(1);
	  const levels = this.player.qualityLevels();
	  const button = this.player.getChild('controlBar').getChild('QualityMenuButton');
	  const enabled = [true, true, true, true];
	  levels.addQualityLevel({
	    id: '0',
	    bandwidth: 102,
	    width: 500,
	    height: 500,
	    enabled: enable => {
	      if (typeof enable === 'undefined') {
	        return enabled[0];
	      }
	      enabled[0] = enable;
	      return enable;
	    }
	  });
	  levels.addQualityLevel({
	    id: '1',
	    bandwidth: 101,
	    width: 400,
	    height: 400,
	    enabled: enable => {
	      if (typeof enable === 'undefined') {
	        return enabled[1];
	      }
	      enabled[1] = enable;
	      return enable;
	    }
	  });
	  levels.addQualityLevel({
	    id: '2',
	    bandwidth: 99,
	    width: 200,
	    height: 200,
	    enabled: enable => {
	      if (typeof enable === 'undefined') {
	        return enabled[2];
	      }
	      enabled[2] = enable;
	      return enable;
	    }
	  });
	  levels.addQualityLevel({
	    id: '3',
	    bandwidth: 98,
	    width: 100,
	    height: 100,
	    enabled: enable => {
	      if (typeof enable === 'undefined') {
	        return enabled[3];
	      }
	      enabled[3] = enable;
	      return enable;
	    }
	  });
	  levels.selectedIndex_ = 3;
	  videojs__default["default"].trigger(levels, 'change');
	  const items = button.items;
	  assert.equal(items.length, 3, '3 menu items, auto, sd, hd');
	  assert.ok(items[0].hasClass('vjs-selected'), 'HD menu item selected at start');
	  assert.equal(items[0].options_.label, 'HD', 'HD menu item selected at start');
	  assert.ok(levels[0].enabled, 'HD levels enabled');
	  assert.ok(levels[1].enabled, 'HD levels enabled');
	  assert.ok(!levels[2].enabled, 'SD levels not enabled');
	  assert.ok(!levels[3].enabled, 'auto levels not enabled');
	});
	QUnit__default["default"].test('Passing default resolution quality level selects correct starting level', function (assert) {
	  this.player.qualityMenu({
	    sdBitrateLimit: 100,
	    useResolutionLabels: true,
	    defaultResolution: '500'
	  });
	  // Tick the clock forward enough to trigger the player to be "ready".
	  this.clock.tick(1);
	  const levels = this.player.qualityLevels();
	  const button = this.player.getChild('controlBar').getChild('QualityMenuButton');
	  const enabled = [true, true, true, true];
	  levels.addQualityLevel({
	    id: '0',
	    bandwidth: 102,
	    width: 500,
	    height: 500,
	    enabled: enable => {
	      if (typeof enable === 'undefined') {
	        return enabled[0];
	      }
	      enabled[0] = enable;
	      return enable;
	    }
	  });
	  levels.addQualityLevel({
	    id: '1',
	    bandwidth: 101,
	    width: 400,
	    height: 400,
	    enabled: enable => {
	      if (typeof enable === 'undefined') {
	        return enabled[1];
	      }
	      enabled[1] = enable;
	      return enable;
	    }
	  });
	  levels.addQualityLevel({
	    id: '2',
	    bandwidth: 99,
	    width: 200,
	    height: 200,
	    enabled: enable => {
	      if (typeof enable === 'undefined') {
	        return enabled[2];
	      }
	      enabled[2] = enable;
	      return enable;
	    }
	  });
	  levels.addQualityLevel({
	    id: '3',
	    bandwidth: 98,
	    width: 100,
	    height: 100,
	    enabled: enable => {
	      if (typeof enable === 'undefined') {
	        return enabled[3];
	      }
	      enabled[3] = enable;
	      return enable;
	    }
	  });
	  levels.selectedIndex_ = 3;
	  videojs__default["default"].trigger(levels, 'change');
	  const items = button.items;
	  assert.equal(items.length, 5, '5 menu items, auto, 100, 200, 400, 500');
	  assert.ok(items[0].hasClass('vjs-selected'), 'HD menu item selected at start');
	  assert.equal(items[0].options_.label, '500p', 'HD menu item selected at start');
	  assert.ok(levels[0].enabled, '500p levels enabled');
	  assert.ok(!levels[1].enabled, '400p levels not enabled');
	  assert.ok(!levels[2].enabled, '200p levels not enabled');
	  assert.ok(!levels[3].enabled, '100p levels not enabled');
	});
	QUnit__default["default"].test('Clicking menu item calls quality level enabled functions', function (assert) {
	  this.player.qualityMenu({
	    sdBitrateLimit: 100,
	    useResolutionLabels: false
	  });
	  // Tick the clock forward enough to trigger the player to be "ready".
	  this.clock.tick(1);
	  const levels = this.player.qualityLevels();
	  const button = this.player.getChild('controlBar').getChild('QualityMenuButton');
	  const enabled = [true, true, true, true];
	  levels.addQualityLevel({
	    id: '0',
	    bandwidth: 102,
	    width: 500,
	    height: 500,
	    enabled: enable => {
	      if (typeof enable === 'undefined') {
	        return enabled[0];
	      }
	      enabled[0] = enable;
	      return enable;
	    }
	  });
	  levels.addQualityLevel({
	    id: '1',
	    bandwidth: 101,
	    width: 400,
	    height: 400,
	    enabled: enable => {
	      if (typeof enable === 'undefined') {
	        return enabled[1];
	      }
	      enabled[1] = enable;
	      return enable;
	    }
	  });
	  levels.addQualityLevel({
	    id: '2',
	    bandwidth: 99,
	    width: 200,
	    height: 200,
	    enabled: enable => {
	      if (typeof enable === 'undefined') {
	        return enabled[2];
	      }
	      enabled[2] = enable;
	      return enable;
	    }
	  });
	  levels.addQualityLevel({
	    id: '3',
	    bandwidth: 98,
	    width: 100,
	    height: 100,
	    enabled: enable => {
	      if (typeof enable === 'undefined') {
	        return enabled[3];
	      }
	      enabled[3] = enable;
	      return enable;
	    }
	  });
	  levels.selectedIndex_ = 3;
	  videojs__default["default"].trigger(levels, 'change');
	  const items = button.items;
	  assert.equal(items.length, 3, '3 menu items, auto, sd, hd');
	  assert.ok(items[items.length - 1].hasClass('vjs-selected'), 'auto menu item selected at start');
	  assert.equal(items[items.length - 1].options_.label, 'Auto', 'auto menu item selected at start');

	  // click hd menu item
	  videojs__default["default"].trigger(items[0].el(), 'click');
	  levels.selectedIndex_ = 0;
	  videojs__default["default"].trigger(levels, 'change');
	  assert.ok(!items[items.length - 1].hasClass('vjs-selected'), 'auto menu item no longer selected');
	  assert.ok(!items[1].hasClass('vjs-selected'), 'sd menu item not selected');
	  assert.ok(items[0].hasClass('vjs-selected'), 'hd menu item selected');
	  assert.ok(levels[0].enabled, 'hd level is enabled');
	  assert.ok(levels[1].enabled, 'hd level is enabled');
	  assert.ok(!levels[2].enabled, 'non hd level disabled');
	  assert.ok(!levels[3].enabled, 'non hd level disabled');

	  // click sd menu item
	  videojs__default["default"].trigger(items[1].el(), 'click');
	  levels.selectedIndex_ = 3;
	  videojs__default["default"].trigger(levels, 'change');
	  assert.ok(items[1].hasClass('vjs-selected'), 'sd menu item selected');
	  assert.ok(!items[items.length - 1].hasClass('vjs-selected'), 'auto menu item not selected');
	  assert.ok(!items[0].hasClass('vjs-selected'), 'hd menu item not selected');
	  assert.ok(levels[2].enabled, 'sd level is enabled');
	  assert.ok(levels[3].enabled, 'sd level is enabled');
	  assert.ok(!levels[0].enabled, 'non sd level disabled');
	  assert.ok(!levels[1].enabled, 'non sd level disabled');

	  // click auto menu item
	  videojs__default["default"].trigger(items[items.length - 1].el(), 'click');
	  levels.selectedIndex_ = 2;
	  videojs__default["default"].trigger(levels, 'change');
	  assert.ok(!items[1].hasClass('vjs-selected'), 'sd menu item not selected');
	  assert.ok(items[items.length - 1].hasClass('vjs-selected'), 'auto menu item selected');
	  assert.ok(!items[0].hasClass('vjs-selected'), 'hd menu item not selected');
	  assert.ok(levels[0].enabled, 'all levels enabled');
	  assert.ok(levels[1].enabled, 'all levels enabled');
	  assert.ok(levels[2].enabled, 'all levels enabled');
	  assert.ok(levels[3].enabled, 'all levels enabled');
	});

})(QUnit, sinon, videojs);
