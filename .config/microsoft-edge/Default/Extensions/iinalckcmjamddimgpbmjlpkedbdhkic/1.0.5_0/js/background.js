!function() {
    function e(t, n, r) {
        function i(c, a) {
            if (!n[c]) {
                if (!t[c]) {
                    var s = "function" == typeof require && require;
                    if (!a && s) return s(c, !0);
                    if (o) return o(c, !0);
                    var u = new Error("Cannot find module '" + c + "'");
                    throw u.code = "MODULE_NOT_FOUND", u;
                }
                var l = n[c] = {
                    exports: {}
                };
                t[c][0].call(l.exports, (function(e) {
                    var n;
                    return i(t[c][1][e] || e);
                }), l, l.exports, e, t, n, r);
            }
            return n[c].exports;
        }
        for (var o = "function" == typeof require && require, c = 0; c < r.length; c++) i(r[c]);
        return i;
    }
    return e;
}()({
    1: [ function(e, t, n) {
        "use strict";
        function r(e) {
            if (e) throw e;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.bail = r;
    }, {} ],
    2: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.characterEntities = void 0;
        const r = {
            AElig: "Æ",
            AMP: "&",
            Aacute: "Á",
            Abreve: "Ă",
            Acirc: "Â",
            Acy: "А",
            Afr: "𝔄",
            Agrave: "À",
            Alpha: "Α",
            Amacr: "Ā",
            And: "⩓",
            Aogon: "Ą",
            Aopf: "𝔸",
            ApplyFunction: "⁡",
            Aring: "Å",
            Ascr: "𝒜",
            Assign: "≔",
            Atilde: "Ã",
            Auml: "Ä",
            Backslash: "∖",
            Barv: "⫧",
            Barwed: "⌆",
            Bcy: "Б",
            Because: "∵",
            Bernoullis: "ℬ",
            Beta: "Β",
            Bfr: "𝔅",
            Bopf: "𝔹",
            Breve: "˘",
            Bscr: "ℬ",
            Bumpeq: "≎",
            CHcy: "Ч",
            COPY: "©",
            Cacute: "Ć",
            Cap: "⋒",
            CapitalDifferentialD: "ⅅ",
            Cayleys: "ℭ",
            Ccaron: "Č",
            Ccedil: "Ç",
            Ccirc: "Ĉ",
            Cconint: "∰",
            Cdot: "Ċ",
            Cedilla: "¸",
            CenterDot: "·",
            Cfr: "ℭ",
            Chi: "Χ",
            CircleDot: "⊙",
            CircleMinus: "⊖",
            CirclePlus: "⊕",
            CircleTimes: "⊗",
            ClockwiseContourIntegral: "∲",
            CloseCurlyDoubleQuote: "”",
            CloseCurlyQuote: "’",
            Colon: "∷",
            Colone: "⩴",
            Congruent: "≡",
            Conint: "∯",
            ContourIntegral: "∮",
            Copf: "ℂ",
            Coproduct: "∐",
            CounterClockwiseContourIntegral: "∳",
            Cross: "⨯",
            Cscr: "𝒞",
            Cup: "⋓",
            CupCap: "≍",
            DD: "ⅅ",
            DDotrahd: "⤑",
            DJcy: "Ђ",
            DScy: "Ѕ",
            DZcy: "Џ",
            Dagger: "‡",
            Darr: "↡",
            Dashv: "⫤",
            Dcaron: "Ď",
            Dcy: "Д",
            Del: "∇",
            Delta: "Δ",
            Dfr: "𝔇",
            DiacriticalAcute: "´",
            DiacriticalDot: "˙",
            DiacriticalDoubleAcute: "˝",
            DiacriticalGrave: "`",
            DiacriticalTilde: "˜",
            Diamond: "⋄",
            DifferentialD: "ⅆ",
            Dopf: "𝔻",
            Dot: "¨",
            DotDot: "⃜",
            DotEqual: "≐",
            DoubleContourIntegral: "∯",
            DoubleDot: "¨",
            DoubleDownArrow: "⇓",
            DoubleLeftArrow: "⇐",
            DoubleLeftRightArrow: "⇔",
            DoubleLeftTee: "⫤",
            DoubleLongLeftArrow: "⟸",
            DoubleLongLeftRightArrow: "⟺",
            DoubleLongRightArrow: "⟹",
            DoubleRightArrow: "⇒",
            DoubleRightTee: "⊨",
            DoubleUpArrow: "⇑",
            DoubleUpDownArrow: "⇕",
            DoubleVerticalBar: "∥",
            DownArrow: "↓",
            DownArrowBar: "⤓",
            DownArrowUpArrow: "⇵",
            DownBreve: "̑",
            DownLeftRightVector: "⥐",
            DownLeftTeeVector: "⥞",
            DownLeftVector: "↽",
            DownLeftVectorBar: "⥖",
            DownRightTeeVector: "⥟",
            DownRightVector: "⇁",
            DownRightVectorBar: "⥗",
            DownTee: "⊤",
            DownTeeArrow: "↧",
            Downarrow: "⇓",
            Dscr: "𝒟",
            Dstrok: "Đ",
            ENG: "Ŋ",
            ETH: "Ð",
            Eacute: "É",
            Ecaron: "Ě",
            Ecirc: "Ê",
            Ecy: "Э",
            Edot: "Ė",
            Efr: "𝔈",
            Egrave: "È",
            Element: "∈",
            Emacr: "Ē",
            EmptySmallSquare: "◻",
            EmptyVerySmallSquare: "▫",
            Eogon: "Ę",
            Eopf: "𝔼",
            Epsilon: "Ε",
            Equal: "⩵",
            EqualTilde: "≂",
            Equilibrium: "⇌",
            Escr: "ℰ",
            Esim: "⩳",
            Eta: "Η",
            Euml: "Ë",
            Exists: "∃",
            ExponentialE: "ⅇ",
            Fcy: "Ф",
            Ffr: "𝔉",
            FilledSmallSquare: "◼",
            FilledVerySmallSquare: "▪",
            Fopf: "𝔽",
            ForAll: "∀",
            Fouriertrf: "ℱ",
            Fscr: "ℱ",
            GJcy: "Ѓ",
            GT: ">",
            Gamma: "Γ",
            Gammad: "Ϝ",
            Gbreve: "Ğ",
            Gcedil: "Ģ",
            Gcirc: "Ĝ",
            Gcy: "Г",
            Gdot: "Ġ",
            Gfr: "𝔊",
            Gg: "⋙",
            Gopf: "𝔾",
            GreaterEqual: "≥",
            GreaterEqualLess: "⋛",
            GreaterFullEqual: "≧",
            GreaterGreater: "⪢",
            GreaterLess: "≷",
            GreaterSlantEqual: "⩾",
            GreaterTilde: "≳",
            Gscr: "𝒢",
            Gt: "≫",
            HARDcy: "Ъ",
            Hacek: "ˇ",
            Hat: "^",
            Hcirc: "Ĥ",
            Hfr: "ℌ",
            HilbertSpace: "ℋ",
            Hopf: "ℍ",
            HorizontalLine: "─",
            Hscr: "ℋ",
            Hstrok: "Ħ",
            HumpDownHump: "≎",
            HumpEqual: "≏",
            IEcy: "Е",
            IJlig: "Ĳ",
            IOcy: "Ё",
            Iacute: "Í",
            Icirc: "Î",
            Icy: "И",
            Idot: "İ",
            Ifr: "ℑ",
            Igrave: "Ì",
            Im: "ℑ",
            Imacr: "Ī",
            ImaginaryI: "ⅈ",
            Implies: "⇒",
            Int: "∬",
            Integral: "∫",
            Intersection: "⋂",
            InvisibleComma: "⁣",
            InvisibleTimes: "⁢",
            Iogon: "Į",
            Iopf: "𝕀",
            Iota: "Ι",
            Iscr: "ℐ",
            Itilde: "Ĩ",
            Iukcy: "І",
            Iuml: "Ï",
            Jcirc: "Ĵ",
            Jcy: "Й",
            Jfr: "𝔍",
            Jopf: "𝕁",
            Jscr: "𝒥",
            Jsercy: "Ј",
            Jukcy: "Є",
            KHcy: "Х",
            KJcy: "Ќ",
            Kappa: "Κ",
            Kcedil: "Ķ",
            Kcy: "К",
            Kfr: "𝔎",
            Kopf: "𝕂",
            Kscr: "𝒦",
            LJcy: "Љ",
            LT: "<",
            Lacute: "Ĺ",
            Lambda: "Λ",
            Lang: "⟪",
            Laplacetrf: "ℒ",
            Larr: "↞",
            Lcaron: "Ľ",
            Lcedil: "Ļ",
            Lcy: "Л",
            LeftAngleBracket: "⟨",
            LeftArrow: "←",
            LeftArrowBar: "⇤",
            LeftArrowRightArrow: "⇆",
            LeftCeiling: "⌈",
            LeftDoubleBracket: "⟦",
            LeftDownTeeVector: "⥡",
            LeftDownVector: "⇃",
            LeftDownVectorBar: "⥙",
            LeftFloor: "⌊",
            LeftRightArrow: "↔",
            LeftRightVector: "⥎",
            LeftTee: "⊣",
            LeftTeeArrow: "↤",
            LeftTeeVector: "⥚",
            LeftTriangle: "⊲",
            LeftTriangleBar: "⧏",
            LeftTriangleEqual: "⊴",
            LeftUpDownVector: "⥑",
            LeftUpTeeVector: "⥠",
            LeftUpVector: "↿",
            LeftUpVectorBar: "⥘",
            LeftVector: "↼",
            LeftVectorBar: "⥒",
            Leftarrow: "⇐",
            Leftrightarrow: "⇔",
            LessEqualGreater: "⋚",
            LessFullEqual: "≦",
            LessGreater: "≶",
            LessLess: "⪡",
            LessSlantEqual: "⩽",
            LessTilde: "≲",
            Lfr: "𝔏",
            Ll: "⋘",
            Lleftarrow: "⇚",
            Lmidot: "Ŀ",
            LongLeftArrow: "⟵",
            LongLeftRightArrow: "⟷",
            LongRightArrow: "⟶",
            Longleftarrow: "⟸",
            Longleftrightarrow: "⟺",
            Longrightarrow: "⟹",
            Lopf: "𝕃",
            LowerLeftArrow: "↙",
            LowerRightArrow: "↘",
            Lscr: "ℒ",
            Lsh: "↰",
            Lstrok: "Ł",
            Lt: "≪",
            Map: "⤅",
            Mcy: "М",
            MediumSpace: " ",
            Mellintrf: "ℳ",
            Mfr: "𝔐",
            MinusPlus: "∓",
            Mopf: "𝕄",
            Mscr: "ℳ",
            Mu: "Μ",
            NJcy: "Њ",
            Nacute: "Ń",
            Ncaron: "Ň",
            Ncedil: "Ņ",
            Ncy: "Н",
            NegativeMediumSpace: "​",
            NegativeThickSpace: "​",
            NegativeThinSpace: "​",
            NegativeVeryThinSpace: "​",
            NestedGreaterGreater: "≫",
            NestedLessLess: "≪",
            NewLine: "\n",
            Nfr: "𝔑",
            NoBreak: "⁠",
            NonBreakingSpace: " ",
            Nopf: "ℕ",
            Not: "⫬",
            NotCongruent: "≢",
            NotCupCap: "≭",
            NotDoubleVerticalBar: "∦",
            NotElement: "∉",
            NotEqual: "≠",
            NotEqualTilde: "≂̸",
            NotExists: "∄",
            NotGreater: "≯",
            NotGreaterEqual: "≱",
            NotGreaterFullEqual: "≧̸",
            NotGreaterGreater: "≫̸",
            NotGreaterLess: "≹",
            NotGreaterSlantEqual: "⩾̸",
            NotGreaterTilde: "≵",
            NotHumpDownHump: "≎̸",
            NotHumpEqual: "≏̸",
            NotLeftTriangle: "⋪",
            NotLeftTriangleBar: "⧏̸",
            NotLeftTriangleEqual: "⋬",
            NotLess: "≮",
            NotLessEqual: "≰",
            NotLessGreater: "≸",
            NotLessLess: "≪̸",
            NotLessSlantEqual: "⩽̸",
            NotLessTilde: "≴",
            NotNestedGreaterGreater: "⪢̸",
            NotNestedLessLess: "⪡̸",
            NotPrecedes: "⊀",
            NotPrecedesEqual: "⪯̸",
            NotPrecedesSlantEqual: "⋠",
            NotReverseElement: "∌",
            NotRightTriangle: "⋫",
            NotRightTriangleBar: "⧐̸",
            NotRightTriangleEqual: "⋭",
            NotSquareSubset: "⊏̸",
            NotSquareSubsetEqual: "⋢",
            NotSquareSuperset: "⊐̸",
            NotSquareSupersetEqual: "⋣",
            NotSubset: "⊂⃒",
            NotSubsetEqual: "⊈",
            NotSucceeds: "⊁",
            NotSucceedsEqual: "⪰̸",
            NotSucceedsSlantEqual: "⋡",
            NotSucceedsTilde: "≿̸",
            NotSuperset: "⊃⃒",
            NotSupersetEqual: "⊉",
            NotTilde: "≁",
            NotTildeEqual: "≄",
            NotTildeFullEqual: "≇",
            NotTildeTilde: "≉",
            NotVerticalBar: "∤",
            Nscr: "𝒩",
            Ntilde: "Ñ",
            Nu: "Ν",
            OElig: "Œ",
            Oacute: "Ó",
            Ocirc: "Ô",
            Ocy: "О",
            Odblac: "Ő",
            Ofr: "𝔒",
            Ograve: "Ò",
            Omacr: "Ō",
            Omega: "Ω",
            Omicron: "Ο",
            Oopf: "𝕆",
            OpenCurlyDoubleQuote: "“",
            OpenCurlyQuote: "‘",
            Or: "⩔",
            Oscr: "𝒪",
            Oslash: "Ø",
            Otilde: "Õ",
            Otimes: "⨷",
            Ouml: "Ö",
            OverBar: "‾",
            OverBrace: "⏞",
            OverBracket: "⎴",
            OverParenthesis: "⏜",
            PartialD: "∂",
            Pcy: "П",
            Pfr: "𝔓",
            Phi: "Φ",
            Pi: "Π",
            PlusMinus: "±",
            Poincareplane: "ℌ",
            Popf: "ℙ",
            Pr: "⪻",
            Precedes: "≺",
            PrecedesEqual: "⪯",
            PrecedesSlantEqual: "≼",
            PrecedesTilde: "≾",
            Prime: "″",
            Product: "∏",
            Proportion: "∷",
            Proportional: "∝",
            Pscr: "𝒫",
            Psi: "Ψ",
            QUOT: '"',
            Qfr: "𝔔",
            Qopf: "ℚ",
            Qscr: "𝒬",
            RBarr: "⤐",
            REG: "®",
            Racute: "Ŕ",
            Rang: "⟫",
            Rarr: "↠",
            Rarrtl: "⤖",
            Rcaron: "Ř",
            Rcedil: "Ŗ",
            Rcy: "Р",
            Re: "ℜ",
            ReverseElement: "∋",
            ReverseEquilibrium: "⇋",
            ReverseUpEquilibrium: "⥯",
            Rfr: "ℜ",
            Rho: "Ρ",
            RightAngleBracket: "⟩",
            RightArrow: "→",
            RightArrowBar: "⇥",
            RightArrowLeftArrow: "⇄",
            RightCeiling: "⌉",
            RightDoubleBracket: "⟧",
            RightDownTeeVector: "⥝",
            RightDownVector: "⇂",
            RightDownVectorBar: "⥕",
            RightFloor: "⌋",
            RightTee: "⊢",
            RightTeeArrow: "↦",
            RightTeeVector: "⥛",
            RightTriangle: "⊳",
            RightTriangleBar: "⧐",
            RightTriangleEqual: "⊵",
            RightUpDownVector: "⥏",
            RightUpTeeVector: "⥜",
            RightUpVector: "↾",
            RightUpVectorBar: "⥔",
            RightVector: "⇀",
            RightVectorBar: "⥓",
            Rightarrow: "⇒",
            Ropf: "ℝ",
            RoundImplies: "⥰",
            Rrightarrow: "⇛",
            Rscr: "ℛ",
            Rsh: "↱",
            RuleDelayed: "⧴",
            SHCHcy: "Щ",
            SHcy: "Ш",
            SOFTcy: "Ь",
            Sacute: "Ś",
            Sc: "⪼",
            Scaron: "Š",
            Scedil: "Ş",
            Scirc: "Ŝ",
            Scy: "С",
            Sfr: "𝔖",
            ShortDownArrow: "↓",
            ShortLeftArrow: "←",
            ShortRightArrow: "→",
            ShortUpArrow: "↑",
            Sigma: "Σ",
            SmallCircle: "∘",
            Sopf: "𝕊",
            Sqrt: "√",
            Square: "□",
            SquareIntersection: "⊓",
            SquareSubset: "⊏",
            SquareSubsetEqual: "⊑",
            SquareSuperset: "⊐",
            SquareSupersetEqual: "⊒",
            SquareUnion: "⊔",
            Sscr: "𝒮",
            Star: "⋆",
            Sub: "⋐",
            Subset: "⋐",
            SubsetEqual: "⊆",
            Succeeds: "≻",
            SucceedsEqual: "⪰",
            SucceedsSlantEqual: "≽",
            SucceedsTilde: "≿",
            SuchThat: "∋",
            Sum: "∑",
            Sup: "⋑",
            Superset: "⊃",
            SupersetEqual: "⊇",
            Supset: "⋑",
            THORN: "Þ",
            TRADE: "™",
            TSHcy: "Ћ",
            TScy: "Ц",
            Tab: "\t",
            Tau: "Τ",
            Tcaron: "Ť",
            Tcedil: "Ţ",
            Tcy: "Т",
            Tfr: "𝔗",
            Therefore: "∴",
            Theta: "Θ",
            ThickSpace: "  ",
            ThinSpace: " ",
            Tilde: "∼",
            TildeEqual: "≃",
            TildeFullEqual: "≅",
            TildeTilde: "≈",
            Topf: "𝕋",
            TripleDot: "⃛",
            Tscr: "𝒯",
            Tstrok: "Ŧ",
            Uacute: "Ú",
            Uarr: "↟",
            Uarrocir: "⥉",
            Ubrcy: "Ў",
            Ubreve: "Ŭ",
            Ucirc: "Û",
            Ucy: "У",
            Udblac: "Ű",
            Ufr: "𝔘",
            Ugrave: "Ù",
            Umacr: "Ū",
            UnderBar: "_",
            UnderBrace: "⏟",
            UnderBracket: "⎵",
            UnderParenthesis: "⏝",
            Union: "⋃",
            UnionPlus: "⊎",
            Uogon: "Ų",
            Uopf: "𝕌",
            UpArrow: "↑",
            UpArrowBar: "⤒",
            UpArrowDownArrow: "⇅",
            UpDownArrow: "↕",
            UpEquilibrium: "⥮",
            UpTee: "⊥",
            UpTeeArrow: "↥",
            Uparrow: "⇑",
            Updownarrow: "⇕",
            UpperLeftArrow: "↖",
            UpperRightArrow: "↗",
            Upsi: "ϒ",
            Upsilon: "Υ",
            Uring: "Ů",
            Uscr: "𝒰",
            Utilde: "Ũ",
            Uuml: "Ü",
            VDash: "⊫",
            Vbar: "⫫",
            Vcy: "В",
            Vdash: "⊩",
            Vdashl: "⫦",
            Vee: "⋁",
            Verbar: "‖",
            Vert: "‖",
            VerticalBar: "∣",
            VerticalLine: "|",
            VerticalSeparator: "❘",
            VerticalTilde: "≀",
            VeryThinSpace: " ",
            Vfr: "𝔙",
            Vopf: "𝕍",
            Vscr: "𝒱",
            Vvdash: "⊪",
            Wcirc: "Ŵ",
            Wedge: "⋀",
            Wfr: "𝔚",
            Wopf: "𝕎",
            Wscr: "𝒲",
            Xfr: "𝔛",
            Xi: "Ξ",
            Xopf: "𝕏",
            Xscr: "𝒳",
            YAcy: "Я",
            YIcy: "Ї",
            YUcy: "Ю",
            Yacute: "Ý",
            Ycirc: "Ŷ",
            Ycy: "Ы",
            Yfr: "𝔜",
            Yopf: "𝕐",
            Yscr: "𝒴",
            Yuml: "Ÿ",
            ZHcy: "Ж",
            Zacute: "Ź",
            Zcaron: "Ž",
            Zcy: "З",
            Zdot: "Ż",
            ZeroWidthSpace: "​",
            Zeta: "Ζ",
            Zfr: "ℨ",
            Zopf: "ℤ",
            Zscr: "𝒵",
            aacute: "á",
            abreve: "ă",
            ac: "∾",
            acE: "∾̳",
            acd: "∿",
            acirc: "â",
            acute: "´",
            acy: "а",
            aelig: "æ",
            af: "⁡",
            afr: "𝔞",
            agrave: "à",
            alefsym: "ℵ",
            aleph: "ℵ",
            alpha: "α",
            amacr: "ā",
            amalg: "⨿",
            amp: "&",
            and: "∧",
            andand: "⩕",
            andd: "⩜",
            andslope: "⩘",
            andv: "⩚",
            ang: "∠",
            ange: "⦤",
            angle: "∠",
            angmsd: "∡",
            angmsdaa: "⦨",
            angmsdab: "⦩",
            angmsdac: "⦪",
            angmsdad: "⦫",
            angmsdae: "⦬",
            angmsdaf: "⦭",
            angmsdag: "⦮",
            angmsdah: "⦯",
            angrt: "∟",
            angrtvb: "⊾",
            angrtvbd: "⦝",
            angsph: "∢",
            angst: "Å",
            angzarr: "⍼",
            aogon: "ą",
            aopf: "𝕒",
            ap: "≈",
            apE: "⩰",
            apacir: "⩯",
            ape: "≊",
            apid: "≋",
            apos: "'",
            approx: "≈",
            approxeq: "≊",
            aring: "å",
            ascr: "𝒶",
            ast: "*",
            asymp: "≈",
            asympeq: "≍",
            atilde: "ã",
            auml: "ä",
            awconint: "∳",
            awint: "⨑",
            bNot: "⫭",
            backcong: "≌",
            backepsilon: "϶",
            backprime: "‵",
            backsim: "∽",
            backsimeq: "⋍",
            barvee: "⊽",
            barwed: "⌅",
            barwedge: "⌅",
            bbrk: "⎵",
            bbrktbrk: "⎶",
            bcong: "≌",
            bcy: "б",
            bdquo: "„",
            becaus: "∵",
            because: "∵",
            bemptyv: "⦰",
            bepsi: "϶",
            bernou: "ℬ",
            beta: "β",
            beth: "ℶ",
            between: "≬",
            bfr: "𝔟",
            bigcap: "⋂",
            bigcirc: "◯",
            bigcup: "⋃",
            bigodot: "⨀",
            bigoplus: "⨁",
            bigotimes: "⨂",
            bigsqcup: "⨆",
            bigstar: "★",
            bigtriangledown: "▽",
            bigtriangleup: "△",
            biguplus: "⨄",
            bigvee: "⋁",
            bigwedge: "⋀",
            bkarow: "⤍",
            blacklozenge: "⧫",
            blacksquare: "▪",
            blacktriangle: "▴",
            blacktriangledown: "▾",
            blacktriangleleft: "◂",
            blacktriangleright: "▸",
            blank: "␣",
            blk12: "▒",
            blk14: "░",
            blk34: "▓",
            block: "█",
            bne: "=⃥",
            bnequiv: "≡⃥",
            bnot: "⌐",
            bopf: "𝕓",
            bot: "⊥",
            bottom: "⊥",
            bowtie: "⋈",
            boxDL: "╗",
            boxDR: "╔",
            boxDl: "╖",
            boxDr: "╓",
            boxH: "═",
            boxHD: "╦",
            boxHU: "╩",
            boxHd: "╤",
            boxHu: "╧",
            boxUL: "╝",
            boxUR: "╚",
            boxUl: "╜",
            boxUr: "╙",
            boxV: "║",
            boxVH: "╬",
            boxVL: "╣",
            boxVR: "╠",
            boxVh: "╫",
            boxVl: "╢",
            boxVr: "╟",
            boxbox: "⧉",
            boxdL: "╕",
            boxdR: "╒",
            boxdl: "┐",
            boxdr: "┌",
            boxh: "─",
            boxhD: "╥",
            boxhU: "╨",
            boxhd: "┬",
            boxhu: "┴",
            boxminus: "⊟",
            boxplus: "⊞",
            boxtimes: "⊠",
            boxuL: "╛",
            boxuR: "╘",
            boxul: "┘",
            boxur: "└",
            boxv: "│",
            boxvH: "╪",
            boxvL: "╡",
            boxvR: "╞",
            boxvh: "┼",
            boxvl: "┤",
            boxvr: "├",
            bprime: "‵",
            breve: "˘",
            brvbar: "¦",
            bscr: "𝒷",
            bsemi: "⁏",
            bsim: "∽",
            bsime: "⋍",
            bsol: "\\",
            bsolb: "⧅",
            bsolhsub: "⟈",
            bull: "•",
            bullet: "•",
            bump: "≎",
            bumpE: "⪮",
            bumpe: "≏",
            bumpeq: "≏",
            cacute: "ć",
            cap: "∩",
            capand: "⩄",
            capbrcup: "⩉",
            capcap: "⩋",
            capcup: "⩇",
            capdot: "⩀",
            caps: "∩︀",
            caret: "⁁",
            caron: "ˇ",
            ccaps: "⩍",
            ccaron: "č",
            ccedil: "ç",
            ccirc: "ĉ",
            ccups: "⩌",
            ccupssm: "⩐",
            cdot: "ċ",
            cedil: "¸",
            cemptyv: "⦲",
            cent: "¢",
            centerdot: "·",
            cfr: "𝔠",
            chcy: "ч",
            check: "✓",
            checkmark: "✓",
            chi: "χ",
            cir: "○",
            cirE: "⧃",
            circ: "ˆ",
            circeq: "≗",
            circlearrowleft: "↺",
            circlearrowright: "↻",
            circledR: "®",
            circledS: "Ⓢ",
            circledast: "⊛",
            circledcirc: "⊚",
            circleddash: "⊝",
            cire: "≗",
            cirfnint: "⨐",
            cirmid: "⫯",
            cirscir: "⧂",
            clubs: "♣",
            clubsuit: "♣",
            colon: ":",
            colone: "≔",
            coloneq: "≔",
            comma: ",",
            commat: "@",
            comp: "∁",
            compfn: "∘",
            complement: "∁",
            complexes: "ℂ",
            cong: "≅",
            congdot: "⩭",
            conint: "∮",
            copf: "𝕔",
            coprod: "∐",
            copy: "©",
            copysr: "℗",
            crarr: "↵",
            cross: "✗",
            cscr: "𝒸",
            csub: "⫏",
            csube: "⫑",
            csup: "⫐",
            csupe: "⫒",
            ctdot: "⋯",
            cudarrl: "⤸",
            cudarrr: "⤵",
            cuepr: "⋞",
            cuesc: "⋟",
            cularr: "↶",
            cularrp: "⤽",
            cup: "∪",
            cupbrcap: "⩈",
            cupcap: "⩆",
            cupcup: "⩊",
            cupdot: "⊍",
            cupor: "⩅",
            cups: "∪︀",
            curarr: "↷",
            curarrm: "⤼",
            curlyeqprec: "⋞",
            curlyeqsucc: "⋟",
            curlyvee: "⋎",
            curlywedge: "⋏",
            curren: "¤",
            curvearrowleft: "↶",
            curvearrowright: "↷",
            cuvee: "⋎",
            cuwed: "⋏",
            cwconint: "∲",
            cwint: "∱",
            cylcty: "⌭",
            dArr: "⇓",
            dHar: "⥥",
            dagger: "†",
            daleth: "ℸ",
            darr: "↓",
            dash: "‐",
            dashv: "⊣",
            dbkarow: "⤏",
            dblac: "˝",
            dcaron: "ď",
            dcy: "д",
            dd: "ⅆ",
            ddagger: "‡",
            ddarr: "⇊",
            ddotseq: "⩷",
            deg: "°",
            delta: "δ",
            demptyv: "⦱",
            dfisht: "⥿",
            dfr: "𝔡",
            dharl: "⇃",
            dharr: "⇂",
            diam: "⋄",
            diamond: "⋄",
            diamondsuit: "♦",
            diams: "♦",
            die: "¨",
            digamma: "ϝ",
            disin: "⋲",
            div: "÷",
            divide: "÷",
            divideontimes: "⋇",
            divonx: "⋇",
            djcy: "ђ",
            dlcorn: "⌞",
            dlcrop: "⌍",
            dollar: "$",
            dopf: "𝕕",
            dot: "˙",
            doteq: "≐",
            doteqdot: "≑",
            dotminus: "∸",
            dotplus: "∔",
            dotsquare: "⊡",
            doublebarwedge: "⌆",
            downarrow: "↓",
            downdownarrows: "⇊",
            downharpoonleft: "⇃",
            downharpoonright: "⇂",
            drbkarow: "⤐",
            drcorn: "⌟",
            drcrop: "⌌",
            dscr: "𝒹",
            dscy: "ѕ",
            dsol: "⧶",
            dstrok: "đ",
            dtdot: "⋱",
            dtri: "▿",
            dtrif: "▾",
            duarr: "⇵",
            duhar: "⥯",
            dwangle: "⦦",
            dzcy: "џ",
            dzigrarr: "⟿",
            eDDot: "⩷",
            eDot: "≑",
            eacute: "é",
            easter: "⩮",
            ecaron: "ě",
            ecir: "≖",
            ecirc: "ê",
            ecolon: "≕",
            ecy: "э",
            edot: "ė",
            ee: "ⅇ",
            efDot: "≒",
            efr: "𝔢",
            eg: "⪚",
            egrave: "è",
            egs: "⪖",
            egsdot: "⪘",
            el: "⪙",
            elinters: "⏧",
            ell: "ℓ",
            els: "⪕",
            elsdot: "⪗",
            emacr: "ē",
            empty: "∅",
            emptyset: "∅",
            emptyv: "∅",
            emsp13: " ",
            emsp14: " ",
            emsp: " ",
            eng: "ŋ",
            ensp: " ",
            eogon: "ę",
            eopf: "𝕖",
            epar: "⋕",
            eparsl: "⧣",
            eplus: "⩱",
            epsi: "ε",
            epsilon: "ε",
            epsiv: "ϵ",
            eqcirc: "≖",
            eqcolon: "≕",
            eqsim: "≂",
            eqslantgtr: "⪖",
            eqslantless: "⪕",
            equals: "=",
            equest: "≟",
            equiv: "≡",
            equivDD: "⩸",
            eqvparsl: "⧥",
            erDot: "≓",
            erarr: "⥱",
            escr: "ℯ",
            esdot: "≐",
            esim: "≂",
            eta: "η",
            eth: "ð",
            euml: "ë",
            euro: "€",
            excl: "!",
            exist: "∃",
            expectation: "ℰ",
            exponentiale: "ⅇ",
            fallingdotseq: "≒",
            fcy: "ф",
            female: "♀",
            ffilig: "ﬃ",
            fflig: "ﬀ",
            ffllig: "ﬄ",
            ffr: "𝔣",
            filig: "ﬁ",
            fjlig: "fj",
            flat: "♭",
            fllig: "ﬂ",
            fltns: "▱",
            fnof: "ƒ",
            fopf: "𝕗",
            forall: "∀",
            fork: "⋔",
            forkv: "⫙",
            fpartint: "⨍",
            frac12: "½",
            frac13: "⅓",
            frac14: "¼",
            frac15: "⅕",
            frac16: "⅙",
            frac18: "⅛",
            frac23: "⅔",
            frac25: "⅖",
            frac34: "¾",
            frac35: "⅗",
            frac38: "⅜",
            frac45: "⅘",
            frac56: "⅚",
            frac58: "⅝",
            frac78: "⅞",
            frasl: "⁄",
            frown: "⌢",
            fscr: "𝒻",
            gE: "≧",
            gEl: "⪌",
            gacute: "ǵ",
            gamma: "γ",
            gammad: "ϝ",
            gap: "⪆",
            gbreve: "ğ",
            gcirc: "ĝ",
            gcy: "г",
            gdot: "ġ",
            ge: "≥",
            gel: "⋛",
            geq: "≥",
            geqq: "≧",
            geqslant: "⩾",
            ges: "⩾",
            gescc: "⪩",
            gesdot: "⪀",
            gesdoto: "⪂",
            gesdotol: "⪄",
            gesl: "⋛︀",
            gesles: "⪔",
            gfr: "𝔤",
            gg: "≫",
            ggg: "⋙",
            gimel: "ℷ",
            gjcy: "ѓ",
            gl: "≷",
            glE: "⪒",
            gla: "⪥",
            glj: "⪤",
            gnE: "≩",
            gnap: "⪊",
            gnapprox: "⪊",
            gne: "⪈",
            gneq: "⪈",
            gneqq: "≩",
            gnsim: "⋧",
            gopf: "𝕘",
            grave: "`",
            gscr: "ℊ",
            gsim: "≳",
            gsime: "⪎",
            gsiml: "⪐",
            gt: ">",
            gtcc: "⪧",
            gtcir: "⩺",
            gtdot: "⋗",
            gtlPar: "⦕",
            gtquest: "⩼",
            gtrapprox: "⪆",
            gtrarr: "⥸",
            gtrdot: "⋗",
            gtreqless: "⋛",
            gtreqqless: "⪌",
            gtrless: "≷",
            gtrsim: "≳",
            gvertneqq: "≩︀",
            gvnE: "≩︀",
            hArr: "⇔",
            hairsp: " ",
            half: "½",
            hamilt: "ℋ",
            hardcy: "ъ",
            harr: "↔",
            harrcir: "⥈",
            harrw: "↭",
            hbar: "ℏ",
            hcirc: "ĥ",
            hearts: "♥",
            heartsuit: "♥",
            hellip: "…",
            hercon: "⊹",
            hfr: "𝔥",
            hksearow: "⤥",
            hkswarow: "⤦",
            hoarr: "⇿",
            homtht: "∻",
            hookleftarrow: "↩",
            hookrightarrow: "↪",
            hopf: "𝕙",
            horbar: "―",
            hscr: "𝒽",
            hslash: "ℏ",
            hstrok: "ħ",
            hybull: "⁃",
            hyphen: "‐",
            iacute: "í",
            ic: "⁣",
            icirc: "î",
            icy: "и",
            iecy: "е",
            iexcl: "¡",
            iff: "⇔",
            ifr: "𝔦",
            igrave: "ì",
            ii: "ⅈ",
            iiiint: "⨌",
            iiint: "∭",
            iinfin: "⧜",
            iiota: "℩",
            ijlig: "ĳ",
            imacr: "ī",
            image: "ℑ",
            imagline: "ℐ",
            imagpart: "ℑ",
            imath: "ı",
            imof: "⊷",
            imped: "Ƶ",
            in: "∈",
            incare: "℅",
            infin: "∞",
            infintie: "⧝",
            inodot: "ı",
            int: "∫",
            intcal: "⊺",
            integers: "ℤ",
            intercal: "⊺",
            intlarhk: "⨗",
            intprod: "⨼",
            iocy: "ё",
            iogon: "į",
            iopf: "𝕚",
            iota: "ι",
            iprod: "⨼",
            iquest: "¿",
            iscr: "𝒾",
            isin: "∈",
            isinE: "⋹",
            isindot: "⋵",
            isins: "⋴",
            isinsv: "⋳",
            isinv: "∈",
            it: "⁢",
            itilde: "ĩ",
            iukcy: "і",
            iuml: "ï",
            jcirc: "ĵ",
            jcy: "й",
            jfr: "𝔧",
            jmath: "ȷ",
            jopf: "𝕛",
            jscr: "𝒿",
            jsercy: "ј",
            jukcy: "є",
            kappa: "κ",
            kappav: "ϰ",
            kcedil: "ķ",
            kcy: "к",
            kfr: "𝔨",
            kgreen: "ĸ",
            khcy: "х",
            kjcy: "ќ",
            kopf: "𝕜",
            kscr: "𝓀",
            lAarr: "⇚",
            lArr: "⇐",
            lAtail: "⤛",
            lBarr: "⤎",
            lE: "≦",
            lEg: "⪋",
            lHar: "⥢",
            lacute: "ĺ",
            laemptyv: "⦴",
            lagran: "ℒ",
            lambda: "λ",
            lang: "⟨",
            langd: "⦑",
            langle: "⟨",
            lap: "⪅",
            laquo: "«",
            larr: "←",
            larrb: "⇤",
            larrbfs: "⤟",
            larrfs: "⤝",
            larrhk: "↩",
            larrlp: "↫",
            larrpl: "⤹",
            larrsim: "⥳",
            larrtl: "↢",
            lat: "⪫",
            latail: "⤙",
            late: "⪭",
            lates: "⪭︀",
            lbarr: "⤌",
            lbbrk: "❲",
            lbrace: "{",
            lbrack: "[",
            lbrke: "⦋",
            lbrksld: "⦏",
            lbrkslu: "⦍",
            lcaron: "ľ",
            lcedil: "ļ",
            lceil: "⌈",
            lcub: "{",
            lcy: "л",
            ldca: "⤶",
            ldquo: "“",
            ldquor: "„",
            ldrdhar: "⥧",
            ldrushar: "⥋",
            ldsh: "↲",
            le: "≤",
            leftarrow: "←",
            leftarrowtail: "↢",
            leftharpoondown: "↽",
            leftharpoonup: "↼",
            leftleftarrows: "⇇",
            leftrightarrow: "↔",
            leftrightarrows: "⇆",
            leftrightharpoons: "⇋",
            leftrightsquigarrow: "↭",
            leftthreetimes: "⋋",
            leg: "⋚",
            leq: "≤",
            leqq: "≦",
            leqslant: "⩽",
            les: "⩽",
            lescc: "⪨",
            lesdot: "⩿",
            lesdoto: "⪁",
            lesdotor: "⪃",
            lesg: "⋚︀",
            lesges: "⪓",
            lessapprox: "⪅",
            lessdot: "⋖",
            lesseqgtr: "⋚",
            lesseqqgtr: "⪋",
            lessgtr: "≶",
            lesssim: "≲",
            lfisht: "⥼",
            lfloor: "⌊",
            lfr: "𝔩",
            lg: "≶",
            lgE: "⪑",
            lhard: "↽",
            lharu: "↼",
            lharul: "⥪",
            lhblk: "▄",
            ljcy: "љ",
            ll: "≪",
            llarr: "⇇",
            llcorner: "⌞",
            llhard: "⥫",
            lltri: "◺",
            lmidot: "ŀ",
            lmoust: "⎰",
            lmoustache: "⎰",
            lnE: "≨",
            lnap: "⪉",
            lnapprox: "⪉",
            lne: "⪇",
            lneq: "⪇",
            lneqq: "≨",
            lnsim: "⋦",
            loang: "⟬",
            loarr: "⇽",
            lobrk: "⟦",
            longleftarrow: "⟵",
            longleftrightarrow: "⟷",
            longmapsto: "⟼",
            longrightarrow: "⟶",
            looparrowleft: "↫",
            looparrowright: "↬",
            lopar: "⦅",
            lopf: "𝕝",
            loplus: "⨭",
            lotimes: "⨴",
            lowast: "∗",
            lowbar: "_",
            loz: "◊",
            lozenge: "◊",
            lozf: "⧫",
            lpar: "(",
            lparlt: "⦓",
            lrarr: "⇆",
            lrcorner: "⌟",
            lrhar: "⇋",
            lrhard: "⥭",
            lrm: "‎",
            lrtri: "⊿",
            lsaquo: "‹",
            lscr: "𝓁",
            lsh: "↰",
            lsim: "≲",
            lsime: "⪍",
            lsimg: "⪏",
            lsqb: "[",
            lsquo: "‘",
            lsquor: "‚",
            lstrok: "ł",
            lt: "<",
            ltcc: "⪦",
            ltcir: "⩹",
            ltdot: "⋖",
            lthree: "⋋",
            ltimes: "⋉",
            ltlarr: "⥶",
            ltquest: "⩻",
            ltrPar: "⦖",
            ltri: "◃",
            ltrie: "⊴",
            ltrif: "◂",
            lurdshar: "⥊",
            luruhar: "⥦",
            lvertneqq: "≨︀",
            lvnE: "≨︀",
            mDDot: "∺",
            macr: "¯",
            male: "♂",
            malt: "✠",
            maltese: "✠",
            map: "↦",
            mapsto: "↦",
            mapstodown: "↧",
            mapstoleft: "↤",
            mapstoup: "↥",
            marker: "▮",
            mcomma: "⨩",
            mcy: "м",
            mdash: "—",
            measuredangle: "∡",
            mfr: "𝔪",
            mho: "℧",
            micro: "µ",
            mid: "∣",
            midast: "*",
            midcir: "⫰",
            middot: "·",
            minus: "−",
            minusb: "⊟",
            minusd: "∸",
            minusdu: "⨪",
            mlcp: "⫛",
            mldr: "…",
            mnplus: "∓",
            models: "⊧",
            mopf: "𝕞",
            mp: "∓",
            mscr: "𝓂",
            mstpos: "∾",
            mu: "μ",
            multimap: "⊸",
            mumap: "⊸",
            nGg: "⋙̸",
            nGt: "≫⃒",
            nGtv: "≫̸",
            nLeftarrow: "⇍",
            nLeftrightarrow: "⇎",
            nLl: "⋘̸",
            nLt: "≪⃒",
            nLtv: "≪̸",
            nRightarrow: "⇏",
            nVDash: "⊯",
            nVdash: "⊮",
            nabla: "∇",
            nacute: "ń",
            nang: "∠⃒",
            nap: "≉",
            napE: "⩰̸",
            napid: "≋̸",
            napos: "ŉ",
            napprox: "≉",
            natur: "♮",
            natural: "♮",
            naturals: "ℕ",
            nbsp: " ",
            nbump: "≎̸",
            nbumpe: "≏̸",
            ncap: "⩃",
            ncaron: "ň",
            ncedil: "ņ",
            ncong: "≇",
            ncongdot: "⩭̸",
            ncup: "⩂",
            ncy: "н",
            ndash: "–",
            ne: "≠",
            neArr: "⇗",
            nearhk: "⤤",
            nearr: "↗",
            nearrow: "↗",
            nedot: "≐̸",
            nequiv: "≢",
            nesear: "⤨",
            nesim: "≂̸",
            nexist: "∄",
            nexists: "∄",
            nfr: "𝔫",
            ngE: "≧̸",
            nge: "≱",
            ngeq: "≱",
            ngeqq: "≧̸",
            ngeqslant: "⩾̸",
            nges: "⩾̸",
            ngsim: "≵",
            ngt: "≯",
            ngtr: "≯",
            nhArr: "⇎",
            nharr: "↮",
            nhpar: "⫲",
            ni: "∋",
            nis: "⋼",
            nisd: "⋺",
            niv: "∋",
            njcy: "њ",
            nlArr: "⇍",
            nlE: "≦̸",
            nlarr: "↚",
            nldr: "‥",
            nle: "≰",
            nleftarrow: "↚",
            nleftrightarrow: "↮",
            nleq: "≰",
            nleqq: "≦̸",
            nleqslant: "⩽̸",
            nles: "⩽̸",
            nless: "≮",
            nlsim: "≴",
            nlt: "≮",
            nltri: "⋪",
            nltrie: "⋬",
            nmid: "∤",
            nopf: "𝕟",
            not: "¬",
            notin: "∉",
            notinE: "⋹̸",
            notindot: "⋵̸",
            notinva: "∉",
            notinvb: "⋷",
            notinvc: "⋶",
            notni: "∌",
            notniva: "∌",
            notnivb: "⋾",
            notnivc: "⋽",
            npar: "∦",
            nparallel: "∦",
            nparsl: "⫽⃥",
            npart: "∂̸",
            npolint: "⨔",
            npr: "⊀",
            nprcue: "⋠",
            npre: "⪯̸",
            nprec: "⊀",
            npreceq: "⪯̸",
            nrArr: "⇏",
            nrarr: "↛",
            nrarrc: "⤳̸",
            nrarrw: "↝̸",
            nrightarrow: "↛",
            nrtri: "⋫",
            nrtrie: "⋭",
            nsc: "⊁",
            nsccue: "⋡",
            nsce: "⪰̸",
            nscr: "𝓃",
            nshortmid: "∤",
            nshortparallel: "∦",
            nsim: "≁",
            nsime: "≄",
            nsimeq: "≄",
            nsmid: "∤",
            nspar: "∦",
            nsqsube: "⋢",
            nsqsupe: "⋣",
            nsub: "⊄",
            nsubE: "⫅̸",
            nsube: "⊈",
            nsubset: "⊂⃒",
            nsubseteq: "⊈",
            nsubseteqq: "⫅̸",
            nsucc: "⊁",
            nsucceq: "⪰̸",
            nsup: "⊅",
            nsupE: "⫆̸",
            nsupe: "⊉",
            nsupset: "⊃⃒",
            nsupseteq: "⊉",
            nsupseteqq: "⫆̸",
            ntgl: "≹",
            ntilde: "ñ",
            ntlg: "≸",
            ntriangleleft: "⋪",
            ntrianglelefteq: "⋬",
            ntriangleright: "⋫",
            ntrianglerighteq: "⋭",
            nu: "ν",
            num: "#",
            numero: "№",
            numsp: " ",
            nvDash: "⊭",
            nvHarr: "⤄",
            nvap: "≍⃒",
            nvdash: "⊬",
            nvge: "≥⃒",
            nvgt: ">⃒",
            nvinfin: "⧞",
            nvlArr: "⤂",
            nvle: "≤⃒",
            nvlt: "<⃒",
            nvltrie: "⊴⃒",
            nvrArr: "⤃",
            nvrtrie: "⊵⃒",
            nvsim: "∼⃒",
            nwArr: "⇖",
            nwarhk: "⤣",
            nwarr: "↖",
            nwarrow: "↖",
            nwnear: "⤧",
            oS: "Ⓢ",
            oacute: "ó",
            oast: "⊛",
            ocir: "⊚",
            ocirc: "ô",
            ocy: "о",
            odash: "⊝",
            odblac: "ő",
            odiv: "⨸",
            odot: "⊙",
            odsold: "⦼",
            oelig: "œ",
            ofcir: "⦿",
            ofr: "𝔬",
            ogon: "˛",
            ograve: "ò",
            ogt: "⧁",
            ohbar: "⦵",
            ohm: "Ω",
            oint: "∮",
            olarr: "↺",
            olcir: "⦾",
            olcross: "⦻",
            oline: "‾",
            olt: "⧀",
            omacr: "ō",
            omega: "ω",
            omicron: "ο",
            omid: "⦶",
            ominus: "⊖",
            oopf: "𝕠",
            opar: "⦷",
            operp: "⦹",
            oplus: "⊕",
            or: "∨",
            orarr: "↻",
            ord: "⩝",
            order: "ℴ",
            orderof: "ℴ",
            ordf: "ª",
            ordm: "º",
            origof: "⊶",
            oror: "⩖",
            orslope: "⩗",
            orv: "⩛",
            oscr: "ℴ",
            oslash: "ø",
            osol: "⊘",
            otilde: "õ",
            otimes: "⊗",
            otimesas: "⨶",
            ouml: "ö",
            ovbar: "⌽",
            par: "∥",
            para: "¶",
            parallel: "∥",
            parsim: "⫳",
            parsl: "⫽",
            part: "∂",
            pcy: "п",
            percnt: "%",
            period: ".",
            permil: "‰",
            perp: "⊥",
            pertenk: "‱",
            pfr: "𝔭",
            phi: "φ",
            phiv: "ϕ",
            phmmat: "ℳ",
            phone: "☎",
            pi: "π",
            pitchfork: "⋔",
            piv: "ϖ",
            planck: "ℏ",
            planckh: "ℎ",
            plankv: "ℏ",
            plus: "+",
            plusacir: "⨣",
            plusb: "⊞",
            pluscir: "⨢",
            plusdo: "∔",
            plusdu: "⨥",
            pluse: "⩲",
            plusmn: "±",
            plussim: "⨦",
            plustwo: "⨧",
            pm: "±",
            pointint: "⨕",
            popf: "𝕡",
            pound: "£",
            pr: "≺",
            prE: "⪳",
            prap: "⪷",
            prcue: "≼",
            pre: "⪯",
            prec: "≺",
            precapprox: "⪷",
            preccurlyeq: "≼",
            preceq: "⪯",
            precnapprox: "⪹",
            precneqq: "⪵",
            precnsim: "⋨",
            precsim: "≾",
            prime: "′",
            primes: "ℙ",
            prnE: "⪵",
            prnap: "⪹",
            prnsim: "⋨",
            prod: "∏",
            profalar: "⌮",
            profline: "⌒",
            profsurf: "⌓",
            prop: "∝",
            propto: "∝",
            prsim: "≾",
            prurel: "⊰",
            pscr: "𝓅",
            psi: "ψ",
            puncsp: " ",
            qfr: "𝔮",
            qint: "⨌",
            qopf: "𝕢",
            qprime: "⁗",
            qscr: "𝓆",
            quaternions: "ℍ",
            quatint: "⨖",
            quest: "?",
            questeq: "≟",
            quot: '"',
            rAarr: "⇛",
            rArr: "⇒",
            rAtail: "⤜",
            rBarr: "⤏",
            rHar: "⥤",
            race: "∽̱",
            racute: "ŕ",
            radic: "√",
            raemptyv: "⦳",
            rang: "⟩",
            rangd: "⦒",
            range: "⦥",
            rangle: "⟩",
            raquo: "»",
            rarr: "→",
            rarrap: "⥵",
            rarrb: "⇥",
            rarrbfs: "⤠",
            rarrc: "⤳",
            rarrfs: "⤞",
            rarrhk: "↪",
            rarrlp: "↬",
            rarrpl: "⥅",
            rarrsim: "⥴",
            rarrtl: "↣",
            rarrw: "↝",
            ratail: "⤚",
            ratio: "∶",
            rationals: "ℚ",
            rbarr: "⤍",
            rbbrk: "❳",
            rbrace: "}",
            rbrack: "]",
            rbrke: "⦌",
            rbrksld: "⦎",
            rbrkslu: "⦐",
            rcaron: "ř",
            rcedil: "ŗ",
            rceil: "⌉",
            rcub: "}",
            rcy: "р",
            rdca: "⤷",
            rdldhar: "⥩",
            rdquo: "”",
            rdquor: "”",
            rdsh: "↳",
            real: "ℜ",
            realine: "ℛ",
            realpart: "ℜ",
            reals: "ℝ",
            rect: "▭",
            reg: "®",
            rfisht: "⥽",
            rfloor: "⌋",
            rfr: "𝔯",
            rhard: "⇁",
            rharu: "⇀",
            rharul: "⥬",
            rho: "ρ",
            rhov: "ϱ",
            rightarrow: "→",
            rightarrowtail: "↣",
            rightharpoondown: "⇁",
            rightharpoonup: "⇀",
            rightleftarrows: "⇄",
            rightleftharpoons: "⇌",
            rightrightarrows: "⇉",
            rightsquigarrow: "↝",
            rightthreetimes: "⋌",
            ring: "˚",
            risingdotseq: "≓",
            rlarr: "⇄",
            rlhar: "⇌",
            rlm: "‏",
            rmoust: "⎱",
            rmoustache: "⎱",
            rnmid: "⫮",
            roang: "⟭",
            roarr: "⇾",
            robrk: "⟧",
            ropar: "⦆",
            ropf: "𝕣",
            roplus: "⨮",
            rotimes: "⨵",
            rpar: ")",
            rpargt: "⦔",
            rppolint: "⨒",
            rrarr: "⇉",
            rsaquo: "›",
            rscr: "𝓇",
            rsh: "↱",
            rsqb: "]",
            rsquo: "’",
            rsquor: "’",
            rthree: "⋌",
            rtimes: "⋊",
            rtri: "▹",
            rtrie: "⊵",
            rtrif: "▸",
            rtriltri: "⧎",
            ruluhar: "⥨",
            rx: "℞",
            sacute: "ś",
            sbquo: "‚",
            sc: "≻",
            scE: "⪴",
            scap: "⪸",
            scaron: "š",
            sccue: "≽",
            sce: "⪰",
            scedil: "ş",
            scirc: "ŝ",
            scnE: "⪶",
            scnap: "⪺",
            scnsim: "⋩",
            scpolint: "⨓",
            scsim: "≿",
            scy: "с",
            sdot: "⋅",
            sdotb: "⊡",
            sdote: "⩦",
            seArr: "⇘",
            searhk: "⤥",
            searr: "↘",
            searrow: "↘",
            sect: "§",
            semi: ";",
            seswar: "⤩",
            setminus: "∖",
            setmn: "∖",
            sext: "✶",
            sfr: "𝔰",
            sfrown: "⌢",
            sharp: "♯",
            shchcy: "щ",
            shcy: "ш",
            shortmid: "∣",
            shortparallel: "∥",
            shy: "­",
            sigma: "σ",
            sigmaf: "ς",
            sigmav: "ς",
            sim: "∼",
            simdot: "⩪",
            sime: "≃",
            simeq: "≃",
            simg: "⪞",
            simgE: "⪠",
            siml: "⪝",
            simlE: "⪟",
            simne: "≆",
            simplus: "⨤",
            simrarr: "⥲",
            slarr: "←",
            smallsetminus: "∖",
            smashp: "⨳",
            smeparsl: "⧤",
            smid: "∣",
            smile: "⌣",
            smt: "⪪",
            smte: "⪬",
            smtes: "⪬︀",
            softcy: "ь",
            sol: "/",
            solb: "⧄",
            solbar: "⌿",
            sopf: "𝕤",
            spades: "♠",
            spadesuit: "♠",
            spar: "∥",
            sqcap: "⊓",
            sqcaps: "⊓︀",
            sqcup: "⊔",
            sqcups: "⊔︀",
            sqsub: "⊏",
            sqsube: "⊑",
            sqsubset: "⊏",
            sqsubseteq: "⊑",
            sqsup: "⊐",
            sqsupe: "⊒",
            sqsupset: "⊐",
            sqsupseteq: "⊒",
            squ: "□",
            square: "□",
            squarf: "▪",
            squf: "▪",
            srarr: "→",
            sscr: "𝓈",
            ssetmn: "∖",
            ssmile: "⌣",
            sstarf: "⋆",
            star: "☆",
            starf: "★",
            straightepsilon: "ϵ",
            straightphi: "ϕ",
            strns: "¯",
            sub: "⊂",
            subE: "⫅",
            subdot: "⪽",
            sube: "⊆",
            subedot: "⫃",
            submult: "⫁",
            subnE: "⫋",
            subne: "⊊",
            subplus: "⪿",
            subrarr: "⥹",
            subset: "⊂",
            subseteq: "⊆",
            subseteqq: "⫅",
            subsetneq: "⊊",
            subsetneqq: "⫋",
            subsim: "⫇",
            subsub: "⫕",
            subsup: "⫓",
            succ: "≻",
            succapprox: "⪸",
            succcurlyeq: "≽",
            succeq: "⪰",
            succnapprox: "⪺",
            succneqq: "⪶",
            succnsim: "⋩",
            succsim: "≿",
            sum: "∑",
            sung: "♪",
            sup1: "¹",
            sup2: "²",
            sup3: "³",
            sup: "⊃",
            supE: "⫆",
            supdot: "⪾",
            supdsub: "⫘",
            supe: "⊇",
            supedot: "⫄",
            suphsol: "⟉",
            suphsub: "⫗",
            suplarr: "⥻",
            supmult: "⫂",
            supnE: "⫌",
            supne: "⊋",
            supplus: "⫀",
            supset: "⊃",
            supseteq: "⊇",
            supseteqq: "⫆",
            supsetneq: "⊋",
            supsetneqq: "⫌",
            supsim: "⫈",
            supsub: "⫔",
            supsup: "⫖",
            swArr: "⇙",
            swarhk: "⤦",
            swarr: "↙",
            swarrow: "↙",
            swnwar: "⤪",
            szlig: "ß",
            target: "⌖",
            tau: "τ",
            tbrk: "⎴",
            tcaron: "ť",
            tcedil: "ţ",
            tcy: "т",
            tdot: "⃛",
            telrec: "⌕",
            tfr: "𝔱",
            there4: "∴",
            therefore: "∴",
            theta: "θ",
            thetasym: "ϑ",
            thetav: "ϑ",
            thickapprox: "≈",
            thicksim: "∼",
            thinsp: " ",
            thkap: "≈",
            thksim: "∼",
            thorn: "þ",
            tilde: "˜",
            times: "×",
            timesb: "⊠",
            timesbar: "⨱",
            timesd: "⨰",
            tint: "∭",
            toea: "⤨",
            top: "⊤",
            topbot: "⌶",
            topcir: "⫱",
            topf: "𝕥",
            topfork: "⫚",
            tosa: "⤩",
            tprime: "‴",
            trade: "™",
            triangle: "▵",
            triangledown: "▿",
            triangleleft: "◃",
            trianglelefteq: "⊴",
            triangleq: "≜",
            triangleright: "▹",
            trianglerighteq: "⊵",
            tridot: "◬",
            trie: "≜",
            triminus: "⨺",
            triplus: "⨹",
            trisb: "⧍",
            tritime: "⨻",
            trpezium: "⏢",
            tscr: "𝓉",
            tscy: "ц",
            tshcy: "ћ",
            tstrok: "ŧ",
            twixt: "≬",
            twoheadleftarrow: "↞",
            twoheadrightarrow: "↠",
            uArr: "⇑",
            uHar: "⥣",
            uacute: "ú",
            uarr: "↑",
            ubrcy: "ў",
            ubreve: "ŭ",
            ucirc: "û",
            ucy: "у",
            udarr: "⇅",
            udblac: "ű",
            udhar: "⥮",
            ufisht: "⥾",
            ufr: "𝔲",
            ugrave: "ù",
            uharl: "↿",
            uharr: "↾",
            uhblk: "▀",
            ulcorn: "⌜",
            ulcorner: "⌜",
            ulcrop: "⌏",
            ultri: "◸",
            umacr: "ū",
            uml: "¨",
            uogon: "ų",
            uopf: "𝕦",
            uparrow: "↑",
            updownarrow: "↕",
            upharpoonleft: "↿",
            upharpoonright: "↾",
            uplus: "⊎",
            upsi: "υ",
            upsih: "ϒ",
            upsilon: "υ",
            upuparrows: "⇈",
            urcorn: "⌝",
            urcorner: "⌝",
            urcrop: "⌎",
            uring: "ů",
            urtri: "◹",
            uscr: "𝓊",
            utdot: "⋰",
            utilde: "ũ",
            utri: "▵",
            utrif: "▴",
            uuarr: "⇈",
            uuml: "ü",
            uwangle: "⦧",
            vArr: "⇕",
            vBar: "⫨",
            vBarv: "⫩",
            vDash: "⊨",
            vangrt: "⦜",
            varepsilon: "ϵ",
            varkappa: "ϰ",
            varnothing: "∅",
            varphi: "ϕ",
            varpi: "ϖ",
            varpropto: "∝",
            varr: "↕",
            varrho: "ϱ",
            varsigma: "ς",
            varsubsetneq: "⊊︀",
            varsubsetneqq: "⫋︀",
            varsupsetneq: "⊋︀",
            varsupsetneqq: "⫌︀",
            vartheta: "ϑ",
            vartriangleleft: "⊲",
            vartriangleright: "⊳",
            vcy: "в",
            vdash: "⊢",
            vee: "∨",
            veebar: "⊻",
            veeeq: "≚",
            vellip: "⋮",
            verbar: "|",
            vert: "|",
            vfr: "𝔳",
            vltri: "⊲",
            vnsub: "⊂⃒",
            vnsup: "⊃⃒",
            vopf: "𝕧",
            vprop: "∝",
            vrtri: "⊳",
            vscr: "𝓋",
            vsubnE: "⫋︀",
            vsubne: "⊊︀",
            vsupnE: "⫌︀",
            vsupne: "⊋︀",
            vzigzag: "⦚",
            wcirc: "ŵ",
            wedbar: "⩟",
            wedge: "∧",
            wedgeq: "≙",
            weierp: "℘",
            wfr: "𝔴",
            wopf: "𝕨",
            wp: "℘",
            wr: "≀",
            wreath: "≀",
            wscr: "𝓌",
            xcap: "⋂",
            xcirc: "◯",
            xcup: "⋃",
            xdtri: "▽",
            xfr: "𝔵",
            xhArr: "⟺",
            xharr: "⟷",
            xi: "ξ",
            xlArr: "⟸",
            xlarr: "⟵",
            xmap: "⟼",
            xnis: "⋻",
            xodot: "⨀",
            xopf: "𝕩",
            xoplus: "⨁",
            xotime: "⨂",
            xrArr: "⟹",
            xrarr: "⟶",
            xscr: "𝓍",
            xsqcup: "⨆",
            xuplus: "⨄",
            xutri: "△",
            xvee: "⋁",
            xwedge: "⋀",
            yacute: "ý",
            yacy: "я",
            ycirc: "ŷ",
            ycy: "ы",
            yen: "¥",
            yfr: "𝔶",
            yicy: "ї",
            yopf: "𝕪",
            yscr: "𝓎",
            yucy: "ю",
            yuml: "ÿ",
            zacute: "ź",
            zcaron: "ž",
            zcy: "з",
            zdot: "ż",
            zeetrf: "ℨ",
            zeta: "ζ",
            zfr: "𝔷",
            zhcy: "ж",
            zigrarr: "⇝",
            zopf: "𝕫",
            zscr: "𝓏",
            zwj: "‍",
            zwnj: "‌"
        };
        n.characterEntities = r;
    }, {} ],
    3: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.decodeNamedCharacterReference = o;
        var r = e("character-entities");
        const i = {}.hasOwnProperty;
        function o(e) {
            return !!i.call(r.characterEntities, e) && r.characterEntities[e];
        }
    }, {
        "character-entities": 2
    } ],
    4: [ function(e, t, n) {
        "use strict";
        function r(e) {
            let t, n, r, c, a, s, u;
            return l(), {
                feed: f,
                reset: l
            };
            function l() {
                t = !0, n = "", r = 0, c = -1, a = void 0, s = void 0, u = "";
            }
            function f(e) {
                n = n ? n + e : e, t && o(n) && (n = n.slice(i.length)), t = !1;
                const a = n.length;
                let s = 0, u = !1;
                for (;s < a; ) {
                    u && ("\n" === n[s] && ++s, u = !1);
                    let e = -1, t = c, i;
                    for (let o = r; e < 0 && o < a; ++o) i = n[o], ":" === i && t < 0 ? t = o - s : "\r" === i ? (u = !0,
                    e = o - s) : "\n" === i && (e = o - s);
                    if (e < 0) {
                        r = a - s, c = t;
                        break;
                    }
                    r = 0, c = -1, d(n, s, t, e), s += e + 1;
                }
                s === a ? n = "" : s > 0 && (n = n.slice(s));
            }
            function d(t, n, r, i) {
                if (0 === i) return u.length > 0 && (e({
                    type: "event",
                    id: a,
                    event: s || void 0,
                    data: u.slice(0, -1)
                }), u = "", a = void 0), void (s = void 0);
                const o = r < 0, c = t.slice(n, n + (o ? i : r));
                let l = 0;
                l = o ? i : " " === t[n + r + 1] ? r + 2 : r + 1;
                const f = n + l, d = i - l, p = t.slice(f, f + d).toString();
                if ("data" === c) u += p ? "".concat(p, "\n") : "\n"; else if ("event" === c) s = p; else if ("id" !== c || p.includes("\0")) {
                    if ("retry" === c) {
                        const t = parseInt(p, 10);
                        Number.isNaN(t) || e({
                            type: "reconnect-interval",
                            value: t
                        });
                    }
                } else a = p;
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        const i = [ 239, 187, 191 ];
        function o(e) {
            return i.every(((t, n) => e.charCodeAt(n) === t));
        }
        n.createParser = r;
    }, {} ],
    5: [ function(e, t, n) {
        "use strict";
        const r = e("map-age-cleaner");
        class i {
            constructor(e, t) {
                if (this.maxAge = e, this[Symbol.toStringTag] = "Map", this.data = new Map, r(this.data),
                t) for (const [e, n] of t) this.set(e, n);
            }
            get size() {
                return this.data.size;
            }
            clear() {
                this.data.clear();
            }
            delete(e) {
                return this.data.delete(e);
            }
            has(e) {
                return this.data.has(e);
            }
            get(e) {
                const t = this.data.get(e);
                if (t) return t.data;
            }
            set(e, t) {
                return this.data.set(e, {
                    maxAge: Date.now() + this.maxAge,
                    data: t
                }), this;
            }
            values() {
                return this.createIterator((e => e[1].data));
            }
            keys() {
                return this.data.keys();
            }
            entries() {
                return this.createIterator((e => [ e[0], e[1].data ]));
            }
            forEach(e, t) {
                for (const [n, r] of this.entries()) e.apply(t, [ r, n, this ]);
            }
            [Symbol.iterator]() {
                return this.entries();
            }
            * createIterator(e) {
                for (const t of this.data.entries()) yield e(t);
            }
        }
        t.exports = i;
    }, {
        "map-age-cleaner": 9
    } ],
    6: [ function(e, t, n) {
        "use strict";
        var r = Object.prototype.hasOwnProperty, i = Object.prototype.toString, o = Object.defineProperty, c = Object.getOwnPropertyDescriptor, a = function e(t) {
            return "function" == typeof Array.isArray ? Array.isArray(t) : "[object Array]" === i.call(t);
        }, s = function e(t) {
            if (!t || "[object Object]" !== i.call(t)) return !1;
            var n = r.call(t, "constructor"), o = t.constructor && t.constructor.prototype && r.call(t.constructor.prototype, "isPrototypeOf"), c;
            if (t.constructor && !n && !o) return !1;
            for (c in t) ;
            return void 0 === c || r.call(t, c);
        }, u = function e(t, n) {
            o && "__proto__" === n.name ? o(t, n.name, {
                enumerable: !0,
                configurable: !0,
                value: n.newValue,
                writable: !0
            }) : t[n.name] = n.newValue;
        }, l = function e(t, n) {
            if ("__proto__" === n) {
                if (!r.call(t, n)) return;
                if (c) return c(t, n).value;
            }
            return t[n];
        };
        t.exports = function e() {
            var t, n, r, i, o, c, f = arguments[0], d = 1, p = arguments.length, h = !1;
            for ("boolean" == typeof f && (h = f, f = arguments[1] || {}, d = 2), (null == f || "object" != typeof f && "function" != typeof f) && (f = {}); d < p; ++d) if (null != (t = arguments[d])) for (n in t) r = l(f, n),
            f !== (i = l(t, n)) && (h && i && (s(i) || (o = a(i))) ? (o ? (o = !1, c = r && a(r) ? r : []) : c = r && s(r) ? r : {},
            u(f, {
                name: n,
                newValue: e(h, c, i)
            })) : void 0 !== i && u(f, {
                name: n,
                newValue: i
            }));
            return f;
        };
    }, {} ],
    7: [ function(e, t, n) {
        "use strict";
        function r(e) {
            if ("object" != typeof e || null === e) return !1;
            const t = Object.getPrototypeOf(e);
            return !(null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t) || Symbol.toStringTag in e || Symbol.iterator in e);
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = r;
    }, {} ],
    8: [ function(e, t, n) {
        "use strict";
        function r(e, t) {
            const n = String(e);
            let r = n.indexOf(t), i = r, o = 0, c = 0;
            if ("string" != typeof t) throw new TypeError("Expected substring");
            for (;-1 !== r; ) r === i ? ++o > c && (c = o) : o = 1, i = r + t.length, r = n.indexOf(t, i);
            return c;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.longestStreak = r;
    }, {} ],
    9: [ function(e, t, n) {
        "use strict";
        const r = e("p-defer");
        function i(e, t = "maxAge") {
            let n, i, o;
            const c = async () => {
                if (void 0 !== n) return;
                const c = async c => {
                    o = r();
                    const a = c[1][t] - Date.now();
                    return a <= 0 ? (e.delete(c[0]), void o.resolve()) : (n = c[0], i = setTimeout((() => {
                        e.delete(c[0]), o && o.resolve();
                    }), a), "function" == typeof i.unref && i.unref(), o.promise);
                };
                try {
                    for (const t of e) await c(t);
                } catch (e) {}
                n = void 0;
            }, a = () => {
                n = void 0, void 0 !== i && (clearTimeout(i), i = void 0), void 0 !== o && (o.reject(void 0),
                o = void 0);
            }, s = e.set.bind(e);
            return e.set = (t, r) => {
                e.has(t) && e.delete(t);
                const i = s(t, r);
                return n && n === t && a(), c(), i;
            }, c(), e;
        }
        t.exports = i;
    }, {
        "p-defer": 110
    } ],
    10: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), Object.defineProperty(n, "fromMarkdown", {
            enumerable: !0,
            get: function() {
                return r.fromMarkdown;
            }
        });
        var r = e("./lib/index.js");
    }, {
        "./lib/index.js": 11
    } ],
    11: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.fromMarkdown = void 0;
        var r = e("mdast-util-to-string"), i = e("micromark/lib/parse.js"), o = e("micromark/lib/preprocess.js"), c = e("micromark/lib/postprocess.js"), a = e("micromark-util-decode-numeric-character-reference"), s = e("micromark-util-decode-string"), u = e("micromark-util-normalize-identifier"), l = e("decode-named-character-reference"), f = e("unist-util-stringify-position");
        const d = {}.hasOwnProperty, p = function(e, t, n) {
            return "string" != typeof t && (n = t, t = void 0), h(n)((0, c.postprocess)((0,
            i.parse)(n).document().write((0, o.preprocess)()(e, t, !0))));
        };
        function h(e = {}) {
            const t = m({
                transforms: [],
                canContainEols: [ "emphasis", "fragment", "heading", "paragraph", "strong" ],
                enter: {
                    autolink: g(de),
                    autolinkProtocol: N,
                    autolinkEmail: N,
                    atxHeading: g(se),
                    blockQuote: g(re),
                    characterEscape: N,
                    characterReference: N,
                    codeFenced: g(ie),
                    codeFencedFenceInfo: y,
                    codeFencedFenceMeta: y,
                    codeIndented: g(ie, y),
                    codeText: g(oe, y),
                    codeTextData: N,
                    data: N,
                    codeFlowValue: N,
                    definition: g(ce),
                    definitionDestinationString: y,
                    definitionLabelString: y,
                    definitionTitleString: y,
                    emphasis: g(ae),
                    hardBreakEscape: g(ue),
                    hardBreakTrailing: g(ue),
                    htmlFlow: g(le, y),
                    htmlFlowData: N,
                    htmlText: g(le, y),
                    htmlTextData: N,
                    image: g(fe),
                    label: y,
                    link: g(de),
                    listItem: g(he),
                    listItemValue: x,
                    listOrdered: g(pe, w),
                    listUnordered: g(pe),
                    paragraph: g(me),
                    reference: Z,
                    referenceString: y,
                    resourceDestinationString: y,
                    resourceTitleString: y,
                    setextHeading: g(se),
                    strong: g(ge),
                    thematicBreak: g(ye)
                },
                exit: {
                    atxHeading: v(),
                    atxHeadingSequence: M,
                    autolink: v(),
                    autolinkEmail: ne,
                    autolinkProtocol: te,
                    blockQuote: v(),
                    characterEscapeValue: q,
                    characterReferenceMarkerHexadecimal: X,
                    characterReferenceMarkerNumeric: X,
                    characterReferenceValue: ee,
                    codeFenced: v(A),
                    codeFencedFence: j,
                    codeFencedFenceInfo: S,
                    codeFencedFenceMeta: T,
                    codeFlowValue: q,
                    codeIndented: v(O),
                    codeText: v(G),
                    codeTextData: q,
                    data: q,
                    definition: v(),
                    definitionDestinationString: I,
                    definitionLabelString: P,
                    definitionTitleString: C,
                    emphasis: v(),
                    hardBreakEscape: v(B),
                    hardBreakTrailing: v(B),
                    htmlFlow: v(U),
                    htmlFlowData: q,
                    htmlText: v(z),
                    htmlTextData: q,
                    image: v(V),
                    label: Y,
                    labelText: K,
                    lineEnding: D,
                    link: v(H),
                    listItem: v(),
                    listOrdered: v(),
                    listUnordered: v(),
                    paragraph: v(),
                    referenceString: J,
                    resourceDestinationString: $,
                    resourceTitleString: W,
                    resource: Q,
                    setextHeading: v(F),
                    setextHeadingLineSequence: L,
                    setextHeadingText: R,
                    strong: v(),
                    thematicBreak: v()
                }
            }, e.mdastExtensions || []), n = {};
            return i;
            function i(e) {
                let n = {
                    type: "root",
                    children: []
                };
                const r = undefined, i = [], a = [], s = {
                    stack: [ n ],
                    tokenStack: i,
                    config: t,
                    enter: k,
                    exit: E,
                    buffer: y,
                    resume: _,
                    setData: c,
                    getData: p
                };
                let u = -1;
                for (;++u < e.length; ) if ("listOrdered" === e[u][1].type || "listUnordered" === e[u][1].type) if ("enter" === e[u][0]) a.push(u); else {
                    const t = undefined;
                    u = o(e, a.pop(), u);
                }
                for (u = -1; ++u < e.length; ) {
                    const n = t[e[u][0]];
                    d.call(n, e[u][1].type) && n[e[u][1].type].call(Object.assign({
                        sliceSerialize: e[u][2].sliceSerialize
                    }, s), e[u][1]);
                }
                if (i.length > 0) {
                    const e = i[i.length - 1], t = undefined;
                    (e[1] || b).call(s, void 0, e[0]);
                }
                for (n.position = {
                    start: h(e.length > 0 ? e[0][1].start : {
                        line: 1,
                        column: 1,
                        offset: 0
                    }),
                    end: h(e.length > 0 ? e[e.length - 2][1].end : {
                        line: 1,
                        column: 1,
                        offset: 0
                    })
                }, u = -1; ++u < t.transforms.length; ) n = t.transforms[u](n) || n;
                return n;
            }
            function o(e, t, n) {
                let r = t - 1, i = -1, o = !1, c, a, s, u;
                for (;++r <= n; ) {
                    const t = e[r];
                    if ("listUnordered" === t[1].type || "listOrdered" === t[1].type || "blockQuote" === t[1].type ? ("enter" === t[0] ? i++ : i--,
                    u = void 0) : "lineEndingBlank" === t[1].type ? "enter" === t[0] && (!c || u || i || s || (s = r),
                    u = void 0) : "linePrefix" === t[1].type || "listItemValue" === t[1].type || "listItemMarker" === t[1].type || "listItemPrefix" === t[1].type || "listItemPrefixWhitespace" === t[1].type || (u = void 0),
                    !i && "enter" === t[0] && "listItemPrefix" === t[1].type || -1 === i && "exit" === t[0] && ("listUnordered" === t[1].type || "listOrdered" === t[1].type)) {
                        if (c) {
                            let i = r;
                            for (a = void 0; i--; ) {
                                const t = e[i];
                                if ("lineEnding" === t[1].type || "lineEndingBlank" === t[1].type) {
                                    if ("exit" === t[0]) continue;
                                    a && (e[a][1].type = "lineEndingBlank", o = !0), t[1].type = "lineEnding", a = i;
                                } else if ("linePrefix" !== t[1].type && "blockQuotePrefix" !== t[1].type && "blockQuotePrefixWhitespace" !== t[1].type && "blockQuoteMarker" !== t[1].type && "listItemIndent" !== t[1].type) break;
                            }
                            s && (!a || s < a) && (c._spread = !0), c.end = Object.assign({}, a ? e[a][1].start : t[1].end),
                            e.splice(a || r, 0, [ "exit", c, t[2] ]), r++, n++;
                        }
                        "listItemPrefix" === t[1].type && (c = {
                            type: "listItem",
                            _spread: !1,
                            start: Object.assign({}, t[1].start)
                        }, e.splice(r, 0, [ "enter", c, t[2] ]), r++, n++, s = void 0, u = !0);
                    }
                }
                return e[t][1]._spread = o, n;
            }
            function c(e, t) {
                n[e] = t;
            }
            function p(e) {
                return n[e];
            }
            function h(e) {
                return {
                    line: e.line,
                    column: e.column,
                    offset: e.offset
                };
            }
            function g(e, t) {
                return n;
                function n(n) {
                    k.call(this, e(n), n), t && t.call(this, n);
                }
            }
            function y() {
                this.stack.push({
                    type: "fragment",
                    children: []
                });
            }
            function k(e, t, n) {
                const r = undefined;
                return this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push([ t, n ]),
                e.position = {
                    start: h(t.start)
                }, e;
            }
            function v(e) {
                return t;
                function t(t) {
                    e && e.call(this, t), E.call(this, t);
                }
            }
            function E(e, t) {
                const n = this.stack.pop(), r = this.tokenStack.pop();
                if (!r) throw new Error("Cannot close `" + e.type + "` (" + (0, f.stringifyPosition)({
                    start: e.start,
                    end: e.end
                }) + "): it’s not open");
                if (r[0].type !== e.type) if (t) t.call(this, e, r[0]); else {
                    const t = undefined;
                    (r[1] || b).call(this, e, r[0]);
                }
                return n.position.end = h(e.end), n;
            }
            function _() {
                return (0, r.toString)(this.stack.pop());
            }
            function w() {
                c("expectingFirstListItemValue", !0);
            }
            function x(e) {
                if (p("expectingFirstListItemValue")) {
                    const t = undefined;
                    this.stack[this.stack.length - 2].start = Number.parseInt(this.sliceSerialize(e), 10),
                    c("expectingFirstListItemValue");
                }
            }
            function S() {
                const e = this.resume(), t = undefined;
                this.stack[this.stack.length - 1].lang = e;
            }
            function T() {
                const e = this.resume(), t = undefined;
                this.stack[this.stack.length - 1].meta = e;
            }
            function j() {
                p("flowCodeInside") || (this.buffer(), c("flowCodeInside", !0));
            }
            function A() {
                const e = this.resume(), t = undefined;
                this.stack[this.stack.length - 1].value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""),
                c("flowCodeInside");
            }
            function O() {
                const e = this.resume(), t = undefined;
                this.stack[this.stack.length - 1].value = e.replace(/(\r?\n|\r)$/g, "");
            }
            function P(e) {
                const t = this.resume(), n = this.stack[this.stack.length - 1];
                n.label = t, n.identifier = (0, u.normalizeIdentifier)(this.sliceSerialize(e)).toLowerCase();
            }
            function C() {
                const e = this.resume(), t = undefined;
                this.stack[this.stack.length - 1].title = e;
            }
            function I() {
                const e = this.resume(), t = undefined;
                this.stack[this.stack.length - 1].url = e;
            }
            function M(e) {
                const t = this.stack[this.stack.length - 1];
                if (!t.depth) {
                    const n = this.sliceSerialize(e).length;
                    t.depth = n;
                }
            }
            function R() {
                c("setextHeadingSlurpLineEnding", !0);
            }
            function L(e) {
                const t = undefined;
                this.stack[this.stack.length - 1].depth = 61 === this.sliceSerialize(e).charCodeAt(0) ? 1 : 2;
            }
            function F() {
                c("setextHeadingSlurpLineEnding");
            }
            function N(e) {
                const t = this.stack[this.stack.length - 1];
                let n = t.children[t.children.length - 1];
                n && "text" === n.type || (n = be(), n.position = {
                    start: h(e.start)
                }, t.children.push(n)), this.stack.push(n);
            }
            function q(e) {
                const t = this.stack.pop();
                t.value += this.sliceSerialize(e), t.position.end = h(e.end);
            }
            function D(e) {
                const n = this.stack[this.stack.length - 1];
                if (p("atHardBreak")) {
                    const t = undefined;
                    return n.children[n.children.length - 1].position.end = h(e.end), void c("atHardBreak");
                }
                !p("setextHeadingSlurpLineEnding") && t.canContainEols.includes(n.type) && (N.call(this, e),
                q.call(this, e));
            }
            function B() {
                c("atHardBreak", !0);
            }
            function U() {
                const e = this.resume(), t = undefined;
                this.stack[this.stack.length - 1].value = e;
            }
            function z() {
                const e = this.resume(), t = undefined;
                this.stack[this.stack.length - 1].value = e;
            }
            function G() {
                const e = this.resume(), t = undefined;
                this.stack[this.stack.length - 1].value = e;
            }
            function H() {
                const e = this.stack[this.stack.length - 1];
                p("inReference") ? (e.type += "Reference", e.referenceType = p("referenceType") || "shortcut",
                delete e.url, delete e.title) : (delete e.identifier, delete e.label), c("referenceType");
            }
            function V() {
                const e = this.stack[this.stack.length - 1];
                p("inReference") ? (e.type += "Reference", e.referenceType = p("referenceType") || "shortcut",
                delete e.url, delete e.title) : (delete e.identifier, delete e.label), c("referenceType");
            }
            function K(e) {
                const t = this.stack[this.stack.length - 2], n = this.sliceSerialize(e);
                t.label = (0, s.decodeString)(n), t.identifier = (0, u.normalizeIdentifier)(n).toLowerCase();
            }
            function Y() {
                const e = this.stack[this.stack.length - 1], t = this.resume(), n = this.stack[this.stack.length - 1];
                c("inReference", !0), "link" === n.type ? n.children = e.children : n.alt = t;
            }
            function $() {
                const e = this.resume(), t = undefined;
                this.stack[this.stack.length - 1].url = e;
            }
            function W() {
                const e = this.resume(), t = undefined;
                this.stack[this.stack.length - 1].title = e;
            }
            function Q() {
                c("inReference");
            }
            function Z() {
                c("referenceType", "collapsed");
            }
            function J(e) {
                const t = this.resume(), n = this.stack[this.stack.length - 1];
                n.label = t, n.identifier = (0, u.normalizeIdentifier)(this.sliceSerialize(e)).toLowerCase(),
                c("referenceType", "full");
            }
            function X(e) {
                c("characterReferenceType", e.type);
            }
            function ee(e) {
                const t = this.sliceSerialize(e), n = p("characterReferenceType");
                let r;
                n ? (r = (0, a.decodeNumericCharacterReference)(t, "characterReferenceMarkerNumeric" === n ? 10 : 16),
                c("characterReferenceType")) : r = (0, l.decodeNamedCharacterReference)(t);
                const i = this.stack.pop();
                i.value += r, i.position.end = h(e.end);
            }
            function te(e) {
                q.call(this, e);
                const t = undefined;
                this.stack[this.stack.length - 1].url = this.sliceSerialize(e);
            }
            function ne(e) {
                q.call(this, e);
                const t = undefined;
                this.stack[this.stack.length - 1].url = "mailto:" + this.sliceSerialize(e);
            }
            function re() {
                return {
                    type: "blockquote",
                    children: []
                };
            }
            function ie() {
                return {
                    type: "code",
                    lang: null,
                    meta: null,
                    value: ""
                };
            }
            function oe() {
                return {
                    type: "inlineCode",
                    value: ""
                };
            }
            function ce() {
                return {
                    type: "definition",
                    identifier: "",
                    label: null,
                    title: null,
                    url: ""
                };
            }
            function ae() {
                return {
                    type: "emphasis",
                    children: []
                };
            }
            function se() {
                return {
                    type: "heading",
                    depth: void 0,
                    children: []
                };
            }
            function ue() {
                return {
                    type: "break"
                };
            }
            function le() {
                return {
                    type: "html",
                    value: ""
                };
            }
            function fe() {
                return {
                    type: "image",
                    title: null,
                    url: "",
                    alt: null
                };
            }
            function de() {
                return {
                    type: "link",
                    title: null,
                    url: "",
                    children: []
                };
            }
            function pe(e) {
                return {
                    type: "list",
                    ordered: "listOrdered" === e.type,
                    start: null,
                    spread: e._spread,
                    children: []
                };
            }
            function he(e) {
                return {
                    type: "listItem",
                    spread: e._spread,
                    checked: null,
                    children: []
                };
            }
            function me() {
                return {
                    type: "paragraph",
                    children: []
                };
            }
            function ge() {
                return {
                    type: "strong",
                    children: []
                };
            }
            function be() {
                return {
                    type: "text",
                    value: ""
                };
            }
            function ye() {
                return {
                    type: "thematicBreak"
                };
            }
        }
        function m(e, t) {
            let n = -1;
            for (;++n < t.length; ) {
                const r = t[n];
                Array.isArray(r) ? m(e, r) : g(e, r);
            }
            return e;
        }
        function g(e, t) {
            let n;
            for (n in t) if (d.call(t, n)) {
                const r = "canContainEols" === n || "transforms" === n, i = undefined, o = (d.call(e, n) ? e[n] : void 0) || (e[n] = r ? [] : {}), c = t[n];
                c && (r ? e[n] = [ ...o, ...c ] : Object.assign(o, c));
            }
        }
        function b(e, t) {
            throw e ? new Error("Cannot close `" + e.type + "` (" + (0, f.stringifyPosition)({
                start: e.start,
                end: e.end
            }) + "): a different token (`" + t.type + "`, " + (0, f.stringifyPosition)({
                start: t.start,
                end: t.end
            }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + (0,
            f.stringifyPosition)({
                start: t.start,
                end: t.end
            }) + ") is still open");
        }
        n.fromMarkdown = p;
    }, {
        "decode-named-character-reference": 3,
        "mdast-util-to-string": 61,
        "micromark-util-decode-numeric-character-reference": 95,
        "micromark-util-decode-string": 96,
        "micromark-util-normalize-identifier": 98,
        "micromark/lib/parse.js": 107,
        "micromark/lib/postprocess.js": 108,
        "micromark/lib/preprocess.js": 109,
        "unist-util-stringify-position": 124
    } ],
    12: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), Object.defineProperty(n, "phrasing", {
            enumerable: !0,
            get: function() {
                return r.phrasing;
            }
        });
        var r = e("./lib/index.js");
    }, {
        "./lib/index.js": 13
    } ],
    13: [ function(e, t, n) {
        "use strict";
        var r;
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.phrasing = void 0;
        const i = (0, e("unist-util-is").convert)([ "break", "delete", "emphasis", "footnote", "footnoteReference", "image", "imageReference", "inlineCode", "link", "linkReference", "strong", "text" ]);
        n.phrasing = i;
    }, {
        "unist-util-is": 123
    } ],
    14: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), Object.defineProperty(n, "defaultHandlers", {
            enumerable: !0,
            get: function() {
                return i.handle;
            }
        }), Object.defineProperty(n, "toMarkdown", {
            enumerable: !0,
            get: function() {
                return r.toMarkdown;
            }
        });
        var r = e("./lib/index.js"), i = e("./lib/handle/index.js");
    }, {
        "./lib/handle/index.js": 25,
        "./lib/index.js": 36
    } ],
    15: [ function(e, t, n) {
        "use strict";
        function r(e, t) {
            let n = -1, i;
            if (t.extensions) for (;++n < t.extensions.length; ) r(e, t.extensions[n]);
            for (i in t) "extensions" === i || ("unsafe" === i || "join" === i ? e[i] = [ ...e[i] || [], ...t[i] || [] ] : "handlers" === i ? e[i] = Object.assign(e[i], t[i] || {}) : e.options[i] = t[i]);
            return e;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.configure = r;
    }, {} ],
    16: [ function(e, t, n) {
        "use strict";
        function r(e, t, n, r) {
            const o = n.enter("blockquote"), c = n.createTracker(r);
            c.move("> "), c.shift(2);
            const a = n.indentLines(n.containerFlow(e, c.current()), i);
            return o(), a;
        }
        function i(e, t, n) {
            return ">" + (n ? "" : " ") + e;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.blockquote = r;
    }, {} ],
    17: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.hardBreak = i;
        var r = e("../util/pattern-in-scope.js");
        function i(e, t, n, i) {
            let o = -1;
            for (;++o < n.unsafe.length; ) if ("\n" === n.unsafe[o].character && (0, r.patternInScope)(n.stack, n.unsafe[o])) return /[ \t]/.test(i.before) ? "" : " ";
            return "\\\n";
        }
    }, {
        "../util/pattern-in-scope.js": 58
    } ],
    18: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.code = c;
        var r = e("longest-streak"), i = e("../util/format-code-as-indented.js"), o = e("../util/check-fence.js");
        function c(e, t, n, c) {
            const s = (0, o.checkFence)(n), u = e.value || "", l = "`" === s ? "GraveAccent" : "Tilde";
            if ((0, i.formatCodeAsIndented)(e, n)) {
                const e = n.enter("codeIndented"), t = n.indentLines(u, a);
                return e(), t;
            }
            const f = n.createTracker(c), d = s.repeat(Math.max((0, r.longestStreak)(u, s) + 1, 3)), p = n.enter("codeFenced");
            let h = f.move(d);
            if (e.lang) {
                const t = n.enter(`codeFencedLang${l}`);
                h += f.move(n.safe(e.lang, {
                    before: h,
                    after: " ",
                    encode: [ "`" ],
                    ...f.current()
                })), t();
            }
            if (e.lang && e.meta) {
                const t = n.enter(`codeFencedMeta${l}`);
                h += f.move(" "), h += f.move(n.safe(e.meta, {
                    before: h,
                    after: "\n",
                    encode: [ "`" ],
                    ...f.current()
                })), t();
            }
            return h += f.move("\n"), u && (h += f.move(u + "\n")), h += f.move(d), p(), h;
        }
        function a(e, t, n) {
            return (n ? "" : "    ") + e;
        }
    }, {
        "../util/check-fence.js": 45,
        "../util/format-code-as-indented.js": 53,
        "longest-streak": 8
    } ],
    19: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.definition = i;
        var r = e("../util/check-quote.js");
        function i(e, t, n, i) {
            const o = (0, r.checkQuote)(n), c = '"' === o ? "Quote" : "Apostrophe", a = n.enter("definition");
            let s = n.enter("label");
            const u = n.createTracker(i);
            let l = u.move("[");
            return l += u.move(n.safe(n.associationId(e), {
                before: l,
                after: "]",
                ...u.current()
            })), l += u.move("]: "), s(), !e.url || /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"),
            l += u.move("<"), l += u.move(n.safe(e.url, {
                before: l,
                after: ">",
                ...u.current()
            })), l += u.move(">")) : (s = n.enter("destinationRaw"), l += u.move(n.safe(e.url, {
                before: l,
                after: e.title ? " " : "\n",
                ...u.current()
            }))), s(), e.title && (s = n.enter(`title${c}`), l += u.move(" " + o), l += u.move(n.safe(e.title, {
                before: l,
                after: o,
                ...u.current()
            })), l += u.move(o), s()), a(), l;
        }
    }, {
        "../util/check-quote.js": 47
    } ],
    20: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.emphasis = i;
        var r = e("../util/check-emphasis.js");
        function i(e, t, n, i) {
            const o = (0, r.checkEmphasis)(n), c = n.enter("emphasis"), a = n.createTracker(i);
            let s = a.move(o);
            return s += a.move(n.containerPhrasing(e, {
                before: s,
                after: o,
                ...a.current()
            })), s += a.move(o), c(), s;
        }
        function o(e, t, n) {
            return n.options.emphasis || "*";
        }
        i.peek = o;
    }, {
        "../util/check-emphasis.js": 44
    } ],
    21: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.heading = i;
        var r = e("../util/format-heading-as-setext.js");
        function i(e, t, n, i) {
            const o = Math.max(Math.min(6, e.depth || 1), 1), c = n.createTracker(i);
            if ((0, r.formatHeadingAsSetext)(e, n)) {
                const t = n.enter("headingSetext"), r = n.enter("phrasing"), i = n.containerPhrasing(e, {
                    ...c.current(),
                    before: "\n",
                    after: "\n"
                });
                return r(), t(), i + "\n" + (1 === o ? "=" : "-").repeat(i.length - (Math.max(i.lastIndexOf("\r"), i.lastIndexOf("\n")) + 1));
            }
            const a = "#".repeat(o), s = n.enter("headingAtx"), u = n.enter("phrasing");
            c.move(a + " ");
            let l = n.containerPhrasing(e, {
                before: "# ",
                after: "\n",
                ...c.current()
            });
            return /^[\t ]/.test(l) && (l = "&#x" + l.charCodeAt(0).toString(16).toUpperCase() + ";" + l.slice(1)),
            l = l ? a + " " + l : a, n.options.closeAtx && (l += " " + a), u(), s(), l;
        }
    }, {
        "../util/format-heading-as-setext.js": 54
    } ],
    22: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e.value || "";
        }
        function i() {
            return "<";
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.html = r, r.peek = i;
    }, {} ],
    23: [ function(e, t, n) {
        "use strict";
        function r(e, t, n, r) {
            const i = e.referenceType, o = n.enter("imageReference");
            let c = n.enter("label");
            const a = n.createTracker(r);
            let s = a.move("![");
            const u = n.safe(e.alt, {
                before: s,
                after: "]",
                ...a.current()
            });
            s += a.move(u + "]["), c();
            const l = n.stack;
            n.stack = [], c = n.enter("reference");
            const f = n.safe(n.associationId(e), {
                before: s,
                after: "]",
                ...a.current()
            });
            return c(), n.stack = l, o(), "full" !== i && u && u === f ? "shortcut" === i ? s = s.slice(0, -1) : s += a.move("]") : s += a.move(f + "]"),
            s;
        }
        function i() {
            return "!";
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.imageReference = r, r.peek = i;
    }, {} ],
    24: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.image = i;
        var r = e("../util/check-quote.js");
        function i(e, t, n, i) {
            const o = (0, r.checkQuote)(n), c = '"' === o ? "Quote" : "Apostrophe", a = n.enter("image");
            let s = n.enter("label");
            const u = n.createTracker(i);
            let l = u.move("![");
            return l += u.move(n.safe(e.alt, {
                before: l,
                after: "]",
                ...u.current()
            })), l += u.move("]("), s(), !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"),
            l += u.move("<"), l += u.move(n.safe(e.url, {
                before: l,
                after: ">",
                ...u.current()
            })), l += u.move(">")) : (s = n.enter("destinationRaw"), l += u.move(n.safe(e.url, {
                before: l,
                after: e.title ? " " : ")",
                ...u.current()
            }))), s(), e.title && (s = n.enter(`title${c}`), l += u.move(" " + o), l += u.move(n.safe(e.title, {
                before: l,
                after: o,
                ...u.current()
            })), l += u.move(o), s()), l += u.move(")"), a(), l;
        }
        function o() {
            return "!";
        }
        i.peek = o;
    }, {
        "../util/check-quote.js": 47
    } ],
    25: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.handle = void 0;
        var r = e("./blockquote.js"), i = e("./break.js"), o = e("./code.js"), c = e("./definition.js"), a = e("./emphasis.js"), s = e("./heading.js"), u = e("./html.js"), l = e("./image.js"), f = e("./image-reference.js"), d = e("./inline-code.js"), p = e("./link.js"), h = e("./link-reference.js"), m = e("./list.js"), g = e("./list-item.js"), b = e("./paragraph.js"), y = e("./root.js"), k = e("./strong.js"), v = e("./text.js"), E = e("./thematic-break.js");
        const _ = {
            blockquote: r.blockquote,
            break: i.hardBreak,
            code: o.code,
            definition: c.definition,
            emphasis: a.emphasis,
            hardBreak: i.hardBreak,
            heading: s.heading,
            html: u.html,
            image: l.image,
            imageReference: f.imageReference,
            inlineCode: d.inlineCode,
            link: p.link,
            linkReference: h.linkReference,
            list: m.list,
            listItem: g.listItem,
            paragraph: b.paragraph,
            root: y.root,
            strong: k.strong,
            text: v.text,
            thematicBreak: E.thematicBreak
        };
        n.handle = _;
    }, {
        "./blockquote.js": 16,
        "./break.js": 17,
        "./code.js": 18,
        "./definition.js": 19,
        "./emphasis.js": 20,
        "./heading.js": 21,
        "./html.js": 22,
        "./image-reference.js": 23,
        "./image.js": 24,
        "./inline-code.js": 26,
        "./link-reference.js": 27,
        "./link.js": 28,
        "./list-item.js": 29,
        "./list.js": 30,
        "./paragraph.js": 31,
        "./root.js": 32,
        "./strong.js": 33,
        "./text.js": 34,
        "./thematic-break.js": 35
    } ],
    26: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.inlineCode = i;
        var r = e("../util/pattern-compile.js");
        function i(e, t, n) {
            let i = e.value || "", o = "`", c = -1;
            for (;new RegExp("(^|[^`])" + o + "([^`]|$)").test(i); ) o += "`";
            for (/[^ \r\n]/.test(i) && (/^[ \r\n]/.test(i) && /[ \r\n]$/.test(i) || /^`|`$/.test(i)) && (i = " " + i + " "); ++c < n.unsafe.length; ) {
                const e = n.unsafe[c], t = (0, r.patternCompile)(e);
                let o;
                if (e.atBreak) for (;o = t.exec(i); ) {
                    let e = o.index;
                    10 === i.charCodeAt(e) && 13 === i.charCodeAt(e - 1) && e--, i = i.slice(0, e) + " " + i.slice(o.index + 1);
                }
            }
            return o + i + o;
        }
        function o() {
            return "`";
        }
        i.peek = o;
    }, {
        "../util/pattern-compile.js": 57
    } ],
    27: [ function(e, t, n) {
        "use strict";
        function r(e, t, n, r) {
            const i = e.referenceType, o = n.enter("linkReference");
            let c = n.enter("label");
            const a = n.createTracker(r);
            let s = a.move("[");
            const u = n.containerPhrasing(e, {
                before: s,
                after: "]",
                ...a.current()
            });
            s += a.move(u + "]["), c();
            const l = n.stack;
            n.stack = [], c = n.enter("reference");
            const f = n.safe(n.associationId(e), {
                before: s,
                after: "]",
                ...a.current()
            });
            return c(), n.stack = l, o(), "full" !== i && u && u === f ? "shortcut" === i ? s = s.slice(0, -1) : s += a.move("]") : s += a.move(f + "]"),
            s;
        }
        function i() {
            return "[";
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.linkReference = r, r.peek = i;
    }, {} ],
    28: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.link = o;
        var r = e("../util/check-quote.js"), i = e("../util/format-link-as-autolink.js");
        function o(e, t, n, o) {
            const c = (0, r.checkQuote)(n), a = '"' === c ? "Quote" : "Apostrophe", s = n.createTracker(o);
            let u, l;
            if ((0, i.formatLinkAsAutolink)(e, n)) {
                const t = n.stack;
                n.stack = [], u = n.enter("autolink");
                let r = s.move("<");
                return r += s.move(n.containerPhrasing(e, {
                    before: r,
                    after: ">",
                    ...s.current()
                })), r += s.move(">"), u(), n.stack = t, r;
            }
            u = n.enter("link"), l = n.enter("label");
            let f = s.move("[");
            return f += s.move(n.containerPhrasing(e, {
                before: f,
                after: "](",
                ...s.current()
            })), f += s.move("]("), l(), !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (l = n.enter("destinationLiteral"),
            f += s.move("<"), f += s.move(n.safe(e.url, {
                before: f,
                after: ">",
                ...s.current()
            })), f += s.move(">")) : (l = n.enter("destinationRaw"), f += s.move(n.safe(e.url, {
                before: f,
                after: e.title ? " " : ")",
                ...s.current()
            }))), l(), e.title && (l = n.enter(`title${a}`), f += s.move(" " + c), f += s.move(n.safe(e.title, {
                before: f,
                after: c,
                ...s.current()
            })), f += s.move(c), l()), f += s.move(")"), u(), f;
        }
        function c(e, t, n) {
            return (0, i.formatLinkAsAutolink)(e, n) ? "<" : "[";
        }
        o.peek = c;
    }, {
        "../util/check-quote.js": 47,
        "../util/format-link-as-autolink.js": 55
    } ],
    29: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.listItem = o;
        var r = e("../util/check-bullet.js"), i = e("../util/check-list-item-indent.js");
        function o(e, t, n, o) {
            const c = (0, i.checkListItemIndent)(n);
            let a = n.bulletCurrent || (0, r.checkBullet)(n);
            t && "list" === t.type && t.ordered && (a = ("number" == typeof t.start && t.start > -1 ? t.start : 1) + (!1 === n.options.incrementListMarker ? 0 : t.children.indexOf(e)) + a);
            let s = a.length + 1;
            ("tab" === c || "mixed" === c && (t && "list" === t.type && t.spread || e.spread)) && (s = 4 * Math.ceil(s / 4));
            const u = n.createTracker(o);
            u.move(a + " ".repeat(s - a.length)), u.shift(s);
            const l = n.enter("listItem"), f = n.indentLines(n.containerFlow(e, u.current()), d);
            return l(), f;
            function d(e, t, n) {
                return t ? (n ? "" : " ".repeat(s)) + e : (n ? a : a + " ".repeat(s - a.length)) + e;
            }
        }
    }, {
        "../util/check-bullet.js": 43,
        "../util/check-list-item-indent.js": 46
    } ],
    30: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.list = s;
        var r = e("../util/check-bullet.js"), i = e("../util/check-bullet-other.js"), o = e("../util/check-bullet-ordered.js"), c = e("../util/check-bullet-ordered-other.js"), a = e("../util/check-rule.js");
        function s(e, t, n, s) {
            const u = n.enter("list"), l = n.bulletCurrent;
            let f = e.ordered ? (0, o.checkBulletOrdered)(n) : (0, r.checkBullet)(n);
            const d = e.ordered ? (0, c.checkBulletOrderedOther)(n) : (0, i.checkBulletOther)(n), p = n.bulletLastUsed;
            let h = !1;
            if (t && (e.ordered ? n.options.bulletOrderedOther : n.options.bulletOther) && p && f === p && (h = !0),
            !e.ordered) {
                const t = e.children ? e.children[0] : void 0;
                if ("*" !== f && "-" !== f || !t || t.children && t.children[0] || "list" !== n.stack[n.stack.length - 1] || "listItem" !== n.stack[n.stack.length - 2] || "list" !== n.stack[n.stack.length - 3] || "listItem" !== n.stack[n.stack.length - 4] || 0 !== n.indexStack[n.indexStack.length - 1] || 0 !== n.indexStack[n.indexStack.length - 2] || 0 !== n.indexStack[n.indexStack.length - 3] || (h = !0),
                (0, a.checkRule)(n) === f && t) {
                    let t = -1;
                    for (;++t < e.children.length; ) {
                        const n = e.children[t];
                        if (n && "listItem" === n.type && n.children && n.children[0] && "thematicBreak" === n.children[0].type) {
                            h = !0;
                            break;
                        }
                    }
                }
            }
            h && (f = d), n.bulletCurrent = f;
            const m = n.containerFlow(e, s);
            return n.bulletLastUsed = f, n.bulletCurrent = l, u(), m;
        }
    }, {
        "../util/check-bullet-ordered-other.js": 40,
        "../util/check-bullet-ordered.js": 41,
        "../util/check-bullet-other.js": 42,
        "../util/check-bullet.js": 43,
        "../util/check-rule.js": 49
    } ],
    31: [ function(e, t, n) {
        "use strict";
        function r(e, t, n, r) {
            const i = n.enter("paragraph"), o = n.enter("phrasing"), c = n.containerPhrasing(e, r);
            return o(), i(), c;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.paragraph = r;
    }, {} ],
    32: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.root = i;
        var r = e("mdast-util-phrasing");
        function i(e, t, n, i) {
            const o = undefined, c = undefined;
            return (e.children.some((e => (0, r.phrasing)(e))) ? n.containerPhrasing : n.containerFlow).call(n, e, i);
        }
    }, {
        "mdast-util-phrasing": 12
    } ],
    33: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.strong = i;
        var r = e("../util/check-strong.js");
        function i(e, t, n, i) {
            const o = (0, r.checkStrong)(n), c = n.enter("strong"), a = n.createTracker(i);
            let s = a.move(o + o);
            return s += a.move(n.containerPhrasing(e, {
                before: s,
                after: o,
                ...a.current()
            })), s += a.move(o + o), c(), s;
        }
        function o(e, t, n) {
            return n.options.strong || "*";
        }
        i.peek = o;
    }, {
        "../util/check-strong.js": 50
    } ],
    34: [ function(e, t, n) {
        "use strict";
        function r(e, t, n, r) {
            return n.safe(e.value, r);
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.text = r;
    }, {} ],
    35: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.thematicBreak = o;
        var r = e("../util/check-rule-repetition.js"), i = e("../util/check-rule.js");
        function o(e, t, n) {
            const o = ((0, i.checkRule)(n) + (n.options.ruleSpaces ? " " : "")).repeat((0, r.checkRuleRepetition)(n));
            return n.options.ruleSpaces ? o.slice(0, -1) : o;
        }
    }, {
        "../util/check-rule-repetition.js": 48,
        "../util/check-rule.js": 49
    } ],
    36: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.toMarkdown = h;
        var r = e("zwitch"), i = e("./configure.js"), o = e("./handle/index.js"), c = e("./join.js"), a = e("./unsafe.js"), s = e("./util/association.js"), u = e("./util/container-phrasing.js"), l = e("./util/container-flow.js"), f = e("./util/indent-lines.js"), d = e("./util/safe.js"), p = e("./util/track.js");
        function h(e, t = {}) {
            const n = {
                enter: l,
                indentLines: f.indentLines,
                associationId: s.association,
                containerPhrasing: y,
                containerFlow: k,
                createTracker: p.track,
                safe: v,
                stack: [],
                unsafe: [],
                join: [],
                handlers: {},
                options: {},
                indexStack: [],
                handle: void 0
            };
            (0, i.configure)(n, {
                unsafe: a.unsafe,
                join: c.join,
                handlers: o.handle
            }), (0, i.configure)(n, t), n.options.tightDefinitions && (0, i.configure)(n, {
                join: [ b ]
            }), n.handle = (0, r.zwitch)("type", {
                invalid: m,
                unknown: g,
                handlers: n.handlers
            });
            let u = n.handle(e, void 0, n, {
                before: "\n",
                after: "\n",
                now: {
                    line: 1,
                    column: 1
                },
                lineShift: 0
            });
            return u && 10 !== u.charCodeAt(u.length - 1) && 13 !== u.charCodeAt(u.length - 1) && (u += "\n"),
            u;
            function l(e) {
                return n.stack.push(e), t;
                function t() {
                    n.stack.pop();
                }
            }
        }
        function m(e) {
            throw new Error("Cannot handle value `" + e + "`, expected node");
        }
        function g(e) {
            throw new Error("Cannot handle unknown node `" + e.type + "`");
        }
        function b(e, t) {
            if ("definition" === e.type && e.type === t.type) return 0;
        }
        function y(e, t) {
            return (0, u.containerPhrasing)(e, this, t);
        }
        function k(e, t) {
            return (0, l.containerFlow)(e, this, t);
        }
        function v(e, t) {
            return (0, d.safe)(this, e, t);
        }
    }, {
        "./configure.js": 15,
        "./handle/index.js": 25,
        "./join.js": 37,
        "./unsafe.js": 38,
        "./util/association.js": 39,
        "./util/container-flow.js": 51,
        "./util/container-phrasing.js": 52,
        "./util/indent-lines.js": 56,
        "./util/safe.js": 59,
        "./util/track.js": 60,
        zwitch: 152
    } ],
    37: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.join = void 0;
        var r = e("./util/format-code-as-indented.js"), i = e("./util/format-heading-as-setext.js");
        const o = [ c ];
        function c(e, t, n, o) {
            if ("code" === t.type && (0, r.formatCodeAsIndented)(t, o) && ("list" === e.type || e.type === t.type && (0,
            r.formatCodeAsIndented)(e, o))) return !1;
            if ("list" === e.type && e.type === t.type && Boolean(e.ordered) === Boolean(t.ordered) && !(e.ordered ? o.options.bulletOrderedOther : o.options.bulletOther)) return !1;
            if ("spread" in n && "boolean" == typeof n.spread) {
                if ("paragraph" === e.type && (e.type === t.type || "definition" === t.type || "heading" === t.type && (0,
                i.formatHeadingAsSetext)(t, o))) return;
                return n.spread ? 1 : 0;
            }
        }
        n.join = o;
    }, {
        "./util/format-code-as-indented.js": 53,
        "./util/format-heading-as-setext.js": 54
    } ],
    38: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.unsafe = void 0;
        const r = [ "autolink", "destinationLiteral", "destinationRaw", "reference", "titleQuote", "titleApostrophe" ], i = [ {
            character: "\t",
            after: "[\\r\\n]",
            inConstruct: "phrasing"
        }, {
            character: "\t",
            before: "[\\r\\n]",
            inConstruct: "phrasing"
        }, {
            character: "\t",
            inConstruct: [ "codeFencedLangGraveAccent", "codeFencedLangTilde" ]
        }, {
            character: "\r",
            inConstruct: [ "codeFencedLangGraveAccent", "codeFencedLangTilde", "codeFencedMetaGraveAccent", "codeFencedMetaTilde", "destinationLiteral", "headingAtx" ]
        }, {
            character: "\n",
            inConstruct: [ "codeFencedLangGraveAccent", "codeFencedLangTilde", "codeFencedMetaGraveAccent", "codeFencedMetaTilde", "destinationLiteral", "headingAtx" ]
        }, {
            character: " ",
            after: "[\\r\\n]",
            inConstruct: "phrasing"
        }, {
            character: " ",
            before: "[\\r\\n]",
            inConstruct: "phrasing"
        }, {
            character: " ",
            inConstruct: [ "codeFencedLangGraveAccent", "codeFencedLangTilde" ]
        }, {
            character: "!",
            after: "\\[",
            inConstruct: "phrasing",
            notInConstruct: r
        }, {
            character: '"',
            inConstruct: "titleQuote"
        }, {
            atBreak: !0,
            character: "#"
        }, {
            character: "#",
            inConstruct: "headingAtx",
            after: "(?:[\r\n]|$)"
        }, {
            character: "&",
            after: "[#A-Za-z]",
            inConstruct: "phrasing"
        }, {
            character: "'",
            inConstruct: "titleApostrophe"
        }, {
            character: "(",
            inConstruct: "destinationRaw"
        }, {
            before: "\\]",
            character: "(",
            inConstruct: "phrasing",
            notInConstruct: r
        }, {
            atBreak: !0,
            before: "\\d+",
            character: ")"
        }, {
            character: ")",
            inConstruct: "destinationRaw"
        }, {
            atBreak: !0,
            character: "*",
            after: "(?:[ \t\r\n*])"
        }, {
            character: "*",
            inConstruct: "phrasing",
            notInConstruct: r
        }, {
            atBreak: !0,
            character: "+",
            after: "(?:[ \t\r\n])"
        }, {
            atBreak: !0,
            character: "-",
            after: "(?:[ \t\r\n-])"
        }, {
            atBreak: !0,
            before: "\\d+",
            character: ".",
            after: "(?:[ \t\r\n]|$)"
        }, {
            atBreak: !0,
            character: "<",
            after: "[!/?A-Za-z]"
        }, {
            character: "<",
            after: "[!/?A-Za-z]",
            inConstruct: "phrasing",
            notInConstruct: r
        }, {
            character: "<",
            inConstruct: "destinationLiteral"
        }, {
            atBreak: !0,
            character: "="
        }, {
            atBreak: !0,
            character: ">"
        }, {
            character: ">",
            inConstruct: "destinationLiteral"
        }, {
            atBreak: !0,
            character: "["
        }, {
            character: "[",
            inConstruct: "phrasing",
            notInConstruct: r
        }, {
            character: "[",
            inConstruct: [ "label", "reference" ]
        }, {
            character: "\\",
            after: "[\\r\\n]",
            inConstruct: "phrasing"
        }, {
            character: "]",
            inConstruct: [ "label", "reference" ]
        }, {
            atBreak: !0,
            character: "_"
        }, {
            character: "_",
            inConstruct: "phrasing",
            notInConstruct: r
        }, {
            atBreak: !0,
            character: "`"
        }, {
            character: "`",
            inConstruct: [ "codeFencedLangGraveAccent", "codeFencedMetaGraveAccent" ]
        }, {
            character: "`",
            inConstruct: "phrasing",
            notInConstruct: r
        }, {
            atBreak: !0,
            character: "~"
        } ];
        n.unsafe = i;
    }, {} ],
    39: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.association = i;
        var r = e("micromark-util-decode-string");
        function i(e) {
            return e.label || !e.identifier ? e.label || "" : (0, r.decodeString)(e.identifier);
        }
    }, {
        "micromark-util-decode-string": 96
    } ],
    40: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.checkBulletOrderedOther = i;
        var r = e("./check-bullet-ordered.js");
        function i(e) {
            const t = (0, r.checkBulletOrdered)(e), n = e.options.bulletOrderedOther;
            if (!n) return "." === t ? ")" : ".";
            if ("." !== n && ")" !== n) throw new Error("Cannot serialize items with `" + n + "` for `options.bulletOrderedOther`, expected `*`, `+`, or `-`");
            if (n === t) throw new Error("Expected `bulletOrdered` (`" + t + "`) and `bulletOrderedOther` (`" + n + "`) to be different");
            return n;
        }
    }, {
        "./check-bullet-ordered.js": 41
    } ],
    41: [ function(e, t, n) {
        "use strict";
        function r(e) {
            const t = e.options.bulletOrdered || ".";
            if ("." !== t && ")" !== t) throw new Error("Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`");
            return t;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.checkBulletOrdered = r;
    }, {} ],
    42: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.checkBulletOther = i;
        var r = e("./check-bullet.js");
        function i(e) {
            const t = (0, r.checkBullet)(e), n = e.options.bulletOther;
            if (!n) return "*" === t ? "-" : "*";
            if ("*" !== n && "+" !== n && "-" !== n) throw new Error("Cannot serialize items with `" + n + "` for `options.bulletOther`, expected `*`, `+`, or `-`");
            if (n === t) throw new Error("Expected `bullet` (`" + t + "`) and `bulletOther` (`" + n + "`) to be different");
            return n;
        }
    }, {
        "./check-bullet.js": 43
    } ],
    43: [ function(e, t, n) {
        "use strict";
        function r(e) {
            const t = e.options.bullet || "*";
            if ("*" !== t && "+" !== t && "-" !== t) throw new Error("Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`");
            return t;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.checkBullet = r;
    }, {} ],
    44: [ function(e, t, n) {
        "use strict";
        function r(e) {
            const t = e.options.emphasis || "*";
            if ("*" !== t && "_" !== t) throw new Error("Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`");
            return t;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.checkEmphasis = r;
    }, {} ],
    45: [ function(e, t, n) {
        "use strict";
        function r(e) {
            const t = e.options.fence || "`";
            if ("`" !== t && "~" !== t) throw new Error("Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`");
            return t;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.checkFence = r;
    }, {} ],
    46: [ function(e, t, n) {
        "use strict";
        function r(e) {
            const t = e.options.listItemIndent || "tab";
            if (1 === t || "1" === t) return "one";
            if ("tab" !== t && "one" !== t && "mixed" !== t) throw new Error("Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
            return t;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.checkListItemIndent = r;
    }, {} ],
    47: [ function(e, t, n) {
        "use strict";
        function r(e) {
            const t = e.options.quote || '"';
            if ('"' !== t && "'" !== t) throw new Error("Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`");
            return t;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.checkQuote = r;
    }, {} ],
    48: [ function(e, t, n) {
        "use strict";
        function r(e) {
            const t = e.options.ruleRepetition || 3;
            if (t < 3) throw new Error("Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more");
            return t;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.checkRuleRepetition = r;
    }, {} ],
    49: [ function(e, t, n) {
        "use strict";
        function r(e) {
            const t = e.options.rule || "*";
            if ("*" !== t && "-" !== t && "_" !== t) throw new Error("Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`");
            return t;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.checkRule = r;
    }, {} ],
    50: [ function(e, t, n) {
        "use strict";
        function r(e) {
            const t = e.options.strong || "*";
            if ("*" !== t && "_" !== t) throw new Error("Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`");
            return t;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.checkStrong = r;
    }, {} ],
    51: [ function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            const r = t.indexStack, o = e.children || [], c = t.createTracker(n), a = [];
            let s = -1;
            for (r.push(-1); ++s < o.length; ) {
                const n = o[s];
                r[r.length - 1] = s, a.push(c.move(t.handle(n, e, t, {
                    before: "\n",
                    after: "\n",
                    ...c.current()
                }))), "list" !== n.type && (t.bulletLastUsed = void 0), s < o.length - 1 && a.push(c.move(i(n, o[s + 1], e, t)));
            }
            return r.pop(), a.join("");
        }
        function i(e, t, n, r) {
            let i = r.join.length;
            for (;i--; ) {
                const o = r.join[i](e, t, n, r);
                if (!0 === o || 1 === o) break;
                if ("number" == typeof o) return "\n".repeat(1 + o);
                if (!1 === o) return "\n\n\x3c!----\x3e\n\n";
            }
            return "\n\n";
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.containerFlow = r;
    }, {} ],
    52: [ function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            const r = t.indexStack, i = e.children || [], o = [];
            let c = -1, a = n.before;
            r.push(-1);
            let s = t.createTracker(n);
            for (;++c < i.length; ) {
                const u = i[c];
                let l;
                if (r[r.length - 1] = c, c + 1 < i.length) {
                    let n = t.handle.handlers[i[c + 1].type];
                    n && n.peek && (n = n.peek), l = n ? n(i[c + 1], e, t, {
                        before: "",
                        after: "",
                        ...s.current()
                    }).charAt(0) : "";
                } else l = n.after;
                o.length > 0 && ("\r" === a || "\n" === a) && "html" === u.type && (o[o.length - 1] = o[o.length - 1].replace(/(\r?\n|\r)$/, " "),
                a = " ", s = t.createTracker(n), s.move(o.join(""))), o.push(s.move(t.handle(u, e, t, {
                    ...s.current(),
                    before: a,
                    after: l
                }))), a = o[o.length - 1].slice(-1);
            }
            return r.pop(), o.join("");
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.containerPhrasing = r;
    }, {} ],
    53: [ function(e, t, n) {
        "use strict";
        function r(e, t) {
            return Boolean(!t.options.fences && e.value && !e.lang && /[^ \r\n]/.test(e.value) && !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.formatCodeAsIndented = r;
    }, {} ],
    54: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.formatHeadingAsSetext = o;
        var r = e("unist-util-visit"), i = e("mdast-util-to-string");
        function o(e, t) {
            let n = !1;
            return (0, r.visit)(e, (e => {
                if ("value" in e && /\r?\n|\r/.test(e.value) || "break" === e.type) return n = !0,
                r.EXIT;
            })), Boolean((!e.depth || e.depth < 3) && (0, i.toString)(e) && (t.options.setext || n));
        }
    }, {
        "mdast-util-to-string": 61,
        "unist-util-visit": 127
    } ],
    55: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.formatLinkAsAutolink = i;
        var r = e("mdast-util-to-string");
        function i(e, t) {
            const n = (0, r.toString)(e);
            return Boolean(!t.options.resourceLink && e.url && !e.title && e.children && 1 === e.children.length && "text" === e.children[0].type && (n === e.url || "mailto:" + n === e.url) && /^[a-z][a-z+.-]+:/i.test(e.url) && !/[\0- <>\u007F]/.test(e.url));
        }
    }, {
        "mdast-util-to-string": 61
    } ],
    56: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.indentLines = i;
        const r = /\r?\n|\r/g;
        function i(e, t) {
            const n = [];
            let i = 0, o = 0, c;
            for (;c = r.exec(e); ) a(e.slice(i, c.index)), n.push(c[0]), i = c.index + c[0].length,
            o++;
            return a(e.slice(i)), n.join("");
            function a(e) {
                n.push(t(e, o, !e));
            }
        }
    }, {} ],
    57: [ function(e, t, n) {
        "use strict";
        function r(e) {
            if (!e._compiled) {
                const t = (e.atBreak ? "[\\r\\n][\\t ]*" : "") + (e.before ? "(?:" + e.before + ")" : "");
                e._compiled = new RegExp((t ? "(" + t + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(e.character) ? "\\" : "") + e.character + (e.after ? "(?:" + e.after + ")" : ""), "g");
            }
            return e._compiled;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.patternCompile = r;
    }, {} ],
    58: [ function(e, t, n) {
        "use strict";
        function r(e, t) {
            return i(e, t.inConstruct, !0) && !i(e, t.notInConstruct, !1);
        }
        function i(e, t, n) {
            if ("string" == typeof t && (t = [ t ]), !t || 0 === t.length) return n;
            let r = -1;
            for (;++r < t.length; ) if (e.includes(t[r])) return !0;
            return !1;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.patternInScope = r;
    }, {} ],
    59: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.safe = o;
        var r = e("./pattern-compile.js"), i = e("./pattern-in-scope.js");
        function o(e, t, n) {
            const o = (n.before || "") + (t || "") + (n.after || ""), s = [], u = [], l = {};
            let f = -1;
            for (;++f < e.unsafe.length; ) {
                const t = e.unsafe[f];
                if (!(0, i.patternInScope)(e.stack, t)) continue;
                const n = (0, r.patternCompile)(t);
                let c;
                for (;c = n.exec(o); ) {
                    const e = "before" in t || Boolean(t.atBreak), n = "after" in t, r = c.index + (e ? c[1].length : 0);
                    s.includes(r) ? (l[r].before && !e && (l[r].before = !1), l[r].after && !n && (l[r].after = !1)) : (s.push(r),
                    l[r] = {
                        before: e,
                        after: n
                    });
                }
            }
            s.sort(c);
            let d = n.before ? n.before.length : 0;
            const p = o.length - (n.after ? n.after.length : 0);
            for (f = -1; ++f < s.length; ) {
                const e = s[f];
                e < d || e >= p || (e + 1 < p && s[f + 1] === e + 1 && l[e].after && !l[e + 1].before && !l[e + 1].after || s[f - 1] === e - 1 && l[e].before && !l[e - 1].before && !l[e - 1].after || (d !== e && u.push(a(o.slice(d, e), "\\")),
                d = e, !/[!-/:-@[-`{-~]/.test(o.charAt(e)) || n.encode && n.encode.includes(o.charAt(e)) ? (u.push("&#x" + o.charCodeAt(e).toString(16).toUpperCase() + ";"),
                d++) : u.push("\\")));
            }
            return u.push(a(o.slice(d, p), n.after)), u.join("");
        }
        function c(e, t) {
            return e - t;
        }
        function a(e, t) {
            const n = /\\(?=[!-/:-@[-`{-~])/g, r = [], i = [], o = e + t;
            let c = -1, a = 0, s;
            for (;s = n.exec(o); ) r.push(s.index);
            for (;++c < r.length; ) a !== r[c] && i.push(e.slice(a, r[c])), i.push("\\"), a = r[c];
            return i.push(e.slice(a)), i.join("");
        }
    }, {
        "./pattern-compile.js": 57,
        "./pattern-in-scope.js": 58
    } ],
    60: [ function(e, t, n) {
        "use strict";
        function r(e) {
            const t = e || {}, n = t.now || {};
            let r = t.lineShift || 0, i = n.line || 1, o = n.column || 1;
            return {
                move: s,
                current: c,
                shift: a
            };
            function c() {
                return {
                    now: {
                        line: i,
                        column: o
                    },
                    lineShift: r
                };
            }
            function a(e) {
                r += e;
            }
            function s(e) {
                const t = e || "", n = t.split(/\r?\n|\r/g), c = n[n.length - 1];
                return i += n.length - 1, o = 1 === n.length ? o + c.length : 1 + c.length + r,
                t;
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.track = r;
    }, {} ],
    61: [ function(e, t, n) {
        "use strict";
        function r(e, t) {
            var {includeImageAlt: n = !0} = t || {};
            return i(e, n);
        }
        function i(e, t) {
            return e && "object" == typeof e && (e.value || (t ? e.alt : "") || "children" in e && o(e.children, t) || Array.isArray(e) && o(e, t)) || "";
        }
        function o(e, t) {
            for (var n = [], r = -1; ++r < e.length; ) n[r] = i(e[r], t);
            return n.join("");
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.toString = r;
    }, {} ],
    62: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), Object.defineProperty(n, "attention", {
            enumerable: !0,
            get: function() {
                return r.attention;
            }
        }), Object.defineProperty(n, "autolink", {
            enumerable: !0,
            get: function() {
                return i.autolink;
            }
        }), Object.defineProperty(n, "blankLine", {
            enumerable: !0,
            get: function() {
                return o.blankLine;
            }
        }), Object.defineProperty(n, "blockQuote", {
            enumerable: !0,
            get: function() {
                return c.blockQuote;
            }
        }), Object.defineProperty(n, "characterEscape", {
            enumerable: !0,
            get: function() {
                return a.characterEscape;
            }
        }), Object.defineProperty(n, "characterReference", {
            enumerable: !0,
            get: function() {
                return s.characterReference;
            }
        }), Object.defineProperty(n, "codeFenced", {
            enumerable: !0,
            get: function() {
                return u.codeFenced;
            }
        }), Object.defineProperty(n, "codeIndented", {
            enumerable: !0,
            get: function() {
                return l.codeIndented;
            }
        }), Object.defineProperty(n, "codeText", {
            enumerable: !0,
            get: function() {
                return f.codeText;
            }
        }), Object.defineProperty(n, "content", {
            enumerable: !0,
            get: function() {
                return d.content;
            }
        }), Object.defineProperty(n, "definition", {
            enumerable: !0,
            get: function() {
                return p.definition;
            }
        }), Object.defineProperty(n, "hardBreakEscape", {
            enumerable: !0,
            get: function() {
                return h.hardBreakEscape;
            }
        }), Object.defineProperty(n, "headingAtx", {
            enumerable: !0,
            get: function() {
                return m.headingAtx;
            }
        }), Object.defineProperty(n, "htmlFlow", {
            enumerable: !0,
            get: function() {
                return g.htmlFlow;
            }
        }), Object.defineProperty(n, "htmlText", {
            enumerable: !0,
            get: function() {
                return b.htmlText;
            }
        }), Object.defineProperty(n, "labelEnd", {
            enumerable: !0,
            get: function() {
                return y.labelEnd;
            }
        }), Object.defineProperty(n, "labelStartImage", {
            enumerable: !0,
            get: function() {
                return k.labelStartImage;
            }
        }), Object.defineProperty(n, "labelStartLink", {
            enumerable: !0,
            get: function() {
                return v.labelStartLink;
            }
        }), Object.defineProperty(n, "lineEnding", {
            enumerable: !0,
            get: function() {
                return E.lineEnding;
            }
        }), Object.defineProperty(n, "list", {
            enumerable: !0,
            get: function() {
                return _.list;
            }
        }), Object.defineProperty(n, "setextUnderline", {
            enumerable: !0,
            get: function() {
                return w.setextUnderline;
            }
        }), Object.defineProperty(n, "thematicBreak", {
            enumerable: !0,
            get: function() {
                return x.thematicBreak;
            }
        });
        var r = e("./lib/attention.js"), i = e("./lib/autolink.js"), o = e("./lib/blank-line.js"), c = e("./lib/block-quote.js"), a = e("./lib/character-escape.js"), s = e("./lib/character-reference.js"), u = e("./lib/code-fenced.js"), l = e("./lib/code-indented.js"), f = e("./lib/code-text.js"), d = e("./lib/content.js"), p = e("./lib/definition.js"), h = e("./lib/hard-break-escape.js"), m = e("./lib/heading-atx.js"), g = e("./lib/html-flow.js"), b = e("./lib/html-text.js"), y = e("./lib/label-end.js"), k = e("./lib/label-start-image.js"), v = e("./lib/label-start-link.js"), E = e("./lib/line-ending.js"), _ = e("./lib/list.js"), w = e("./lib/setext-underline.js"), x = e("./lib/thematic-break.js");
    }, {
        "./lib/attention.js": 63,
        "./lib/autolink.js": 64,
        "./lib/blank-line.js": 65,
        "./lib/block-quote.js": 66,
        "./lib/character-escape.js": 67,
        "./lib/character-reference.js": 68,
        "./lib/code-fenced.js": 69,
        "./lib/code-indented.js": 70,
        "./lib/code-text.js": 71,
        "./lib/content.js": 72,
        "./lib/definition.js": 73,
        "./lib/hard-break-escape.js": 74,
        "./lib/heading-atx.js": 75,
        "./lib/html-flow.js": 76,
        "./lib/html-text.js": 77,
        "./lib/label-end.js": 78,
        "./lib/label-start-image.js": 79,
        "./lib/label-start-link.js": 80,
        "./lib/line-ending.js": 81,
        "./lib/list.js": 82,
        "./lib/setext-underline.js": 83,
        "./lib/thematic-break.js": 84
    } ],
    63: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.attention = void 0;
        var r = e("micromark-util-chunked"), i = e("micromark-util-classify-character"), o = e("micromark-util-resolve-all");
        const c = {
            name: "attention",
            tokenize: s,
            resolveAll: a
        };
        function a(e, t) {
            let n = -1, i, c, a, s, l, f, d, p;
            for (;++n < e.length; ) if ("enter" === e[n][0] && "attentionSequence" === e[n][1].type && e[n][1]._close) for (i = n; i--; ) if ("exit" === e[i][0] && "attentionSequence" === e[i][1].type && e[i][1]._open && t.sliceSerialize(e[i][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
                if ((e[i][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[i][1].end.offset - e[i][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
                f = e[i][1].end.offset - e[i][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
                const h = Object.assign({}, e[i][1].end), m = Object.assign({}, e[n][1].start);
                u(h, -f), u(m, f), s = {
                    type: f > 1 ? "strongSequence" : "emphasisSequence",
                    start: h,
                    end: Object.assign({}, e[i][1].end)
                }, l = {
                    type: f > 1 ? "strongSequence" : "emphasisSequence",
                    start: Object.assign({}, e[n][1].start),
                    end: m
                }, a = {
                    type: f > 1 ? "strongText" : "emphasisText",
                    start: Object.assign({}, e[i][1].end),
                    end: Object.assign({}, e[n][1].start)
                }, c = {
                    type: f > 1 ? "strong" : "emphasis",
                    start: Object.assign({}, s.start),
                    end: Object.assign({}, l.end)
                }, e[i][1].end = Object.assign({}, s.start), e[n][1].start = Object.assign({}, l.end),
                d = [], e[i][1].end.offset - e[i][1].start.offset && (d = (0, r.push)(d, [ [ "enter", e[i][1], t ], [ "exit", e[i][1], t ] ])),
                d = (0, r.push)(d, [ [ "enter", c, t ], [ "enter", s, t ], [ "exit", s, t ], [ "enter", a, t ] ]),
                d = (0, r.push)(d, (0, o.resolveAll)(t.parser.constructs.insideSpan.null, e.slice(i + 1, n), t)),
                d = (0, r.push)(d, [ [ "exit", a, t ], [ "enter", l, t ], [ "exit", l, t ], [ "exit", c, t ] ]),
                e[n][1].end.offset - e[n][1].start.offset ? (p = 2, d = (0, r.push)(d, [ [ "enter", e[n][1], t ], [ "exit", e[n][1], t ] ])) : p = 0,
                (0, r.splice)(e, i - 1, n - i + 3, d), n = i + d.length - p - 2;
                break;
            }
            for (n = -1; ++n < e.length; ) "attentionSequence" === e[n][1].type && (e[n][1].type = "data");
            return e;
        }
        function s(e, t) {
            const n = this.parser.constructs.attentionMarkers.null, r = this.previous, o = (0,
            i.classifyCharacter)(r);
            let c;
            return a;
            function a(t) {
                return e.enter("attentionSequence"), c = t, s(t);
            }
            function s(a) {
                if (a === c) return e.consume(a), s;
                const u = e.exit("attentionSequence"), l = (0, i.classifyCharacter)(a), f = !l || 2 === l && o || n.includes(a), d = !o || 2 === o && l || n.includes(r);
                return u._open = Boolean(42 === c ? f : f && (o || !d)), u._close = Boolean(42 === c ? d : d && (l || !f)),
                t(a);
            }
        }
        function u(e, t) {
            e.column += t, e.offset += t, e._bufferIndex += t;
        }
        n.attention = c;
    }, {
        "micromark-util-chunked": 92,
        "micromark-util-classify-character": 93,
        "micromark-util-resolve-all": 99
    } ],
    64: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.autolink = void 0;
        var r = e("micromark-util-character");
        const i = {
            name: "autolink",
            tokenize: o
        };
        function o(e, t, n) {
            let i = 1;
            return o;
            function o(t) {
                return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"),
                e.enter("autolinkProtocol"), c;
            }
            function c(t) {
                return (0, r.asciiAlpha)(t) ? (e.consume(t), a) : (0, r.asciiAtext)(t) ? l(t) : n(t);
            }
            function a(e) {
                return 43 === e || 45 === e || 46 === e || (0, r.asciiAlphanumeric)(e) ? s(e) : l(e);
            }
            function s(t) {
                return 58 === t ? (e.consume(t), u) : (43 === t || 45 === t || 46 === t || (0, r.asciiAlphanumeric)(t)) && i++ < 32 ? (e.consume(t),
                s) : l(t);
            }
            function u(t) {
                return 62 === t ? (e.exit("autolinkProtocol"), h(t)) : null === t || 32 === t || 60 === t || (0,
                r.asciiControl)(t) ? n(t) : (e.consume(t), u);
            }
            function l(t) {
                return 64 === t ? (e.consume(t), i = 0, f) : (0, r.asciiAtext)(t) ? (e.consume(t),
                l) : n(t);
            }
            function f(e) {
                return (0, r.asciiAlphanumeric)(e) ? d(e) : n(e);
            }
            function d(t) {
                return 46 === t ? (e.consume(t), i = 0, f) : 62 === t ? (e.exit("autolinkProtocol").type = "autolinkEmail",
                h(t)) : p(t);
            }
            function p(t) {
                return (45 === t || (0, r.asciiAlphanumeric)(t)) && i++ < 63 ? (e.consume(t), 45 === t ? p : d) : n(t);
            }
            function h(n) {
                return e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.exit("autolink"),
                t;
            }
        }
        n.autolink = i;
    }, {
        "micromark-util-character": 90
    } ],
    65: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.blankLine = void 0;
        var r = e("micromark-factory-space"), i = e("micromark-util-character");
        const o = {
            tokenize: c,
            partial: !0
        };
        function c(e, t, n) {
            return (0, r.factorySpace)(e, o, "linePrefix");
            function o(e) {
                return null === e || (0, i.markdownLineEnding)(e) ? t(e) : n(e);
            }
        }
        n.blankLine = o;
    }, {
        "micromark-factory-space": 87,
        "micromark-util-character": 90
    } ],
    66: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.blockQuote = void 0;
        var r = e("micromark-factory-space"), i = e("micromark-util-character");
        const o = {
            name: "blockQuote",
            tokenize: c,
            continuation: {
                tokenize: a
            },
            exit: s
        };
        function c(e, t, n) {
            const r = this;
            return o;
            function o(t) {
                if (62 === t) {
                    const n = r.containerState;
                    return n.open || (e.enter("blockQuote", {
                        _container: !0
                    }), n.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t),
                    e.exit("blockQuoteMarker"), c;
                }
                return n(t);
            }
            function c(n) {
                return (0, i.markdownSpace)(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n),
                e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"),
                t(n));
            }
        }
        function a(e, t, n) {
            return (0, r.factorySpace)(e, e.attempt(o, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
        }
        function s(e) {
            e.exit("blockQuote");
        }
        n.blockQuote = o;
    }, {
        "micromark-factory-space": 87,
        "micromark-util-character": 90
    } ],
    67: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.characterEscape = void 0;
        var r = e("micromark-util-character");
        const i = {
            name: "characterEscape",
            tokenize: o
        };
        function o(e, t, n) {
            return i;
            function i(t) {
                return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"),
                o;
            }
            function o(i) {
                return (0, r.asciiPunctuation)(i) ? (e.enter("characterEscapeValue"), e.consume(i),
                e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(i);
            }
        }
        n.characterEscape = i;
    }, {
        "micromark-util-character": 90
    } ],
    68: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.characterReference = void 0;
        var r = e("decode-named-character-reference"), i = e("micromark-util-character");
        const o = {
            name: "characterReference",
            tokenize: c
        };
        function c(e, t, n) {
            const o = this;
            let c = 0, a, s;
            return u;
            function u(t) {
                return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t),
                e.exit("characterReferenceMarker"), l;
            }
            function l(t) {
                return 35 === t ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"),
                f) : (e.enter("characterReferenceValue"), a = 31, s = i.asciiAlphanumeric, d(t));
            }
            function f(t) {
                return 88 === t || 120 === t ? (e.enter("characterReferenceMarkerHexadecimal"),
                e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"),
                a = 6, s = i.asciiHexDigit, d) : (e.enter("characterReferenceValue"), a = 7, s = i.asciiDigit,
                d(t));
            }
            function d(u) {
                let l;
                return 59 === u && c ? (l = e.exit("characterReferenceValue"), s !== i.asciiAlphanumeric || (0,
                r.decodeNamedCharacterReference)(o.sliceSerialize(l)) ? (e.enter("characterReferenceMarker"),
                e.consume(u), e.exit("characterReferenceMarker"), e.exit("characterReference"),
                t) : n(u)) : s(u) && c++ < a ? (e.consume(u), d) : n(u);
            }
        }
        n.characterReference = o;
    }, {
        "decode-named-character-reference": 3,
        "micromark-util-character": 90
    } ],
    69: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.codeFenced = void 0;
        var r = e("micromark-factory-space"), i = e("micromark-util-character");
        const o = {
            name: "codeFenced",
            tokenize: c,
            concrete: !0
        };
        function c(e, t, n) {
            const o = this, c = {
                tokenize: w,
                partial: !0
            }, a = {
                tokenize: _,
                partial: !0
            }, s = this.events[this.events.length - 1], u = s && "linePrefix" === s[1].type ? s[2].sliceSerialize(s[1], !0).length : 0;
            let l = 0, f;
            return d;
            function d(t) {
                return e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"),
                f = t, p(t);
            }
            function p(t) {
                return t === f ? (e.consume(t), l++, p) : (e.exit("codeFencedFenceSequence"), l < 3 ? n(t) : (0,
                r.factorySpace)(e, h, "whitespace")(t));
            }
            function h(t) {
                return null === t || (0, i.markdownLineEnding)(t) ? y(t) : (e.enter("codeFencedFenceInfo"),
                e.enter("chunkString", {
                    contentType: "string"
                }), m(t));
            }
            function m(t) {
                return null === t || (0, i.markdownLineEndingOrSpace)(t) ? (e.exit("chunkString"),
                e.exit("codeFencedFenceInfo"), (0, r.factorySpace)(e, g, "whitespace")(t)) : 96 === t && t === f ? n(t) : (e.consume(t),
                m);
            }
            function g(t) {
                return null === t || (0, i.markdownLineEnding)(t) ? y(t) : (e.enter("codeFencedFenceMeta"),
                e.enter("chunkString", {
                    contentType: "string"
                }), b(t));
            }
            function b(t) {
                return null === t || (0, i.markdownLineEnding)(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"),
                y(t)) : 96 === t && t === f ? n(t) : (e.consume(t), b);
            }
            function y(n) {
                return e.exit("codeFencedFence"), o.interrupt ? t(n) : k(n);
            }
            function k(t) {
                return null === t ? E(t) : (0, i.markdownLineEnding)(t) ? e.attempt(a, e.attempt(c, E, u ? (0,
                r.factorySpace)(e, k, "linePrefix", u + 1) : k), E)(t) : (e.enter("codeFlowValue"),
                v(t));
            }
            function v(t) {
                return null === t || (0, i.markdownLineEnding)(t) ? (e.exit("codeFlowValue"), k(t)) : (e.consume(t),
                v);
            }
            function E(n) {
                return e.exit("codeFenced"), t(n);
            }
            function _(e, t, n) {
                const r = this;
                return i;
                function i(t) {
                    return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), o;
                }
                function o(e) {
                    return r.parser.lazy[r.now().line] ? n(e) : t(e);
                }
            }
            function w(e, t, n) {
                let o = 0;
                return (0, r.factorySpace)(e, c, "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
                function c(t) {
                    return e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), a(t);
                }
                function a(t) {
                    return t === f ? (e.consume(t), o++, a) : o < l ? n(t) : (e.exit("codeFencedFenceSequence"),
                    (0, r.factorySpace)(e, s, "whitespace")(t));
                }
                function s(r) {
                    return null === r || (0, i.markdownLineEnding)(r) ? (e.exit("codeFencedFence"),
                    t(r)) : n(r);
                }
            }
        }
        n.codeFenced = o;
    }, {
        "micromark-factory-space": 87,
        "micromark-util-character": 90
    } ],
    70: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.codeIndented = void 0;
        var r = e("micromark-factory-space"), i = e("micromark-util-character");
        const o = {
            name: "codeIndented",
            tokenize: a
        };
        n.codeIndented = o;
        const c = {
            tokenize: s,
            partial: !0
        };
        function a(e, t, n) {
            const o = this;
            return a;
            function a(t) {
                return e.enter("codeIndented"), (0, r.factorySpace)(e, s, "linePrefix", 4 + 1)(t);
            }
            function s(e) {
                const t = o.events[o.events.length - 1];
                return t && "linePrefix" === t[1].type && t[2].sliceSerialize(t[1], !0).length >= 4 ? u(e) : n(e);
            }
            function u(t) {
                return null === t ? f(t) : (0, i.markdownLineEnding)(t) ? e.attempt(c, u, f)(t) : (e.enter("codeFlowValue"),
                l(t));
            }
            function l(t) {
                return null === t || (0, i.markdownLineEnding)(t) ? (e.exit("codeFlowValue"), u(t)) : (e.consume(t),
                l);
            }
            function f(n) {
                return e.exit("codeIndented"), t(n);
            }
        }
        function s(e, t, n) {
            const o = this;
            return c;
            function c(t) {
                return o.parser.lazy[o.now().line] ? n(t) : (0, i.markdownLineEnding)(t) ? (e.enter("lineEnding"),
                e.consume(t), e.exit("lineEnding"), c) : (0, r.factorySpace)(e, a, "linePrefix", 4 + 1)(t);
            }
            function a(e) {
                const r = o.events[o.events.length - 1];
                return r && "linePrefix" === r[1].type && r[2].sliceSerialize(r[1], !0).length >= 4 ? t(e) : (0,
                i.markdownLineEnding)(e) ? c(e) : n(e);
            }
        }
    }, {
        "micromark-factory-space": 87,
        "micromark-util-character": 90
    } ],
    71: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.codeText = void 0;
        var r = e("micromark-util-character");
        const i = {
            name: "codeText",
            tokenize: a,
            resolve: o,
            previous: c
        };
        function o(e) {
            let t = e.length - 4, n = 3, r, i;
            if (!("lineEnding" !== e[n][1].type && "space" !== e[n][1].type || "lineEnding" !== e[t][1].type && "space" !== e[t][1].type)) for (r = n; ++r < t; ) if ("codeTextData" === e[r][1].type) {
                e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
                break;
            }
            for (r = n - 1, t++; ++r <= t; ) void 0 === i ? r !== t && "lineEnding" !== e[r][1].type && (i = r) : r !== t && "lineEnding" !== e[r][1].type || (e[i][1].type = "codeTextData",
            r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2,
            r = i + 2), i = void 0);
            return e;
        }
        function c(e) {
            return 96 !== e || "characterEscape" === this.events[this.events.length - 1][1].type;
        }
        function a(e, t, n) {
            const i = this;
            let o = 0, c, a;
            return s;
            function s(t) {
                return e.enter("codeText"), e.enter("codeTextSequence"), u(t);
            }
            function u(t) {
                return 96 === t ? (e.consume(t), o++, u) : (e.exit("codeTextSequence"), l(t));
            }
            function l(t) {
                return null === t ? n(t) : 96 === t ? (a = e.enter("codeTextSequence"), c = 0, d(t)) : 32 === t ? (e.enter("space"),
                e.consume(t), e.exit("space"), l) : (0, r.markdownLineEnding)(t) ? (e.enter("lineEnding"),
                e.consume(t), e.exit("lineEnding"), l) : (e.enter("codeTextData"), f(t));
            }
            function f(t) {
                return null === t || 32 === t || 96 === t || (0, r.markdownLineEnding)(t) ? (e.exit("codeTextData"),
                l(t)) : (e.consume(t), f);
            }
            function d(n) {
                return 96 === n ? (e.consume(n), c++, d) : c === o ? (e.exit("codeTextSequence"),
                e.exit("codeText"), t(n)) : (a.type = "codeTextData", f(n));
            }
        }
        n.codeText = i;
    }, {
        "micromark-util-character": 90
    } ],
    72: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.content = void 0;
        var r = e("micromark-factory-space"), i = e("micromark-util-character"), o = e("micromark-util-subtokenize");
        const c = {
            tokenize: u,
            resolve: s
        };
        n.content = c;
        const a = {
            tokenize: l,
            partial: !0
        };
        function s(e) {
            return (0, o.subtokenize)(e), e;
        }
        function u(e, t) {
            let n;
            return r;
            function r(t) {
                return e.enter("content"), n = e.enter("chunkContent", {
                    contentType: "content"
                }), o(t);
            }
            function o(t) {
                return null === t ? c(t) : (0, i.markdownLineEnding)(t) ? e.check(a, s, c)(t) : (e.consume(t),
                o);
            }
            function c(n) {
                return e.exit("chunkContent"), e.exit("content"), t(n);
            }
            function s(t) {
                return e.consume(t), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
                    contentType: "content",
                    previous: n
                }), n = n.next, o;
            }
        }
        function l(e, t, n) {
            const o = this;
            return c;
            function c(t) {
                return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"),
                (0, r.factorySpace)(e, a, "linePrefix");
            }
            function a(r) {
                if (null === r || (0, i.markdownLineEnding)(r)) return n(r);
                const c = o.events[o.events.length - 1];
                return !o.parser.constructs.disable.null.includes("codeIndented") && c && "linePrefix" === c[1].type && c[2].sliceSerialize(c[1], !0).length >= 4 ? t(r) : e.interrupt(o.parser.constructs.flow, n, t)(r);
            }
        }
    }, {
        "micromark-factory-space": 87,
        "micromark-util-character": 90,
        "micromark-util-subtokenize": 100
    } ],
    73: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.definition = void 0;
        var r = e("micromark-factory-destination"), i = e("micromark-factory-label"), o = e("micromark-factory-space"), c = e("micromark-factory-title"), a = e("micromark-factory-whitespace"), s = e("micromark-util-normalize-identifier"), u = e("micromark-util-character");
        const l = {
            name: "definition",
            tokenize: d
        };
        n.definition = l;
        const f = {
            tokenize: p,
            partial: !0
        };
        function d(e, t, n) {
            const c = this;
            let l;
            return d;
            function d(t) {
                return e.enter("definition"), i.factoryLabel.call(c, e, p, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t);
            }
            function p(t) {
                return l = (0, s.normalizeIdentifier)(c.sliceSerialize(c.events[c.events.length - 1][1]).slice(1, -1)),
                58 === t ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"),
                (0, a.factoryWhitespace)(e, (0, r.factoryDestination)(e, e.attempt(f, (0, o.factorySpace)(e, h, "whitespace"), (0,
                o.factorySpace)(e, h, "whitespace")), n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"))) : n(t);
            }
            function h(r) {
                return null === r || (0, u.markdownLineEnding)(r) ? (e.exit("definition"), c.parser.defined.includes(l) || c.parser.defined.push(l),
                t(r)) : n(r);
            }
        }
        function p(e, t, n) {
            return r;
            function r(t) {
                return (0, u.markdownLineEndingOrSpace)(t) ? (0, a.factoryWhitespace)(e, i)(t) : n(t);
            }
            function i(t) {
                return 34 === t || 39 === t || 40 === t ? (0, c.factoryTitle)(e, (0, o.factorySpace)(e, s, "whitespace"), n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t) : n(t);
            }
            function s(e) {
                return null === e || (0, u.markdownLineEnding)(e) ? t(e) : n(e);
            }
        }
    }, {
        "micromark-factory-destination": 85,
        "micromark-factory-label": 86,
        "micromark-factory-space": 87,
        "micromark-factory-title": 88,
        "micromark-factory-whitespace": 89,
        "micromark-util-character": 90,
        "micromark-util-normalize-identifier": 98
    } ],
    74: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.hardBreakEscape = void 0;
        var r = e("micromark-util-character");
        const i = {
            name: "hardBreakEscape",
            tokenize: o
        };
        function o(e, t, n) {
            return i;
            function i(t) {
                return e.enter("hardBreakEscape"), e.enter("escapeMarker"), e.consume(t), o;
            }
            function o(i) {
                return (0, r.markdownLineEnding)(i) ? (e.exit("escapeMarker"), e.exit("hardBreakEscape"),
                t(i)) : n(i);
            }
        }
        n.hardBreakEscape = i;
    }, {
        "micromark-util-character": 90
    } ],
    75: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.headingAtx = void 0;
        var r = e("micromark-factory-space"), i = e("micromark-util-character"), o = e("micromark-util-chunked");
        const c = {
            name: "headingAtx",
            tokenize: s,
            resolve: a
        };
        function a(e, t) {
            let n = e.length - 2, r = 3, i, c;
            return "whitespace" === e[r][1].type && (r += 2), n - 2 > r && "whitespace" === e[n][1].type && (n -= 2),
            "atxHeadingSequence" === e[n][1].type && (r === n - 1 || n - 4 > r && "whitespace" === e[n - 2][1].type) && (n -= r + 1 === n ? 2 : 4),
            n > r && (i = {
                type: "atxHeadingText",
                start: e[r][1].start,
                end: e[n][1].end
            }, c = {
                type: "chunkText",
                start: e[r][1].start,
                end: e[n][1].end,
                contentType: "text"
            }, (0, o.splice)(e, r, n - r + 1, [ [ "enter", i, t ], [ "enter", c, t ], [ "exit", c, t ], [ "exit", i, t ] ])),
            e;
        }
        function s(e, t, n) {
            const o = this;
            let c = 0;
            return a;
            function a(t) {
                return e.enter("atxHeading"), e.enter("atxHeadingSequence"), s(t);
            }
            function s(r) {
                return 35 === r && c++ < 6 ? (e.consume(r), s) : null === r || (0, i.markdownLineEndingOrSpace)(r) ? (e.exit("atxHeadingSequence"),
                o.interrupt ? t(r) : u(r)) : n(r);
            }
            function u(n) {
                return 35 === n ? (e.enter("atxHeadingSequence"), l(n)) : null === n || (0, i.markdownLineEnding)(n) ? (e.exit("atxHeading"),
                t(n)) : (0, i.markdownSpace)(n) ? (0, r.factorySpace)(e, u, "whitespace")(n) : (e.enter("atxHeadingText"),
                f(n));
            }
            function l(t) {
                return 35 === t ? (e.consume(t), l) : (e.exit("atxHeadingSequence"), u(t));
            }
            function f(t) {
                return null === t || 35 === t || (0, i.markdownLineEndingOrSpace)(t) ? (e.exit("atxHeadingText"),
                u(t)) : (e.consume(t), f);
            }
        }
        n.headingAtx = c;
    }, {
        "micromark-factory-space": 87,
        "micromark-util-character": 90,
        "micromark-util-chunked": 92
    } ],
    76: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.htmlFlow = void 0;
        var r = e("micromark-util-character"), i = e("micromark-util-html-tag-name"), o = e("./blank-line.js");
        const c = {
            name: "htmlFlow",
            tokenize: u,
            resolveTo: s,
            concrete: !0
        };
        n.htmlFlow = c;
        const a = {
            tokenize: l,
            partial: !0
        };
        function s(e) {
            let t = e.length;
            for (;t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type); ) ;
            return t > 1 && "linePrefix" === e[t - 2][1].type && (e[t][1].start = e[t - 2][1].start,
            e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
        }
        function u(e, t, n) {
            const o = this;
            let c, s, u, l, f;
            return d;
            function d(t) {
                return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), p;
            }
            function p(i) {
                return 33 === i ? (e.consume(i), h) : 47 === i ? (e.consume(i), b) : 63 === i ? (e.consume(i),
                c = 3, o.interrupt ? t : q) : (0, r.asciiAlpha)(i) ? (e.consume(i), u = String.fromCharCode(i),
                s = !0, y) : n(i);
            }
            function h(i) {
                return 45 === i ? (e.consume(i), c = 2, m) : 91 === i ? (e.consume(i), c = 5, u = "CDATA[",
                l = 0, g) : (0, r.asciiAlpha)(i) ? (e.consume(i), c = 4, o.interrupt ? t : q) : n(i);
            }
            function m(r) {
                return 45 === r ? (e.consume(r), o.interrupt ? t : q) : n(r);
            }
            function g(r) {
                return r === u.charCodeAt(l++) ? (e.consume(r), l === u.length ? o.interrupt ? t : P : g) : n(r);
            }
            function b(t) {
                return (0, r.asciiAlpha)(t) ? (e.consume(t), u = String.fromCharCode(t), y) : n(t);
            }
            function y(a) {
                return null === a || 47 === a || 62 === a || (0, r.markdownLineEndingOrSpace)(a) ? 47 !== a && s && i.htmlRawNames.includes(u.toLowerCase()) ? (c = 1,
                o.interrupt ? t(a) : P(a)) : i.htmlBlockNames.includes(u.toLowerCase()) ? (c = 6,
                47 === a ? (e.consume(a), k) : o.interrupt ? t(a) : P(a)) : (c = 7, o.interrupt && !o.parser.lazy[o.now().line] ? n(a) : s ? E(a) : v(a)) : 45 === a || (0,
                r.asciiAlphanumeric)(a) ? (e.consume(a), u += String.fromCharCode(a), y) : n(a);
            }
            function k(r) {
                return 62 === r ? (e.consume(r), o.interrupt ? t : P) : n(r);
            }
            function v(t) {
                return (0, r.markdownSpace)(t) ? (e.consume(t), v) : A(t);
            }
            function E(t) {
                return 47 === t ? (e.consume(t), A) : 58 === t || 95 === t || (0, r.asciiAlpha)(t) ? (e.consume(t),
                _) : (0, r.markdownSpace)(t) ? (e.consume(t), E) : A(t);
            }
            function _(t) {
                return 45 === t || 46 === t || 58 === t || 95 === t || (0, r.asciiAlphanumeric)(t) ? (e.consume(t),
                _) : w(t);
            }
            function w(t) {
                return 61 === t ? (e.consume(t), x) : (0, r.markdownSpace)(t) ? (e.consume(t), w) : E(t);
            }
            function x(t) {
                return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t),
                f = t, S) : (0, r.markdownSpace)(t) ? (e.consume(t), x) : (f = null, T(t));
            }
            function S(t) {
                return null === t || (0, r.markdownLineEnding)(t) ? n(t) : t === f ? (e.consume(t),
                j) : (e.consume(t), S);
            }
            function T(t) {
                return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 62 === t || 96 === t || (0,
                r.markdownLineEndingOrSpace)(t) ? w(t) : (e.consume(t), T);
            }
            function j(e) {
                return 47 === e || 62 === e || (0, r.markdownSpace)(e) ? E(e) : n(e);
            }
            function A(t) {
                return 62 === t ? (e.consume(t), O) : n(t);
            }
            function O(t) {
                return (0, r.markdownSpace)(t) ? (e.consume(t), O) : null === t || (0, r.markdownLineEnding)(t) ? P(t) : n(t);
            }
            function P(t) {
                return 45 === t && 2 === c ? (e.consume(t), R) : 60 === t && 1 === c ? (e.consume(t),
                L) : 62 === t && 4 === c ? (e.consume(t), D) : 63 === t && 3 === c ? (e.consume(t),
                q) : 93 === t && 5 === c ? (e.consume(t), N) : !(0, r.markdownLineEnding)(t) || 6 !== c && 7 !== c ? null === t || (0,
                r.markdownLineEnding)(t) ? C(t) : (e.consume(t), P) : e.check(a, D, C)(t);
            }
            function C(t) {
                return e.exit("htmlFlowData"), I(t);
            }
            function I(t) {
                return null === t ? B(t) : (0, r.markdownLineEnding)(t) ? e.attempt({
                    tokenize: M,
                    partial: !0
                }, I, B)(t) : (e.enter("htmlFlowData"), P(t));
            }
            function M(e, t, n) {
                return r;
                function r(t) {
                    return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i;
                }
                function i(e) {
                    return o.parser.lazy[o.now().line] ? n(e) : t(e);
                }
            }
            function R(t) {
                return 45 === t ? (e.consume(t), q) : P(t);
            }
            function L(t) {
                return 47 === t ? (e.consume(t), u = "", F) : P(t);
            }
            function F(t) {
                return 62 === t && i.htmlRawNames.includes(u.toLowerCase()) ? (e.consume(t), D) : (0,
                r.asciiAlpha)(t) && u.length < 8 ? (e.consume(t), u += String.fromCharCode(t), F) : P(t);
            }
            function N(t) {
                return 93 === t ? (e.consume(t), q) : P(t);
            }
            function q(t) {
                return 62 === t ? (e.consume(t), D) : 45 === t && 2 === c ? (e.consume(t), q) : P(t);
            }
            function D(t) {
                return null === t || (0, r.markdownLineEnding)(t) ? (e.exit("htmlFlowData"), B(t)) : (e.consume(t),
                D);
            }
            function B(n) {
                return e.exit("htmlFlow"), t(n);
            }
        }
        function l(e, t, n) {
            return r;
            function r(r) {
                return e.exit("htmlFlowData"), e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"),
                e.attempt(o.blankLine, t, n);
            }
        }
    }, {
        "./blank-line.js": 65,
        "micromark-util-character": 90,
        "micromark-util-html-tag-name": 97
    } ],
    77: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.htmlText = void 0;
        var r = e("micromark-factory-space"), i = e("micromark-util-character");
        const o = {
            name: "htmlText",
            tokenize: c
        };
        function c(e, t, n) {
            const o = this;
            let c, a, s, u;
            return l;
            function l(t) {
                return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), f;
            }
            function f(t) {
                return 33 === t ? (e.consume(t), d) : 47 === t ? (e.consume(t), S) : 63 === t ? (e.consume(t),
                w) : (0, i.asciiAlpha)(t) ? (e.consume(t), A) : n(t);
            }
            function d(t) {
                return 45 === t ? (e.consume(t), p) : 91 === t ? (e.consume(t), a = "CDATA[", s = 0,
                y) : (0, i.asciiAlpha)(t) ? (e.consume(t), _) : n(t);
            }
            function p(t) {
                return 45 === t ? (e.consume(t), h) : n(t);
            }
            function h(t) {
                return null === t || 62 === t ? n(t) : 45 === t ? (e.consume(t), m) : g(t);
            }
            function m(e) {
                return null === e || 62 === e ? n(e) : g(e);
            }
            function g(t) {
                return null === t ? n(t) : 45 === t ? (e.consume(t), b) : (0, i.markdownLineEnding)(t) ? (u = g,
                F(t)) : (e.consume(t), g);
            }
            function b(t) {
                return 45 === t ? (e.consume(t), q) : g(t);
            }
            function y(t) {
                return t === a.charCodeAt(s++) ? (e.consume(t), s === a.length ? k : y) : n(t);
            }
            function k(t) {
                return null === t ? n(t) : 93 === t ? (e.consume(t), v) : (0, i.markdownLineEnding)(t) ? (u = k,
                F(t)) : (e.consume(t), k);
            }
            function v(t) {
                return 93 === t ? (e.consume(t), E) : k(t);
            }
            function E(t) {
                return 62 === t ? q(t) : 93 === t ? (e.consume(t), E) : k(t);
            }
            function _(t) {
                return null === t || 62 === t ? q(t) : (0, i.markdownLineEnding)(t) ? (u = _, F(t)) : (e.consume(t),
                _);
            }
            function w(t) {
                return null === t ? n(t) : 63 === t ? (e.consume(t), x) : (0, i.markdownLineEnding)(t) ? (u = w,
                F(t)) : (e.consume(t), w);
            }
            function x(e) {
                return 62 === e ? q(e) : w(e);
            }
            function S(t) {
                return (0, i.asciiAlpha)(t) ? (e.consume(t), T) : n(t);
            }
            function T(t) {
                return 45 === t || (0, i.asciiAlphanumeric)(t) ? (e.consume(t), T) : j(t);
            }
            function j(t) {
                return (0, i.markdownLineEnding)(t) ? (u = j, F(t)) : (0, i.markdownSpace)(t) ? (e.consume(t),
                j) : q(t);
            }
            function A(t) {
                return 45 === t || (0, i.asciiAlphanumeric)(t) ? (e.consume(t), A) : 47 === t || 62 === t || (0,
                i.markdownLineEndingOrSpace)(t) ? O(t) : n(t);
            }
            function O(t) {
                return 47 === t ? (e.consume(t), q) : 58 === t || 95 === t || (0, i.asciiAlpha)(t) ? (e.consume(t),
                P) : (0, i.markdownLineEnding)(t) ? (u = O, F(t)) : (0, i.markdownSpace)(t) ? (e.consume(t),
                O) : q(t);
            }
            function P(t) {
                return 45 === t || 46 === t || 58 === t || 95 === t || (0, i.asciiAlphanumeric)(t) ? (e.consume(t),
                P) : C(t);
            }
            function C(t) {
                return 61 === t ? (e.consume(t), I) : (0, i.markdownLineEnding)(t) ? (u = C, F(t)) : (0,
                i.markdownSpace)(t) ? (e.consume(t), C) : O(t);
            }
            function I(t) {
                return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t),
                c = t, M) : (0, i.markdownLineEnding)(t) ? (u = I, F(t)) : (0, i.markdownSpace)(t) ? (e.consume(t),
                I) : (e.consume(t), c = void 0, L);
            }
            function M(t) {
                return t === c ? (e.consume(t), R) : null === t ? n(t) : (0, i.markdownLineEnding)(t) ? (u = M,
                F(t)) : (e.consume(t), M);
            }
            function R(e) {
                return 62 === e || 47 === e || (0, i.markdownLineEndingOrSpace)(e) ? O(e) : n(e);
            }
            function L(t) {
                return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 96 === t ? n(t) : 62 === t || (0,
                i.markdownLineEndingOrSpace)(t) ? O(t) : (e.consume(t), L);
            }
            function F(t) {
                return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"),
                (0, r.factorySpace)(e, N, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
            }
            function N(t) {
                return e.enter("htmlTextData"), u(t);
            }
            function q(r) {
                return 62 === r ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r);
            }
        }
        n.htmlText = o;
    }, {
        "micromark-factory-space": 87,
        "micromark-util-character": 90
    } ],
    78: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.labelEnd = void 0;
        var r = e("micromark-factory-destination"), i = e("micromark-factory-label"), o = e("micromark-factory-title"), c = e("micromark-factory-whitespace"), a = e("micromark-util-character"), s = e("micromark-util-chunked"), u = e("micromark-util-normalize-identifier"), l = e("micromark-util-resolve-all");
        const f = {
            name: "labelEnd",
            tokenize: b,
            resolveTo: g,
            resolveAll: m
        };
        n.labelEnd = f;
        const d = {
            tokenize: y
        }, p = {
            tokenize: k
        }, h = {
            tokenize: v
        };
        function m(e) {
            let t = -1, n;
            for (;++t < e.length; ) n = e[t][1], "labelImage" !== n.type && "labelLink" !== n.type && "labelEnd" !== n.type || (e.splice(t + 1, "labelImage" === n.type ? 4 : 2),
            n.type = "data", t++);
            return e;
        }
        function g(e, t) {
            let n = e.length, r = 0, i, o, c, a;
            for (;n--; ) if (i = e[n][1], o) {
                if ("link" === i.type || "labelLink" === i.type && i._inactive) break;
                "enter" === e[n][0] && "labelLink" === i.type && (i._inactive = !0);
            } else if (c) {
                if ("enter" === e[n][0] && ("labelImage" === i.type || "labelLink" === i.type) && !i._balanced && (o = n,
                "labelLink" !== i.type)) {
                    r = 2;
                    break;
                }
            } else "labelEnd" === i.type && (c = n);
            const u = {
                type: "labelLink" === e[o][1].type ? "link" : "image",
                start: Object.assign({}, e[o][1].start),
                end: Object.assign({}, e[e.length - 1][1].end)
            }, f = {
                type: "label",
                start: Object.assign({}, e[o][1].start),
                end: Object.assign({}, e[c][1].end)
            }, d = {
                type: "labelText",
                start: Object.assign({}, e[o + r + 2][1].end),
                end: Object.assign({}, e[c - 2][1].start)
            };
            return a = [ [ "enter", u, t ], [ "enter", f, t ] ], a = (0, s.push)(a, e.slice(o + 1, o + r + 3)),
            a = (0, s.push)(a, [ [ "enter", d, t ] ]), a = (0, s.push)(a, (0, l.resolveAll)(t.parser.constructs.insideSpan.null, e.slice(o + r + 4, c - 3), t)),
            a = (0, s.push)(a, [ [ "exit", d, t ], e[c - 2], e[c - 1], [ "exit", f, t ] ]),
            a = (0, s.push)(a, e.slice(c + 1)), a = (0, s.push)(a, [ [ "exit", u, t ] ]), (0,
            s.splice)(e, o, e.length, a), e;
        }
        function b(e, t, n) {
            const r = this;
            let i = r.events.length, o, c;
            for (;i--; ) if (("labelImage" === r.events[i][1].type || "labelLink" === r.events[i][1].type) && !r.events[i][1]._balanced) {
                o = r.events[i][1];
                break;
            }
            return a;
            function a(t) {
                return o ? o._inactive ? l(t) : (c = r.parser.defined.includes((0, u.normalizeIdentifier)(r.sliceSerialize({
                    start: o.end,
                    end: r.now()
                }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"),
                e.exit("labelEnd"), s) : n(t);
            }
            function s(n) {
                return 40 === n ? e.attempt(d, t, c ? t : l)(n) : 91 === n ? e.attempt(p, t, c ? e.attempt(h, t, l) : l)(n) : c ? t(n) : l(n);
            }
            function l(e) {
                return o._balanced = !0, n(e);
            }
        }
        function y(e, t, n) {
            return i;
            function i(t) {
                return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"),
                (0, c.factoryWhitespace)(e, s);
            }
            function s(t) {
                return 41 === t ? f(t) : (0, r.factoryDestination)(e, u, n, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t);
            }
            function u(t) {
                return (0, a.markdownLineEndingOrSpace)(t) ? (0, c.factoryWhitespace)(e, l)(t) : f(t);
            }
            function l(t) {
                return 34 === t || 39 === t || 40 === t ? (0, o.factoryTitle)(e, (0, c.factoryWhitespace)(e, f), n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : f(t);
            }
            function f(r) {
                return 41 === r ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"),
                e.exit("resource"), t) : n(r);
            }
        }
        function k(e, t, n) {
            const r = this;
            return o;
            function o(t) {
                return i.factoryLabel.call(r, e, c, n, "reference", "referenceMarker", "referenceString")(t);
            }
            function c(e) {
                return r.parser.defined.includes((0, u.normalizeIdentifier)(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e);
            }
        }
        function v(e, t, n) {
            return r;
            function r(t) {
                return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"),
                i;
            }
            function i(r) {
                return 93 === r ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"),
                e.exit("reference"), t) : n(r);
            }
        }
    }, {
        "micromark-factory-destination": 85,
        "micromark-factory-label": 86,
        "micromark-factory-title": 88,
        "micromark-factory-whitespace": 89,
        "micromark-util-character": 90,
        "micromark-util-chunked": 92,
        "micromark-util-normalize-identifier": 98,
        "micromark-util-resolve-all": 99
    } ],
    79: [ function(e, t, n) {
        "use strict";
        var r;
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.labelStartImage = void 0;
        const i = {
            name: "labelStartImage",
            tokenize: o,
            resolveAll: e("./label-end.js").labelEnd.resolveAll
        };
        function o(e, t, n) {
            const r = this;
            return i;
            function i(t) {
                return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"),
                o;
            }
            function o(t) {
                return 91 === t ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"),
                e.exit("labelImage"), c) : n(t);
            }
            function c(e) {
                return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
            }
        }
        n.labelStartImage = i;
    }, {
        "./label-end.js": 78
    } ],
    80: [ function(e, t, n) {
        "use strict";
        var r;
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.labelStartLink = void 0;
        const i = {
            name: "labelStartLink",
            tokenize: o,
            resolveAll: e("./label-end.js").labelEnd.resolveAll
        };
        function o(e, t, n) {
            const r = this;
            return i;
            function i(t) {
                return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"),
                e.exit("labelLink"), o;
            }
            function o(e) {
                return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
            }
        }
        n.labelStartLink = i;
    }, {
        "./label-end.js": 78
    } ],
    81: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.lineEnding = void 0;
        var r = e("micromark-factory-space"), i = e("micromark-util-character");
        const o = {
            name: "lineEnding",
            tokenize: c
        };
        function c(e, t) {
            return n;
            function n(n) {
                return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), (0, r.factorySpace)(e, t, "linePrefix");
            }
        }
        n.lineEnding = o;
    }, {
        "micromark-factory-space": 87,
        "micromark-util-character": 90
    } ],
    82: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.list = void 0;
        var r = e("micromark-factory-space"), i = e("micromark-util-character"), o = e("./blank-line.js"), c = e("./thematic-break.js");
        const a = {
            name: "list",
            tokenize: l,
            continuation: {
                tokenize: f
            },
            exit: p
        };
        n.list = a;
        const s = {
            tokenize: h,
            partial: !0
        }, u = {
            tokenize: d,
            partial: !0
        };
        function l(e, t, n) {
            const r = this, a = r.events[r.events.length - 1];
            let u = a && "linePrefix" === a[1].type ? a[2].sliceSerialize(a[1], !0).length : 0, l = 0;
            return f;
            function f(t) {
                const o = r.containerState.type || (42 === t || 43 === t || 45 === t ? "listUnordered" : "listOrdered");
                if ("listUnordered" === o ? !r.containerState.marker || t === r.containerState.marker : (0,
                i.asciiDigit)(t)) {
                    if (r.containerState.type || (r.containerState.type = o, e.enter(o, {
                        _container: !0
                    })), "listUnordered" === o) return e.enter("listItemPrefix"), 42 === t || 45 === t ? e.check(c.thematicBreak, n, p)(t) : p(t);
                    if (!r.interrupt || 49 === t) return e.enter("listItemPrefix"), e.enter("listItemValue"),
                    d(t);
                }
                return n(t);
            }
            function d(t) {
                return (0, i.asciiDigit)(t) && ++l < 10 ? (e.consume(t), d) : (!r.interrupt || l < 2) && (r.containerState.marker ? t === r.containerState.marker : 41 === t || 46 === t) ? (e.exit("listItemValue"),
                p(t)) : n(t);
            }
            function p(t) {
                return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t,
                e.check(o.blankLine, r.interrupt ? n : h, e.attempt(s, g, m));
            }
            function h(e) {
                return r.containerState.initialBlankLine = !0, u++, g(e);
            }
            function m(t) {
                return (0, i.markdownSpace)(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t),
                e.exit("listItemPrefixWhitespace"), g) : n(t);
            }
            function g(n) {
                return r.containerState.size = u + r.sliceSerialize(e.exit("listItemPrefix"), !0).length,
                t(n);
            }
        }
        function f(e, t, n) {
            const c = this;
            return c.containerState._closeFlow = void 0, e.check(o.blankLine, s, l);
            function s(n) {
                return c.containerState.furtherBlankLines = c.containerState.furtherBlankLines || c.containerState.initialBlankLine,
                (0, r.factorySpace)(e, t, "listItemIndent", c.containerState.size + 1)(n);
            }
            function l(n) {
                return c.containerState.furtherBlankLines || !(0, i.markdownSpace)(n) ? (c.containerState.furtherBlankLines = void 0,
                c.containerState.initialBlankLine = void 0, f(n)) : (c.containerState.furtherBlankLines = void 0,
                c.containerState.initialBlankLine = void 0, e.attempt(u, t, f)(n));
            }
            function f(i) {
                return c.containerState._closeFlow = !0, c.interrupt = void 0, (0, r.factorySpace)(e, e.attempt(a, t, n), "linePrefix", c.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i);
            }
        }
        function d(e, t, n) {
            const i = this;
            return (0, r.factorySpace)(e, o, "listItemIndent", i.containerState.size + 1);
            function o(e) {
                const r = i.events[i.events.length - 1];
                return r && "listItemIndent" === r[1].type && r[2].sliceSerialize(r[1], !0).length === i.containerState.size ? t(e) : n(e);
            }
        }
        function p(e) {
            e.exit(this.containerState.type);
        }
        function h(e, t, n) {
            const o = this;
            return (0, r.factorySpace)(e, c, "listItemPrefixWhitespace", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1);
            function c(e) {
                const r = o.events[o.events.length - 1];
                return !(0, i.markdownSpace)(e) && r && "listItemPrefixWhitespace" === r[1].type ? t(e) : n(e);
            }
        }
    }, {
        "./blank-line.js": 65,
        "./thematic-break.js": 84,
        "micromark-factory-space": 87,
        "micromark-util-character": 90
    } ],
    83: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.setextUnderline = void 0;
        var r = e("micromark-factory-space"), i = e("micromark-util-character");
        const o = {
            name: "setextUnderline",
            tokenize: a,
            resolveTo: c
        };
        function c(e, t) {
            let n = e.length, r, i, o;
            for (;n--; ) if ("enter" === e[n][0]) {
                if ("content" === e[n][1].type) {
                    r = n;
                    break;
                }
                "paragraph" === e[n][1].type && (i = n);
            } else "content" === e[n][1].type && e.splice(n, 1), o || "definition" !== e[n][1].type || (o = n);
            const c = {
                type: "setextHeading",
                start: Object.assign({}, e[i][1].start),
                end: Object.assign({}, e[e.length - 1][1].end)
            };
            return e[i][1].type = "setextHeadingText", o ? (e.splice(i, 0, [ "enter", c, t ]),
            e.splice(o + 1, 0, [ "exit", e[r][1], t ]), e[r][1].end = Object.assign({}, e[o][1].end)) : e[r][1] = c,
            e.push([ "exit", c, t ]), e;
        }
        function a(e, t, n) {
            const o = this;
            let c = o.events.length, a, s;
            for (;c--; ) if ("lineEnding" !== o.events[c][1].type && "linePrefix" !== o.events[c][1].type && "content" !== o.events[c][1].type) {
                s = "paragraph" === o.events[c][1].type;
                break;
            }
            return u;
            function u(t) {
                return o.parser.lazy[o.now().line] || !o.interrupt && !s ? n(t) : (e.enter("setextHeadingLine"),
                e.enter("setextHeadingLineSequence"), a = t, l(t));
            }
            function l(t) {
                return t === a ? (e.consume(t), l) : (e.exit("setextHeadingLineSequence"), (0, r.factorySpace)(e, f, "lineSuffix")(t));
            }
            function f(r) {
                return null === r || (0, i.markdownLineEnding)(r) ? (e.exit("setextHeadingLine"),
                t(r)) : n(r);
            }
        }
        n.setextUnderline = o;
    }, {
        "micromark-factory-space": 87,
        "micromark-util-character": 90
    } ],
    84: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.thematicBreak = void 0;
        var r = e("micromark-factory-space"), i = e("micromark-util-character");
        const o = {
            name: "thematicBreak",
            tokenize: c
        };
        function c(e, t, n) {
            let o = 0, c;
            return a;
            function a(t) {
                return e.enter("thematicBreak"), c = t, s(t);
            }
            function s(a) {
                return a === c ? (e.enter("thematicBreakSequence"), u(a)) : (0, i.markdownSpace)(a) ? (0,
                r.factorySpace)(e, s, "whitespace")(a) : o < 3 || null !== a && !(0, i.markdownLineEnding)(a) ? n(a) : (e.exit("thematicBreak"),
                t(a));
            }
            function u(t) {
                return t === c ? (e.consume(t), o++, u) : (e.exit("thematicBreakSequence"), s(t));
            }
        }
        n.thematicBreak = o;
    }, {
        "micromark-factory-space": 87,
        "micromark-util-character": 90
    } ],
    85: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.factoryDestination = i;
        var r = e("micromark-util-character");
        function i(e, t, n, i, o, c, a, s, u) {
            const l = u || Number.POSITIVE_INFINITY;
            let f = 0;
            return d;
            function d(t) {
                return 60 === t ? (e.enter(i), e.enter(o), e.enter(c), e.consume(t), e.exit(c),
                p) : null === t || 41 === t || (0, r.asciiControl)(t) ? n(t) : (e.enter(i), e.enter(a),
                e.enter(s), e.enter("chunkString", {
                    contentType: "string"
                }), g(t));
            }
            function p(n) {
                return 62 === n ? (e.enter(c), e.consume(n), e.exit(c), e.exit(o), e.exit(i), t) : (e.enter(s),
                e.enter("chunkString", {
                    contentType: "string"
                }), h(n));
            }
            function h(t) {
                return 62 === t ? (e.exit("chunkString"), e.exit(s), p(t)) : null === t || 60 === t || (0,
                r.markdownLineEnding)(t) ? n(t) : (e.consume(t), 92 === t ? m : h);
            }
            function m(t) {
                return 60 === t || 62 === t || 92 === t ? (e.consume(t), h) : h(t);
            }
            function g(o) {
                return 40 === o ? ++f > l ? n(o) : (e.consume(o), g) : 41 === o ? f-- ? (e.consume(o),
                g) : (e.exit("chunkString"), e.exit(s), e.exit(a), e.exit(i), t(o)) : null === o || (0,
                r.markdownLineEndingOrSpace)(o) ? f ? n(o) : (e.exit("chunkString"), e.exit(s),
                e.exit(a), e.exit(i), t(o)) : (0, r.asciiControl)(o) ? n(o) : (e.consume(o), 92 === o ? b : g);
            }
            function b(t) {
                return 40 === t || 41 === t || 92 === t ? (e.consume(t), g) : g(t);
            }
        }
    }, {
        "micromark-util-character": 90
    } ],
    86: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.factoryLabel = i;
        var r = e("micromark-util-character");
        function i(e, t, n, i, o, c) {
            const a = this;
            let s = 0, u;
            return l;
            function l(t) {
                return e.enter(i), e.enter(o), e.consume(t), e.exit(o), e.enter(c), f;
            }
            function f(l) {
                return null === l || 91 === l || 93 === l && !u || 94 === l && !s && "_hiddenFootnoteSupport" in a.parser.constructs || s > 999 ? n(l) : 93 === l ? (e.exit(c),
                e.enter(o), e.consume(l), e.exit(o), e.exit(i), t) : (0, r.markdownLineEnding)(l) ? (e.enter("lineEnding"),
                e.consume(l), e.exit("lineEnding"), f) : (e.enter("chunkString", {
                    contentType: "string"
                }), d(l));
            }
            function d(t) {
                return null === t || 91 === t || 93 === t || (0, r.markdownLineEnding)(t) || s++ > 999 ? (e.exit("chunkString"),
                f(t)) : (e.consume(t), u = u || !(0, r.markdownSpace)(t), 92 === t ? p : d);
            }
            function p(t) {
                return 91 === t || 92 === t || 93 === t ? (e.consume(t), s++, d) : d(t);
            }
        }
    }, {
        "micromark-util-character": 90
    } ],
    87: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.factorySpace = i;
        var r = e("micromark-util-character");
        function i(e, t, n, i) {
            const o = i ? i - 1 : Number.POSITIVE_INFINITY;
            let c = 0;
            return a;
            function a(i) {
                return (0, r.markdownSpace)(i) ? (e.enter(n), s(i)) : t(i);
            }
            function s(i) {
                return (0, r.markdownSpace)(i) && c++ < o ? (e.consume(i), s) : (e.exit(n), t(i));
            }
        }
    }, {
        "micromark-util-character": 90
    } ],
    88: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.factoryTitle = o;
        var r = e("micromark-factory-space"), i = e("micromark-util-character");
        function o(e, t, n, o, c, a) {
            let s;
            return u;
            function u(t) {
                return e.enter(o), e.enter(c), e.consume(t), e.exit(c), s = 40 === t ? 41 : t, l;
            }
            function l(n) {
                return n === s ? (e.enter(c), e.consume(n), e.exit(c), e.exit(o), t) : (e.enter(a),
                f(n));
            }
            function f(t) {
                return t === s ? (e.exit(a), l(s)) : null === t ? n(t) : (0, i.markdownLineEnding)(t) ? (e.enter("lineEnding"),
                e.consume(t), e.exit("lineEnding"), (0, r.factorySpace)(e, f, "linePrefix")) : (e.enter("chunkString", {
                    contentType: "string"
                }), d(t));
            }
            function d(t) {
                return t === s || null === t || (0, i.markdownLineEnding)(t) ? (e.exit("chunkString"),
                f(t)) : (e.consume(t), 92 === t ? p : d);
            }
            function p(t) {
                return t === s || 92 === t ? (e.consume(t), d) : d(t);
            }
        }
    }, {
        "micromark-factory-space": 87,
        "micromark-util-character": 90
    } ],
    89: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.factoryWhitespace = o;
        var r = e("micromark-factory-space"), i = e("micromark-util-character");
        function o(e, t) {
            let n;
            return o;
            function o(c) {
                return (0, i.markdownLineEnding)(c) ? (e.enter("lineEnding"), e.consume(c), e.exit("lineEnding"),
                n = !0, o) : (0, i.markdownSpace)(c) ? (0, r.factorySpace)(e, o, n ? "linePrefix" : "lineSuffix")(c) : t(c);
            }
        }
    }, {
        "micromark-factory-space": 87,
        "micromark-util-character": 90
    } ],
    90: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.asciiAtext = n.asciiAlphanumeric = n.asciiAlpha = void 0, n.asciiControl = l,
        n.asciiPunctuation = n.asciiHexDigit = n.asciiDigit = void 0, n.markdownLineEnding = d,
        n.markdownLineEndingOrSpace = f, n.markdownSpace = p, n.unicodeWhitespace = n.unicodePunctuation = void 0;
        var r = e("./lib/unicode-punctuation-regex.js");
        const i = g(/[A-Za-z]/);
        n.asciiAlpha = i;
        const o = g(/\d/);
        n.asciiDigit = o;
        const c = g(/[\dA-Fa-f]/);
        n.asciiHexDigit = c;
        const a = g(/[\dA-Za-z]/);
        n.asciiAlphanumeric = a;
        const s = g(/[!-/:-@[-`{-~]/);
        n.asciiPunctuation = s;
        const u = g(/[#-'*+\--9=?A-Z^-~]/);
        function l(e) {
            return null !== e && (e < 32 || 127 === e);
        }
        function f(e) {
            return null !== e && (e < 0 || 32 === e);
        }
        function d(e) {
            return null !== e && e < -2;
        }
        function p(e) {
            return -2 === e || -1 === e || 32 === e;
        }
        n.asciiAtext = u;
        const h = g(/\s/);
        n.unicodeWhitespace = h;
        const m = g(r.unicodePunctuationRegex);
        function g(e) {
            return t;
            function t(t) {
                return null !== t && e.test(String.fromCharCode(t));
            }
        }
        n.unicodePunctuation = m;
    }, {
        "./lib/unicode-punctuation-regex.js": 91
    } ],
    91: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.unicodePunctuationRegex = void 0;
        const r = /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
        n.unicodePunctuationRegex = r;
    }, {} ],
    92: [ function(e, t, n) {
        "use strict";
        function r(e, t, n, r) {
            const i = e.length;
            let o = 0, c;
            if (t = t < 0 ? -t > i ? 0 : i + t : t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) c = Array.from(r),
            c.unshift(t, n), [].splice.apply(e, c); else for (n && [].splice.apply(e, [ t, n ]); o < r.length; ) c = r.slice(o, o + 1e4),
            c.unshift(t, 0), [].splice.apply(e, c), o += 1e4, t += 1e4;
        }
        function i(e, t) {
            return e.length > 0 ? (r(e, e.length, 0, t), e) : t;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.push = i, n.splice = r;
    }, {} ],
    93: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.classifyCharacter = i;
        var r = e("micromark-util-character");
        function i(e) {
            return null === e || (0, r.markdownLineEndingOrSpace)(e) || (0, r.unicodeWhitespace)(e) ? 1 : (0,
            r.unicodePunctuation)(e) ? 2 : void 0;
        }
    }, {
        "micromark-util-character": 90
    } ],
    94: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.combineExtensions = o, n.combineHtmlExtensions = s;
        var r = e("micromark-util-chunked");
        const i = {}.hasOwnProperty;
        function o(e) {
            const t = {};
            let n = -1;
            for (;++n < e.length; ) c(t, e[n]);
            return t;
        }
        function c(e, t) {
            let n;
            for (n in t) {
                const r = undefined, o = (i.call(e, n) ? e[n] : void 0) || (e[n] = {}), c = t[n];
                let s;
                for (s in c) {
                    i.call(o, s) || (o[s] = []);
                    const e = c[s];
                    a(o[s], Array.isArray(e) ? e : e ? [ e ] : []);
                }
            }
        }
        function a(e, t) {
            let n = -1;
            const i = [];
            for (;++n < t.length; ) ("after" === t[n].add ? e : i).push(t[n]);
            (0, r.splice)(e, 0, 0, i);
        }
        function s(e) {
            const t = {};
            let n = -1;
            for (;++n < e.length; ) u(t, e[n]);
            return t;
        }
        function u(e, t) {
            let n;
            for (n in t) {
                const r = undefined, o = (i.call(e, n) ? e[n] : void 0) || (e[n] = {}), c = t[n];
                let a;
                if (c) for (a in c) o[a] = c[a];
            }
        }
    }, {
        "micromark-util-chunked": 92
    } ],
    95: [ function(e, t, n) {
        "use strict";
        function r(e, t) {
            const n = Number.parseInt(e, t);
            return n < 9 || 11 === n || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || 65535 == (65535 & n) || 65534 == (65535 & n) || n > 1114111 ? "�" : String.fromCharCode(n);
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.decodeNumericCharacterReference = r;
    }, {} ],
    96: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.decodeString = c;
        var r = e("decode-named-character-reference"), i = e("micromark-util-decode-numeric-character-reference");
        const o = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
        function c(e) {
            return e.replace(o, a);
        }
        function a(e, t, n) {
            if (t) return t;
            const o = undefined;
            if (35 === n.charCodeAt(0)) {
                const e = n.charCodeAt(1), t = 120 === e || 88 === e;
                return (0, i.decodeNumericCharacterReference)(n.slice(t ? 2 : 1), t ? 16 : 10);
            }
            return (0, r.decodeNamedCharacterReference)(n) || e;
        }
    }, {
        "decode-named-character-reference": 3,
        "micromark-util-decode-numeric-character-reference": 95
    } ],
    97: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.htmlRawNames = n.htmlBlockNames = void 0;
        const r = [ "address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul" ];
        n.htmlBlockNames = r;
        const i = [ "pre", "script", "style", "textarea" ];
        n.htmlRawNames = i;
    }, {} ],
    98: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.normalizeIdentifier = r;
    }, {} ],
    99: [ function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            const r = [];
            let i = -1;
            for (;++i < e.length; ) {
                const o = e[i].resolveAll;
                o && !r.includes(o) && (t = o(t, n), r.push(o));
            }
            return t;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.resolveAll = r;
    }, {} ],
    100: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.subtokenize = i;
        var r = e("micromark-util-chunked");
        function i(e) {
            const t = {};
            let n = -1, i, c, a, s, u, l, f;
            for (;++n < e.length; ) {
                for (;n in t; ) n = t[n];
                if (i = e[n], n && "chunkFlow" === i[1].type && "listItemPrefix" === e[n - 1][1].type && (l = i[1]._tokenizer.events,
                a = 0, a < l.length && "lineEndingBlank" === l[a][1].type && (a += 2), a < l.length && "content" === l[a][1].type)) for (;++a < l.length && "content" !== l[a][1].type; ) "chunkText" === l[a][1].type && (l[a][1]._isInFirstContentOfListItem = !0,
                a++);
                if ("enter" === i[0]) i[1].contentType && (Object.assign(t, o(e, n)), n = t[n],
                f = !0); else if (i[1]._container) {
                    for (a = n, c = void 0; a-- && (s = e[a], "lineEnding" === s[1].type || "lineEndingBlank" === s[1].type); ) "enter" === s[0] && (c && (e[c][1].type = "lineEndingBlank"),
                    s[1].type = "lineEnding", c = a);
                    c && (i[1].end = Object.assign({}, e[c][1].start), u = e.slice(c, n), u.unshift(i),
                    (0, r.splice)(e, c, n - c + 1, u));
                }
            }
            return !f;
        }
        function o(e, t) {
            const n = e[t][1], i = e[t][2];
            let o = t - 1;
            const c = [], a = n._tokenizer || i.parser[n.contentType](n.start), s = a.events, u = [], l = {};
            let f, d, p = -1, h = n, m = 0, g = 0;
            const b = [ g ];
            for (;h; ) {
                for (;e[++o][1] !== h; ) ;
                c.push(o), h._tokenizer || (f = i.sliceStream(h), h.next || f.push(null), d && a.defineSkip(h.start),
                h._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = !0), a.write(f),
                h._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = void 0)),
                d = h, h = h.next;
            }
            for (h = n; ++p < s.length; ) "exit" === s[p][0] && "enter" === s[p - 1][0] && s[p][1].type === s[p - 1][1].type && s[p][1].start.line !== s[p][1].end.line && (g = p + 1,
            b.push(g), h._tokenizer = void 0, h.previous = void 0, h = h.next);
            for (a.events = [], h ? (h._tokenizer = void 0, h.previous = void 0) : b.pop(),
            p = b.length; p--; ) {
                const t = s.slice(b[p], b[p + 1]), n = c.pop();
                u.unshift([ n, n + t.length - 1 ]), (0, r.splice)(e, n, 2, t);
            }
            for (p = -1; ++p < u.length; ) l[m + u[p][0]] = m + u[p][1], m += u[p][1] - u[p][0] - 1;
            return l;
        }
    }, {
        "micromark-util-chunked": 92
    } ],
    101: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.text = n.string = n.insideSpan = n.flowInitial = n.flow = n.document = n.disable = n.contentInitial = n.attentionMarkers = void 0;
        var r = e("micromark-core-commonmark"), i = e("./initialize/text.js");
        const o = {
            42: r.list,
            43: r.list,
            45: r.list,
            48: r.list,
            49: r.list,
            50: r.list,
            51: r.list,
            52: r.list,
            53: r.list,
            54: r.list,
            55: r.list,
            56: r.list,
            57: r.list,
            62: r.blockQuote
        };
        n.document = o;
        const c = {
            91: r.definition
        };
        n.contentInitial = c;
        const a = {
            [-2]: r.codeIndented,
            [-1]: r.codeIndented,
            32: r.codeIndented
        };
        n.flowInitial = a;
        const s = {
            35: r.headingAtx,
            42: r.thematicBreak,
            45: [ r.setextUnderline, r.thematicBreak ],
            60: r.htmlFlow,
            61: r.setextUnderline,
            95: r.thematicBreak,
            96: r.codeFenced,
            126: r.codeFenced
        };
        n.flow = s;
        const u = {
            38: r.characterReference,
            92: r.characterEscape
        };
        n.string = u;
        const l = {
            [-5]: r.lineEnding,
            [-4]: r.lineEnding,
            [-3]: r.lineEnding,
            33: r.labelStartImage,
            38: r.characterReference,
            42: r.attention,
            60: [ r.autolink, r.htmlText ],
            91: r.labelStartLink,
            92: [ r.hardBreakEscape, r.characterEscape ],
            93: r.labelEnd,
            95: r.attention,
            96: r.codeText
        };
        n.text = l;
        const f = {
            null: [ r.attention, i.resolver ]
        };
        n.insideSpan = f;
        const d = {
            null: [ 42, 95 ]
        };
        n.attentionMarkers = d;
        const p = {
            null: []
        };
        n.disable = p;
    }, {
        "./initialize/text.js": 106,
        "micromark-core-commonmark": 62
    } ],
    102: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.createTokenizer = c;
        var r = e("micromark-util-character"), i = e("micromark-util-chunked"), o = e("micromark-util-resolve-all");
        function c(e, t, n) {
            let c = Object.assign(n ? Object.assign({}, n) : {
                line: 1,
                column: 1,
                offset: 0
            }, {
                _index: 0,
                _bufferIndex: -1
            });
            const u = {}, l = [];
            let f = [], d = [], p = !0;
            const h = {
                consume: S,
                enter: T,
                exit: j,
                attempt: P(A),
                check: P(O),
                interrupt: P(O, {
                    interrupt: !0
                })
            }, m = {
                previous: null,
                code: null,
                containerState: {},
                events: [],
                parser: e,
                sliceStream: v,
                sliceSerialize: k,
                now: E,
                defineSkip: _,
                write: y
            };
            let g = t.tokenize.call(m, h), b;
            return t.resolveAll && l.push(t), m;
            function y(e) {
                return f = (0, i.push)(f, e), w(), null !== f[f.length - 1] ? [] : (C(t, 0), m.events = (0,
                o.resolveAll)(l, m.events, m), m.events);
            }
            function k(e, t) {
                return s(v(e), t);
            }
            function v(e) {
                return a(f, e);
            }
            function E() {
                return Object.assign({}, c);
            }
            function _(e) {
                u[e.line] = e.column, M();
            }
            function w() {
                let e;
                for (;c._index < f.length; ) {
                    const t = f[c._index];
                    if ("string" == typeof t) for (e = c._index, c._bufferIndex < 0 && (c._bufferIndex = 0); c._index === e && c._bufferIndex < t.length; ) x(t.charCodeAt(c._bufferIndex)); else x(t);
                }
            }
            function x(e) {
                p = void 0, b = e, g = g(e);
            }
            function S(e) {
                (0, r.markdownLineEnding)(e) ? (c.line++, c.column = 1, c.offset += -3 === e ? 2 : 1,
                M()) : -1 !== e && (c.column++, c.offset++), c._bufferIndex < 0 ? c._index++ : (c._bufferIndex++,
                c._bufferIndex === f[c._index].length && (c._bufferIndex = -1, c._index++)), m.previous = e,
                p = !0;
            }
            function T(e, t) {
                const n = t || {};
                return n.type = e, n.start = E(), m.events.push([ "enter", n, m ]), d.push(n), n;
            }
            function j(e) {
                const t = d.pop();
                return t.end = E(), m.events.push([ "exit", t, m ]), t;
            }
            function A(e, t) {
                C(e, t.from);
            }
            function O(e, t) {
                t.restore();
            }
            function P(e, t) {
                return n;
                function n(n, r, i) {
                    let o, c, a, s;
                    return Array.isArray(n) ? l(n) : "tokenize" in n ? l([ n ]) : u(n);
                    function u(e) {
                        return t;
                        function t(t) {
                            const n = null !== t && e[t], r = null !== t && e.null, i = undefined;
                            return l([ ...Array.isArray(n) ? n : n ? [ n ] : [], ...Array.isArray(r) ? r : r ? [ r ] : [] ])(t);
                        }
                    }
                    function l(e) {
                        return o = e, c = 0, 0 === e.length ? i : f(e[c]);
                    }
                    function f(e) {
                        return n;
                        function n(n) {
                            return s = I(), a = e, e.partial || (m.currentConstruct = e), e.name && m.parser.constructs.disable.null.includes(e.name) ? g(n) : e.tokenize.call(t ? Object.assign(Object.create(m), t) : m, h, d, g)(n);
                        }
                    }
                    function d(t) {
                        return p = !0, e(a, s), r;
                    }
                    function g(e) {
                        return p = !0, s.restore(), ++c < o.length ? f(o[c]) : i;
                    }
                }
            }
            function C(e, t) {
                e.resolveAll && !l.includes(e) && l.push(e), e.resolve && (0, i.splice)(m.events, t, m.events.length - t, e.resolve(m.events.slice(t), m)),
                e.resolveTo && (m.events = e.resolveTo(m.events, m));
            }
            function I() {
                const e = E(), t = m.previous, n = m.currentConstruct, r = m.events.length, i = Array.from(d);
                return {
                    restore: o,
                    from: r
                };
                function o() {
                    c = e, m.previous = t, m.currentConstruct = n, m.events.length = r, d = i, M();
                }
            }
            function M() {
                c.line in u && c.column < 2 && (c.column = u[c.line], c.offset += u[c.line] - 1);
            }
        }
        function a(e, t) {
            const n = t.start._index, r = t.start._bufferIndex, i = t.end._index, o = t.end._bufferIndex;
            let c;
            return n === i ? c = [ e[n].slice(r, o) ] : (c = e.slice(n, i), r > -1 && (c[0] = c[0].slice(r)),
            o > 0 && c.push(e[i].slice(0, o))), c;
        }
        function s(e, t) {
            let n = -1;
            const r = [];
            let i;
            for (;++n < e.length; ) {
                const o = e[n];
                let c;
                if ("string" == typeof o) c = o; else switch (o) {
                  case -5:
                    c = "\r";
                    break;

                  case -4:
                    c = "\n";
                    break;

                  case -3:
                    c = "\r" + "\n";
                    break;

                  case -2:
                    c = t ? " " : "\t";
                    break;

                  case -1:
                    if (!t && i) continue;
                    c = " ";
                    break;

                  default:
                    c = String.fromCharCode(o);
                }
                i = -2 === o, r.push(c);
            }
            return r.join("");
        }
    }, {
        "micromark-util-character": 90,
        "micromark-util-chunked": 92,
        "micromark-util-resolve-all": 99
    } ],
    103: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.content = void 0;
        var r = e("micromark-factory-space"), i = e("micromark-util-character");
        const o = {
            tokenize: c
        };
        function c(e) {
            const t = e.attempt(this.parser.constructs.contentInitial, o, c);
            let n;
            return t;
            function o(n) {
                if (null !== n) return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"),
                (0, r.factorySpace)(e, t, "linePrefix");
                e.consume(n);
            }
            function c(t) {
                return e.enter("paragraph"), a(t);
            }
            function a(t) {
                const r = e.enter("chunkText", {
                    contentType: "text",
                    previous: n
                });
                return n && (n.next = r), n = r, s(t);
            }
            function s(t) {
                return null === t ? (e.exit("chunkText"), e.exit("paragraph"), void e.consume(t)) : (0,
                i.markdownLineEnding)(t) ? (e.consume(t), e.exit("chunkText"), a) : (e.consume(t),
                s);
            }
        }
        n.content = o;
    }, {
        "micromark-factory-space": 87,
        "micromark-util-character": 90
    } ],
    104: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.document = void 0;
        var r = e("micromark-factory-space"), i = e("micromark-util-character"), o = e("micromark-util-chunked");
        const c = {
            tokenize: s
        };
        n.document = c;
        const a = {
            tokenize: u
        };
        function s(e) {
            const t = this, n = [];
            let r = 0, c, s, u;
            return l;
            function l(i) {
                if (r < n.length) {
                    const o = n[r];
                    return t.containerState = o[1], e.attempt(o[0].continuation, f, d)(i);
                }
                return d(i);
            }
            function f(e) {
                if (r++, t.containerState._closeFlow) {
                    t.containerState._closeFlow = void 0, c && E();
                    const n = t.events.length;
                    let i = n, a;
                    for (;i--; ) if ("exit" === t.events[i][0] && "chunkFlow" === t.events[i][1].type) {
                        a = t.events[i][1].end;
                        break;
                    }
                    v(r);
                    let s = n;
                    for (;s < t.events.length; ) t.events[s][1].end = Object.assign({}, a), s++;
                    return (0, o.splice)(t.events, i + 1, 0, t.events.slice(n)), t.events.length = s,
                    d(e);
                }
                return l(e);
            }
            function d(i) {
                if (r === n.length) {
                    if (!c) return m(i);
                    if (c.currentConstruct && c.currentConstruct.concrete) return b(i);
                    t.interrupt = Boolean(c.currentConstruct && !c._gfmTableDynamicInterruptHack);
                }
                return t.containerState = {}, e.check(a, p, h)(i);
            }
            function p(e) {
                return c && E(), v(r), m(e);
            }
            function h(e) {
                return t.parser.lazy[t.now().line] = r !== n.length, u = t.now().offset, b(e);
            }
            function m(n) {
                return t.containerState = {}, e.attempt(a, g, b)(n);
            }
            function g(e) {
                return r++, n.push([ t.currentConstruct, t.containerState ]), m(e);
            }
            function b(n) {
                return null === n ? (c && E(), v(0), void e.consume(n)) : (c = c || t.parser.flow(t.now()),
                e.enter("chunkFlow", {
                    contentType: "flow",
                    previous: s,
                    _tokenizer: c
                }), y(n));
            }
            function y(n) {
                return null === n ? (k(e.exit("chunkFlow"), !0), v(0), void e.consume(n)) : (0,
                i.markdownLineEnding)(n) ? (e.consume(n), k(e.exit("chunkFlow")), r = 0, t.interrupt = void 0,
                l) : (e.consume(n), y);
            }
            function k(e, n) {
                const i = t.sliceStream(e);
                if (n && i.push(null), e.previous = s, s && (s.next = e), s = e, c.defineSkip(e.start),
                c.write(i), t.parser.lazy[e.start.line]) {
                    let e = c.events.length;
                    for (;e--; ) if (c.events[e][1].start.offset < u && (!c.events[e][1].end || c.events[e][1].end.offset > u)) return;
                    const n = t.events.length;
                    let i = n, a, s;
                    for (;i--; ) if ("exit" === t.events[i][0] && "chunkFlow" === t.events[i][1].type) {
                        if (a) {
                            s = t.events[i][1].end;
                            break;
                        }
                        a = !0;
                    }
                    for (v(r), e = n; e < t.events.length; ) t.events[e][1].end = Object.assign({}, s),
                    e++;
                    (0, o.splice)(t.events, i + 1, 0, t.events.slice(n)), t.events.length = e;
                }
            }
            function v(r) {
                let i = n.length;
                for (;i-- > r; ) {
                    const r = n[i];
                    t.containerState = r[1], r[0].exit.call(t, e);
                }
                n.length = r;
            }
            function E() {
                c.write([ null ]), s = void 0, c = void 0, t.containerState._closeFlow = void 0;
            }
        }
        function u(e, t, n) {
            return (0, r.factorySpace)(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
        }
    }, {
        "micromark-factory-space": 87,
        "micromark-util-character": 90,
        "micromark-util-chunked": 92
    } ],
    105: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.flow = void 0;
        var r = e("micromark-core-commonmark"), i = e("micromark-factory-space"), o = e("micromark-util-character");
        const c = {
            tokenize: a
        };
        function a(e) {
            const t = this, n = e.attempt(r.blankLine, o, e.attempt(this.parser.constructs.flowInitial, c, (0,
            i.factorySpace)(e, e.attempt(this.parser.constructs.flow, c, e.attempt(r.content, c)), "linePrefix")));
            return n;
            function o(r) {
                if (null !== r) return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"),
                t.currentConstruct = void 0, n;
                e.consume(r);
            }
            function c(r) {
                if (null !== r) return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"),
                t.currentConstruct = void 0, n;
                e.consume(r);
            }
        }
        n.flow = c;
    }, {
        "micromark-core-commonmark": 62,
        "micromark-factory-space": 87,
        "micromark-util-character": 90
    } ],
    106: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.text = n.string = n.resolver = void 0;
        const r = {
            resolveAll: a()
        };
        n.resolver = r;
        const i = c("string");
        n.string = i;
        const o = c("text");
        function c(e) {
            return {
                tokenize: t,
                resolveAll: a("text" === e ? s : void 0)
            };
            function t(t) {
                const n = this, r = this.parser.constructs[e], i = t.attempt(r, o, c);
                return o;
                function o(e) {
                    return s(e) ? i(e) : c(e);
                }
                function c(e) {
                    if (null !== e) return t.enter("data"), t.consume(e), a;
                    t.consume(e);
                }
                function a(e) {
                    return s(e) ? (t.exit("data"), i(e)) : (t.consume(e), a);
                }
                function s(e) {
                    if (null === e) return !0;
                    const t = r[e];
                    let i = -1;
                    if (t) for (;++i < t.length; ) {
                        const e = t[i];
                        if (!e.previous || e.previous.call(n, n.previous)) return !0;
                    }
                    return !1;
                }
            }
        }
        function a(e) {
            return t;
            function t(t, n) {
                let r = -1, i;
                for (;++r <= t.length; ) void 0 === i ? t[r] && "data" === t[r][1].type && (i = r,
                r++) : t[r] && "data" === t[r][1].type || (r !== i + 2 && (t[i][1].end = t[r - 1][1].end,
                t.splice(i + 2, r - i - 2), r = i + 2), i = void 0);
                return e ? e(t, n) : t;
            }
        }
        function s(e, t) {
            let n = 0;
            for (;++n <= e.length; ) if ((n === e.length || "lineEnding" === e[n][1].type) && "data" === e[n - 1][1].type) {
                const r = e[n - 1][1], i = t.sliceStream(r);
                let o = i.length, c = -1, a = 0, s;
                for (;o--; ) {
                    const e = i[o];
                    if ("string" == typeof e) {
                        for (c = e.length; 32 === e.charCodeAt(c - 1); ) a++, c--;
                        if (c) break;
                        c = -1;
                    } else if (-2 === e) s = !0, a++; else if (-1 !== e) {
                        o++;
                        break;
                    }
                }
                if (a) {
                    const i = {
                        type: n === e.length || s || a < 2 ? "lineSuffix" : "hardBreakTrailing",
                        start: {
                            line: r.end.line,
                            column: r.end.column - a,
                            offset: r.end.offset - a,
                            _index: r.start._index + o,
                            _bufferIndex: o ? c : r.start._bufferIndex + c
                        },
                        end: Object.assign({}, r.end)
                    };
                    r.end = Object.assign({}, i.start), r.start.offset === r.end.offset ? Object.assign(r, i) : (e.splice(n, 0, [ "enter", i, t ], [ "exit", i, t ]),
                    n += 2);
                }
                n++;
            }
            return e;
        }
        n.text = o;
    }, {} ],
    107: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.parse = d;
        var r = e("micromark-util-combine-extensions"), i = e("./initialize/content.js"), o = e("./initialize/document.js"), c = e("./initialize/flow.js"), a = e("./initialize/text.js"), s = e("./create-tokenizer.js"), u = f(e("./constructs.js"));
        function l(e) {
            if ("function" != typeof WeakMap) return null;
            var t = new WeakMap, n = new WeakMap;
            return (l = function(e) {
                return e ? n : t;
            })(e);
        }
        function f(e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var n = l(t);
            if (n && n.has(e)) return n.get(e);
            var r = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e) if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                var c = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                c && (c.get || c.set) ? Object.defineProperty(r, o, c) : r[o] = e[o];
            }
            return r.default = e, n && n.set(e, r), r;
        }
        function d(e = {}) {
            const t = undefined, n = {
                defined: [],
                lazy: {},
                constructs: (0, r.combineExtensions)([ u ].concat(e.extensions || [])),
                content: l(i.content),
                document: l(o.document),
                flow: l(c.flow),
                string: l(a.string),
                text: l(a.text)
            };
            return n;
            function l(e) {
                return t;
                function t(t) {
                    return (0, s.createTokenizer)(n, e, t);
                }
            }
        }
    }, {
        "./constructs.js": 101,
        "./create-tokenizer.js": 102,
        "./initialize/content.js": 103,
        "./initialize/document.js": 104,
        "./initialize/flow.js": 105,
        "./initialize/text.js": 106,
        "micromark-util-combine-extensions": 94
    } ],
    108: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.postprocess = i;
        var r = e("micromark-util-subtokenize");
        function i(e) {
            for (;!(0, r.subtokenize)(e); ) ;
            return e;
        }
    }, {
        "micromark-util-subtokenize": 100
    } ],
    109: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.preprocess = i;
        const r = /[\0\t\n\r]/g;
        function i() {
            let e = 1, t = "", n = !0, i;
            return o;
            function o(o, c, a) {
                const s = [];
                let u, l, f, d, p;
                for (o = t + o.toString(c), f = 0, t = "", n && (65279 === o.charCodeAt(0) && f++,
                n = void 0); f < o.length; ) {
                    if (r.lastIndex = f, u = r.exec(o), d = u && void 0 !== u.index ? u.index : o.length,
                    p = o.charCodeAt(d), !u) {
                        t = o.slice(f);
                        break;
                    }
                    if (10 === p && f === d && i) s.push(-3), i = void 0; else switch (i && (s.push(-5),
                    i = void 0), f < d && (s.push(o.slice(f, d)), e += d - f), p) {
                      case 0:
                        s.push(65533), e++;
                        break;

                      case 9:
                        for (l = 4 * Math.ceil(e / 4), s.push(-2); e++ < l; ) s.push(-1);
                        break;

                      case 10:
                        s.push(-4), e = 1;
                        break;

                      default:
                        i = !0, e = 1;
                    }
                    f = d + 1;
                }
                return a && (i && s.push(-5), t && s.push(t), s.push(null)), s;
            }
        }
    }, {} ],
    110: [ function(e, t, n) {
        "use strict";
        t.exports = () => {
            const e = {};
            return e.promise = new Promise(((t, n) => {
                e.resolve = t, e.reject = n;
            })), e;
        };
    }, {} ],
    111: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.TimeoutError = n.AbortError = void 0, n.default = a;
        class r extends Error {
            constructor(e) {
                super(e), this.name = "TimeoutError";
            }
        }
        n.TimeoutError = r;
        class i extends Error {
            constructor(e) {
                super(), this.name = "AbortError", this.message = e;
            }
        }
        n.AbortError = i;
        const o = e => void 0 === globalThis.DOMException ? new i(e) : new DOMException(e), c = e => {
            const t = void 0 === e.reason ? o("This operation was aborted.") : e.reason;
            return t instanceof Error ? t : o(t);
        };
        function a(e, t) {
            const {milliseconds: n, fallback: i, message: o, customTimers: a = {
                setTimeout: setTimeout,
                clearTimeout: clearTimeout
            }} = t;
            let s;
            const u = new Promise(((u, l) => {
                if ("number" != typeof n || 1 !== Math.sign(n)) throw new TypeError(`Expected \`milliseconds\` to be a positive number, got \`${n}\``);
                if (n !== Number.POSITIVE_INFINITY) {
                    if (t.signal) {
                        const {signal: e} = t;
                        e.aborted && l(c(e)), e.addEventListener("abort", (() => {
                            l(c(e));
                        }));
                    }
                    s = a.setTimeout.call(void 0, (() => {
                        if (i) try {
                            u(i());
                        } catch (e) {
                            l(e);
                        } else if ("function" == typeof e.cancel && e.cancel(), !1 === o) u(); else if (o instanceof Error) l(o); else {
                            const e = undefined;
                            l(new r(o ?? `Promise timed out after ${n} milliseconds`));
                        }
                    }), n), (async () => {
                        try {
                            u(await e);
                        } catch (e) {
                            l(e);
                        } finally {
                            a.clearTimeout.call(void 0, s);
                        }
                    })();
                } else u(e);
            }));
            return u.clear = () => {
                a.clearTimeout.call(void 0, s), s = void 0;
            }, u;
        }
    }, {} ],
    112: [ function(e, t, n) {
        "use strict";
        var r = t.exports = {}, i, o;
        function c() {
            throw new Error("setTimeout has not been defined");
        }
        function a() {
            throw new Error("clearTimeout has not been defined");
        }
        function s(e) {
            if (i === setTimeout) return setTimeout(e, 0);
            if ((i === c || !i) && setTimeout) return i = setTimeout, setTimeout(e, 0);
            try {
                return i(e, 0);
            } catch (t) {
                try {
                    return i.call(null, e, 0);
                } catch (t) {
                    return i.call(this, e, 0);
                }
            }
        }
        function u(e) {
            if (o === clearTimeout) return clearTimeout(e);
            if ((o === a || !o) && clearTimeout) return o = clearTimeout, clearTimeout(e);
            try {
                return o(e);
            } catch (t) {
                try {
                    return o.call(null, e);
                } catch (t) {
                    return o.call(this, e);
                }
            }
        }
        !function() {
            try {
                i = "function" == typeof setTimeout ? setTimeout : c;
            } catch (e) {
                i = c;
            }
            try {
                o = "function" == typeof clearTimeout ? clearTimeout : a;
            } catch (e) {
                o = a;
            }
        }();
        var l = [], f = !1, d, p = -1;
        function h() {
            f && d && (f = !1, d.length ? l = d.concat(l) : p = -1, l.length && m());
        }
        function m() {
            if (!f) {
                var e = s(h);
                f = !0;
                for (var t = l.length; t; ) {
                    for (d = l, l = []; ++p < t; ) d && d[p].run();
                    p = -1, t = l.length;
                }
                d = null, f = !1, u(e);
            }
        }
        function g(e, t) {
            this.fun = e, this.array = t;
        }
        function b() {}
        r.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            l.push(new g(e, t)), 1 !== l.length || f || s(m);
        }, g.prototype.run = function() {
            this.fun.apply(null, this.array);
        }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "",
        r.versions = {}, r.on = b, r.addListener = b, r.once = b, r.off = b, r.removeListener = b,
        r.removeAllListeners = b, r.emit = b, r.prependListener = b, r.prependOnceListener = b,
        r.listeners = function(e) {
            return [];
        }, r.binding = function(e) {
            throw new Error("process.binding is not supported");
        }, r.cwd = function() {
            return "/";
        }, r.chdir = function(e) {
            throw new Error("process.chdir is not supported");
        }, r.umask = function() {
            return 0;
        };
    }, {} ],
    113: [ function(e, t, n) {
        "use strict";
        var r;
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = i(e("./lib/index.js")).default;
        n.default = o;
    }, {
        "./lib/index.js": 114
    } ],
    114: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = i;
        var r = e("mdast-util-from-markdown");
        function i(e) {
            const t = t => {
                const n = this.data("settings");
                return (0, r.fromMarkdown)(t, Object.assign({}, n, e, {
                    extensions: this.data("micromarkExtensions") || [],
                    mdastExtensions: this.data("fromMarkdownExtensions") || []
                }));
            };
            Object.assign(this, {
                Parser: t
            });
        }
    }, {
        "mdast-util-from-markdown": 10
    } ],
    115: [ function(e, t, n) {
        "use strict";
        var r;
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = i(e("./lib/index.js")).default;
        n.default = o;
    }, {
        "./lib/index.js": 116
    } ],
    116: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = i;
        var r = e("mdast-util-to-markdown");
        function i(e) {
            const t = t => {
                const n = this.data("settings");
                return (0, r.toMarkdown)(t, Object.assign({}, n, e, {
                    extensions: this.data("toMarkdownExtensions") || []
                }));
            };
            Object.assign(this, {
                Compiler: t
            });
        }
    }, {
        "mdast-util-to-markdown": 14
    } ],
    117: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.remark = void 0;
        var r = e("unified"), i = c(e("remark-parse")), o = c(e("remark-stringify"));
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        const a = (0, r.unified)().use(i.default).use(o.default).freeze();
        n.remark = a;
    }, {
        "remark-parse": 113,
        "remark-stringify": 115,
        unified: 120
    } ],
    118: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = o;
        const r = {
            heading: u,
            text: s,
            inlineCode: s,
            image: a,
            imageReference: a,
            break: f,
            blockquote: l,
            list: l,
            listItem: l,
            strong: l,
            emphasis: l,
            delete: l,
            link: l,
            linkReference: l,
            code: d,
            thematicBreak: d,
            html: d,
            table: d,
            tableCell: d,
            definition: d,
            yaml: d,
            toml: d,
            footnoteReference: d,
            footnoteDefinition: d
        }, i = {}.hasOwnProperty;
        function o(e = {}) {
            const t = Object.assign({}, r), n = e.remove || [], o = e.keep || [];
            let a = -1;
            for (;++a < n.length; ) {
                const e = n[a];
                Array.isArray(e) ? t[e[0]] = e[1] : t[e] = d;
            }
            let s = {};
            if (0 === o.length) s = t; else {
                let e;
                for (e in t) o.includes(e) || (s[e] = t[e]);
                for (a = -1; ++a < o.length; ) if (e = o[a], !i.call(t, e)) throw new Error("Invalid `keep` option: No modifier is defined for node type `" + e + "`");
            }
            return u;
            function u(e) {
                const t = e.type;
                let n = e;
                if (t in s) {
                    const e = s[t];
                    e && (n = e(n));
                }
                return n = Array.isArray(n) ? l(n) : n, "children" in n && (n.children = l(n.children)),
                n;
            }
            function l(e) {
                let t = -1;
                const n = [];
                for (;++t < e.length; ) {
                    const r = u(e[t]);
                    Array.isArray(r) ? n.push(...r.flatMap((e => u(e)))) : n.push(r);
                }
                return c(n);
            }
        }
        function c(e) {
            let t = -1;
            const n = [];
            let r;
            for (;++t < e.length; ) {
                const i = e[t];
                r && i.type === r.type && "value" in i ? r.value += i.value : (n.push(i), r = i);
            }
            return n;
        }
        function a(e) {
            const t = "title" in e ? e.title : "";
            return {
                type: "text",
                value: e.alt || t || ""
            };
        }
        function s(e) {
            return {
                type: "text",
                value: e.value
            };
        }
        function u(e) {
            return {
                type: "paragraph",
                children: e.children
            };
        }
        function l(e) {
            return e.children || [];
        }
        function f() {
            return {
                type: "text",
                value: "\n"
            };
        }
        function d() {
            return {
                type: "text",
                value: ""
            };
        }
    }, {} ],
    119: [ function(e, t, n) {
        "use strict";
        function r() {
            const e = [], t = {
                run: n,
                use: r
            };
            return t;
            function n(...t) {
                let n = -1;
                const r = t.pop();
                if ("function" != typeof r) throw new TypeError("Expected function as last argument, not " + r);
                function o(c, ...a) {
                    const s = e[++n];
                    let u = -1;
                    if (c) r(c); else {
                        for (;++u < t.length; ) null !== a[u] && void 0 !== a[u] || (a[u] = t[u]);
                        t = a, s ? i(s, o)(...a) : r(null, ...a);
                    }
                }
                o(null, ...t);
            }
            function r(n) {
                if ("function" != typeof n) throw new TypeError("Expected `middelware` to be a function, not " + n);
                return e.push(n), t;
            }
        }
        function i(e, t) {
            let n;
            return r;
            function r(...t) {
                const r = e.length > t.length;
                let c;
                r && t.push(i);
                try {
                    c = e.apply(this, t);
                } catch (e) {
                    const t = e;
                    if (r && n) throw t;
                    return i(t);
                }
                r || (c instanceof Promise ? c.then(o, i) : c instanceof Error ? i(c) : o(c));
            }
            function i(e, ...r) {
                n || (n = !0, t(e, ...r));
            }
            function o(e) {
                i(null, e);
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.trough = r, n.wrap = i;
    }, {} ],
    120: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), Object.defineProperty(n, "unified", {
            enumerable: !0,
            get: function() {
                return r.unified;
            }
        });
        var r = e("./lib/index.js");
    }, {
        "./lib/index.js": 121
    } ],
    121: [ function(e, t, n) {
        (function(t) {
            (function() {
                "use strict";
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.unified = void 0;
                var t = e("bail"), r = s(e("is-buffer")), i = s(e("extend")), o = s(e("is-plain-obj")), c = e("trough"), a = e("vfile");
                function s(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                const u = f().freeze();
                n.unified = u;
                const l = {}.hasOwnProperty;
                function f() {
                    const e = (0, c.trough)(), n = [];
                    let r = {}, a, s = -1;
                    return u.data = p, u.Parser = void 0, u.Compiler = void 0, u.freeze = v, u.attachers = n,
                    u.use = _, u.parse = w, u.stringify = x, u.run = S, u.runSync = T, u.process = j,
                    u.processSync = A, u;
                    function u() {
                        const e = f();
                        let t = -1;
                        for (;++t < n.length; ) e.use(...n[t]);
                        return e.data((0, i.default)(!0, {}, r)), e;
                    }
                    function p(e, t) {
                        return "string" == typeof e ? 2 === arguments.length ? (g("data", a), r[e] = t,
                        u) : l.call(r, e) && r[e] || null : e ? (g("data", a), r = e, u) : r;
                    }
                    function v() {
                        if (a) return u;
                        for (;++s < n.length; ) {
                            const [t, ...r] = n[s];
                            if (!1 === r[0]) continue;
                            !0 === r[0] && (r[0] = void 0);
                            const i = t.call(u, ...r);
                            "function" == typeof i && e.use(i);
                        }
                        return a = !0, s = Number.POSITIVE_INFINITY, u;
                    }
                    function _(e, ...t) {
                        let c;
                        if (g("use", a), null == e) ; else if ("function" == typeof e) d(e, ...t); else {
                            if ("object" != typeof e) throw new TypeError("Expected usable value, not `" + e + "`");
                            Array.isArray(e) ? f(e) : l(e);
                        }
                        return c && (r.settings = Object.assign(r.settings || {}, c)), u;
                        function s(e) {
                            if ("function" == typeof e) d(e); else {
                                if ("object" != typeof e) throw new TypeError("Expected usable value, not `" + e + "`");
                                if (Array.isArray(e)) {
                                    const [t, ...n] = e;
                                    d(t, ...n);
                                } else l(e);
                            }
                        }
                        function l(e) {
                            f(e.plugins), e.settings && (c = Object.assign(c || {}, e.settings));
                        }
                        function f(e) {
                            let t = -1;
                            if (null == e) ; else {
                                if (!Array.isArray(e)) throw new TypeError("Expected a list of plugins, not `" + e + "`");
                                for (;++t < e.length; ) {
                                    const n = undefined;
                                    s(e[t]);
                                }
                            }
                        }
                        function d(e, t) {
                            let r = -1, c;
                            for (;++r < n.length; ) if (n[r][0] === e) {
                                c = n[r];
                                break;
                            }
                            c ? ((0, o.default)(c[1]) && (0, o.default)(t) && (t = (0, i.default)(!0, c[1], t)),
                            c[1] = t) : n.push([ ...arguments ]);
                        }
                    }
                    function w(e) {
                        u.freeze();
                        const t = k(e), n = u.Parser;
                        return h("parse", n), d(n, "parse") ? new n(String(t), t).parse() : n(String(t), t);
                    }
                    function x(e, t) {
                        u.freeze();
                        const n = k(t), r = u.Compiler;
                        return m("stringify", r), b(e), d(r, "compile") ? new r(e, n).compile() : r(e, n);
                    }
                    function S(t, n, r) {
                        if (b(t), u.freeze(), r || "function" != typeof n || (r = n, n = void 0), !r) return new Promise(i);
                        function i(i, o) {
                            function c(e, n, c) {
                                n = n || t, e ? o(e) : i ? i(n) : r(null, n, c);
                            }
                            e.run(t, k(n), c);
                        }
                        i(null, r);
                    }
                    function T(e, n) {
                        let r, i;
                        return u.run(e, n, o), y("runSync", "run", i), r;
                        function o(e, n) {
                            (0, t.bail)(e), r = n, i = !0;
                        }
                    }
                    function j(e, t) {
                        if (u.freeze(), h("process", u.Parser), m("process", u.Compiler), !t) return new Promise(n);
                        function n(n, r) {
                            const i = k(e);
                            function o(e, i) {
                                e || !i ? r(e) : n ? n(i) : t(null, i);
                            }
                            u.run(u.parse(i), i, ((e, t, n) => {
                                if (!e && t && n) {
                                    const r = u.stringify(t, n);
                                    null == r || (E(r) ? n.value = r : n.result = r), o(e, n);
                                } else o(e);
                            }));
                        }
                        n(null, t);
                    }
                    function A(e) {
                        let n;
                        u.freeze(), h("processSync", u.Parser), m("processSync", u.Compiler);
                        const r = k(e);
                        return u.process(r, i), y("processSync", "process", n), r;
                        function i(e) {
                            n = !0, (0, t.bail)(e);
                        }
                    }
                }
                function d(e, t) {
                    return "function" == typeof e && e.prototype && (p(e.prototype) || t in e.prototype);
                }
                function p(e) {
                    let t;
                    for (t in e) if (l.call(e, t)) return !0;
                    return !1;
                }
                function h(e, t) {
                    if ("function" != typeof t) throw new TypeError("Cannot `" + e + "` without `Parser`");
                }
                function m(e, t) {
                    if ("function" != typeof t) throw new TypeError("Cannot `" + e + "` without `Compiler`");
                }
                function g(e, t) {
                    if (t) throw new Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
                }
                function b(e) {
                    if (!(0, o.default)(e) || "string" != typeof e.type) throw new TypeError("Expected node, got `" + e + "`");
                }
                function y(e, t, n) {
                    if (!n) throw new Error("`" + e + "` finished async. Use `" + t + "` instead");
                }
                function k(e) {
                    return v(e) ? e : new a.VFile(e);
                }
                function v(e) {
                    return Boolean(e && "object" == typeof e && "message" in e && "messages" in e);
                }
                function E(e) {
                    return "string" == typeof e || (0, r.default)(e);
                }
            }).call(this);
        }).call(this, e("_process"));
    }, {
        _process: 112,
        bail: 1,
        extend: 6,
        "is-buffer": 122,
        "is-plain-obj": 7,
        trough: 119,
        vfile: 145
    } ],
    122: [ function(e, t, n) {
        "use strict";
        t.exports = function e(t) {
            return null != t && null != t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t);
        };
    }, {} ],
    123: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.is = n.convert = void 0;
        const r = function e(t, n, r, o, c) {
            const a = i(n);
            if (null != r && ("number" != typeof r || r < 0 || r === Number.POSITIVE_INFINITY)) throw new Error("Expected positive finite index");
            if (!(null == o || e(o) && o.children)) throw new Error("Expected parent node");
            if (null == o != (null == r)) throw new Error("Expected both parent and index");
            return !(!t || !t.type || "string" != typeof t.type) && Boolean(a.call(c, t, r, o));
        };
        n.is = r;
        const i = function(e) {
            if (null == e) return u;
            if ("string" == typeof e) return a(e);
            if ("object" == typeof e) return Array.isArray(e) ? o(e) : c(e);
            if ("function" == typeof e) return s(e);
            throw new Error("Expected function, string, or object as test");
        };
        function o(e) {
            const t = [];
            let n = -1;
            for (;++n < e.length; ) t[n] = i(e[n]);
            return s(r);
            function r(...e) {
                let n = -1;
                for (;++n < t.length; ) if (t[n].call(this, ...e)) return !0;
                return !1;
            }
        }
        function c(e) {
            return s(t);
            function t(t) {
                let n;
                for (n in e) if (t[n] !== e[n]) return !1;
                return !0;
            }
        }
        function a(e) {
            return s(t);
            function t(t) {
                return t && t.type === e;
            }
        }
        function s(e) {
            return t;
            function t(...t) {
                return Boolean(e.call(this, ...t));
            }
        }
        function u() {
            return !0;
        }
        n.convert = i;
    }, {} ],
    124: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && "object" == typeof e ? "position" in e || "type" in e ? o(e.position) : "start" in e || "end" in e ? o(e) : "line" in e || "column" in e ? i(e) : "" : "";
        }
        function i(e) {
            return c(e && e.line) + ":" + c(e && e.column);
        }
        function o(e) {
            return i(e && e.start) + "-" + i(e && e.end);
        }
        function c(e) {
            return e && "number" == typeof e ? e : 1;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.stringifyPosition = r;
    }, {} ],
    125: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.color = r;
    }, {} ],
    126: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.visitParents = n.SKIP = n.EXIT = n.CONTINUE = void 0;
        var r = e("unist-util-is"), i = e("./color.js");
        const o = !0;
        n.CONTINUE = o;
        const c = "skip";
        n.SKIP = c;
        const a = !1;
        n.EXIT = a;
        const s = function(e, t, n, o) {
            "function" == typeof t && "function" != typeof n && (o = n, n = t, t = null);
            const s = (0, r.convert)(t), l = o ? -1 : 1;
            function f(e, r, d) {
                const p = "object" == typeof e && null !== e ? e : {};
                let h;
                return "string" == typeof p.type && (h = "string" == typeof p.tagName ? p.tagName : "string" == typeof p.name ? p.name : void 0,
                Object.defineProperty(m, "name", {
                    value: "node (" + (0, i.color)(p.type + (h ? "<" + h + ">" : "")) + ")"
                })), m;
                function m() {
                    let i = [], p, h, m;
                    if ((!t || s(e, r, d[d.length - 1] || null)) && (i = u(n(e, d)), i[0] === a)) return i;
                    if (e.children && i[0] !== c) for (h = (o ? e.children.length : -1) + l, m = d.concat(e); h > -1 && h < e.children.length; ) {
                        if (p = f(e.children[h], h, m)(), p[0] === a) return p;
                        h = "number" == typeof p[1] ? p[1] : h + l;
                    }
                    return i;
                }
            }
            f(e, null, [])();
        };
        function u(e) {
            return Array.isArray(e) ? e : "number" == typeof e ? [ o, e ] : [ e ];
        }
        n.visitParents = s;
    }, {
        "./color.js": 125,
        "unist-util-is": 123
    } ],
    127: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), Object.defineProperty(n, "CONTINUE", {
            enumerable: !0,
            get: function() {
                return r.CONTINUE;
            }
        }), Object.defineProperty(n, "EXIT", {
            enumerable: !0,
            get: function() {
                return r.EXIT;
            }
        }), Object.defineProperty(n, "SKIP", {
            enumerable: !0,
            get: function() {
                return r.SKIP;
            }
        }), n.visit = void 0;
        var r = e("unist-util-visit-parents");
        const i = function(e, t, n, i) {
            function o(e, t) {
                const r = t[t.length - 1];
                return n(e, r ? r.children.indexOf(e) : null, r);
            }
            "function" == typeof t && "function" != typeof n && (i = n, n = t, t = null), (0,
            r.visitParents)(e, t, o, i);
        };
        n.visit = i;
    }, {
        "unist-util-visit-parents": 126
    } ],
    128: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), Object.defineProperty(n, "NIL", {
            enumerable: !0,
            get: function() {
                return a.default;
            }
        }), Object.defineProperty(n, "parse", {
            enumerable: !0,
            get: function() {
                return f.default;
            }
        }), Object.defineProperty(n, "stringify", {
            enumerable: !0,
            get: function() {
                return l.default;
            }
        }), Object.defineProperty(n, "v1", {
            enumerable: !0,
            get: function() {
                return r.default;
            }
        }), Object.defineProperty(n, "v3", {
            enumerable: !0,
            get: function() {
                return i.default;
            }
        }), Object.defineProperty(n, "v4", {
            enumerable: !0,
            get: function() {
                return o.default;
            }
        }), Object.defineProperty(n, "v5", {
            enumerable: !0,
            get: function() {
                return c.default;
            }
        }), Object.defineProperty(n, "validate", {
            enumerable: !0,
            get: function() {
                return u.default;
            }
        }), Object.defineProperty(n, "version", {
            enumerable: !0,
            get: function() {
                return s.default;
            }
        });
        var r = d(e("./v1.js")), i = d(e("./v3.js")), o = d(e("./v4.js")), c = d(e("./v5.js")), a = d(e("./nil.js")), s = d(e("./version.js")), u = d(e("./validate.js")), l = d(e("./stringify.js")), f = d(e("./parse.js"));
        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
    }, {
        "./nil.js": 131,
        "./parse.js": 132,
        "./stringify.js": 136,
        "./v1.js": 137,
        "./v3.js": 138,
        "./v4.js": 140,
        "./v5.js": 141,
        "./validate.js": 142,
        "./version.js": 143
    } ],
    129: [ function(e, t, n) {
        "use strict";
        function r(e) {
            if ("string" == typeof e) {
                const t = unescape(encodeURIComponent(e));
                e = new Uint8Array(t.length);
                for (let n = 0; n < t.length; ++n) e[n] = t.charCodeAt(n);
            }
            return i(c(a(e), 8 * e.length));
        }
        function i(e) {
            const t = [], n = 32 * e.length, r = "0123456789abcdef";
            for (let i = 0; i < n; i += 8) {
                const n = e[i >> 5] >>> i % 32 & 255, o = parseInt(r.charAt(n >>> 4 & 15) + r.charAt(15 & n), 16);
                t.push(o);
            }
            return t;
        }
        function o(e) {
            return (e + 64 >>> 9 << 4) + 14 + 1;
        }
        function c(e, t) {
            e[t >> 5] |= 128 << t % 32, e[o(t) - 1] = t;
            let n = 1732584193, r = -271733879, i = -1732584194, c = 271733878;
            for (let t = 0; t < e.length; t += 16) {
                const o = n, a = r, u = i, l = c;
                n = f(n, r, i, c, e[t], 7, -680876936), c = f(c, n, r, i, e[t + 1], 12, -389564586),
                i = f(i, c, n, r, e[t + 2], 17, 606105819), r = f(r, i, c, n, e[t + 3], 22, -1044525330),
                n = f(n, r, i, c, e[t + 4], 7, -176418897), c = f(c, n, r, i, e[t + 5], 12, 1200080426),
                i = f(i, c, n, r, e[t + 6], 17, -1473231341), r = f(r, i, c, n, e[t + 7], 22, -45705983),
                n = f(n, r, i, c, e[t + 8], 7, 1770035416), c = f(c, n, r, i, e[t + 9], 12, -1958414417),
                i = f(i, c, n, r, e[t + 10], 17, -42063), r = f(r, i, c, n, e[t + 11], 22, -1990404162),
                n = f(n, r, i, c, e[t + 12], 7, 1804603682), c = f(c, n, r, i, e[t + 13], 12, -40341101),
                i = f(i, c, n, r, e[t + 14], 17, -1502002290), r = f(r, i, c, n, e[t + 15], 22, 1236535329),
                n = d(n, r, i, c, e[t + 1], 5, -165796510), c = d(c, n, r, i, e[t + 6], 9, -1069501632),
                i = d(i, c, n, r, e[t + 11], 14, 643717713), r = d(r, i, c, n, e[t], 20, -373897302),
                n = d(n, r, i, c, e[t + 5], 5, -701558691), c = d(c, n, r, i, e[t + 10], 9, 38016083),
                i = d(i, c, n, r, e[t + 15], 14, -660478335), r = d(r, i, c, n, e[t + 4], 20, -405537848),
                n = d(n, r, i, c, e[t + 9], 5, 568446438), c = d(c, n, r, i, e[t + 14], 9, -1019803690),
                i = d(i, c, n, r, e[t + 3], 14, -187363961), r = d(r, i, c, n, e[t + 8], 20, 1163531501),
                n = d(n, r, i, c, e[t + 13], 5, -1444681467), c = d(c, n, r, i, e[t + 2], 9, -51403784),
                i = d(i, c, n, r, e[t + 7], 14, 1735328473), r = d(r, i, c, n, e[t + 12], 20, -1926607734),
                n = p(n, r, i, c, e[t + 5], 4, -378558), c = p(c, n, r, i, e[t + 8], 11, -2022574463),
                i = p(i, c, n, r, e[t + 11], 16, 1839030562), r = p(r, i, c, n, e[t + 14], 23, -35309556),
                n = p(n, r, i, c, e[t + 1], 4, -1530992060), c = p(c, n, r, i, e[t + 4], 11, 1272893353),
                i = p(i, c, n, r, e[t + 7], 16, -155497632), r = p(r, i, c, n, e[t + 10], 23, -1094730640),
                n = p(n, r, i, c, e[t + 13], 4, 681279174), c = p(c, n, r, i, e[t], 11, -358537222),
                i = p(i, c, n, r, e[t + 3], 16, -722521979), r = p(r, i, c, n, e[t + 6], 23, 76029189),
                n = p(n, r, i, c, e[t + 9], 4, -640364487), c = p(c, n, r, i, e[t + 12], 11, -421815835),
                i = p(i, c, n, r, e[t + 15], 16, 530742520), r = p(r, i, c, n, e[t + 2], 23, -995338651),
                n = h(n, r, i, c, e[t], 6, -198630844), c = h(c, n, r, i, e[t + 7], 10, 1126891415),
                i = h(i, c, n, r, e[t + 14], 15, -1416354905), r = h(r, i, c, n, e[t + 5], 21, -57434055),
                n = h(n, r, i, c, e[t + 12], 6, 1700485571), c = h(c, n, r, i, e[t + 3], 10, -1894986606),
                i = h(i, c, n, r, e[t + 10], 15, -1051523), r = h(r, i, c, n, e[t + 1], 21, -2054922799),
                n = h(n, r, i, c, e[t + 8], 6, 1873313359), c = h(c, n, r, i, e[t + 15], 10, -30611744),
                i = h(i, c, n, r, e[t + 6], 15, -1560198380), r = h(r, i, c, n, e[t + 13], 21, 1309151649),
                n = h(n, r, i, c, e[t + 4], 6, -145523070), c = h(c, n, r, i, e[t + 11], 10, -1120210379),
                i = h(i, c, n, r, e[t + 2], 15, 718787259), r = h(r, i, c, n, e[t + 9], 21, -343485551),
                n = s(n, o), r = s(r, a), i = s(i, u), c = s(c, l);
            }
            return [ n, r, i, c ];
        }
        function a(e) {
            if (0 === e.length) return [];
            const t = 8 * e.length, n = new Uint32Array(o(t));
            for (let r = 0; r < t; r += 8) n[r >> 5] |= (255 & e[r / 8]) << r % 32;
            return n;
        }
        function s(e, t) {
            const n = (65535 & e) + (65535 & t), r = undefined;
            return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
        }
        function u(e, t) {
            return e << t | e >>> 32 - t;
        }
        function l(e, t, n, r, i, o) {
            return s(u(s(s(t, e), s(r, o)), i), n);
        }
        function f(e, t, n, r, i, o, c) {
            return l(t & n | ~t & r, e, t, i, o, c);
        }
        function d(e, t, n, r, i, o, c) {
            return l(t & r | n & ~r, e, t, i, o, c);
        }
        function p(e, t, n, r, i, o, c) {
            return l(t ^ n ^ r, e, t, i, o, c);
        }
        function h(e, t, n, r, i, o, c) {
            return l(n ^ (t | ~r), e, t, i, o, c);
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var m = r;
        n.default = m;
    }, {} ],
    130: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        const r = undefined;
        var i = {
            randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
        };
        n.default = i;
    }, {} ],
    131: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r = "00000000-0000-0000-0000-000000000000";
        n.default = r;
    }, {} ],
    132: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r = i(e("./validate.js"));
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e) {
            if (!(0, r.default)(e)) throw TypeError("Invalid UUID");
            let t;
            const n = new Uint8Array(16);
            return n[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24, n[1] = t >>> 16 & 255, n[2] = t >>> 8 & 255,
            n[3] = 255 & t, n[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8, n[5] = 255 & t,
            n[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8, n[7] = 255 & t, n[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8,
            n[9] = 255 & t, n[10] = (t = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255,
            n[11] = t / 4294967296 & 255, n[12] = t >>> 24 & 255, n[13] = t >>> 16 & 255, n[14] = t >>> 8 & 255,
            n[15] = 255 & t, n;
        }
        var c = o;
        n.default = c;
    }, {
        "./validate.js": 142
    } ],
    133: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
        n.default = r;
    }, {} ],
    134: [ function(e, t, n) {
        "use strict";
        let r;
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = o;
        const i = new Uint8Array(16);
        function o() {
            if (!r && (r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto),
            !r)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return r(i);
        }
    }, {} ],
    135: [ function(e, t, n) {
        "use strict";
        function r(e, t, n, r) {
            switch (e) {
              case 0:
                return t & n ^ ~t & r;

              case 1:
                return t ^ n ^ r;

              case 2:
                return t & n ^ t & r ^ n & r;

              case 3:
                return t ^ n ^ r;
            }
        }
        function i(e, t) {
            return e << t | e >>> 32 - t;
        }
        function o(e) {
            const t = [ 1518500249, 1859775393, 2400959708, 3395469782 ], n = [ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ];
            if ("string" == typeof e) {
                const t = unescape(encodeURIComponent(e));
                e = [];
                for (let n = 0; n < t.length; ++n) e.push(t.charCodeAt(n));
            } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
            e.push(128);
            const o = e.length / 4 + 2, c = Math.ceil(o / 16), a = new Array(c);
            for (let t = 0; t < c; ++t) {
                const n = new Uint32Array(16);
                for (let r = 0; r < 16; ++r) n[r] = e[64 * t + 4 * r] << 24 | e[64 * t + 4 * r + 1] << 16 | e[64 * t + 4 * r + 2] << 8 | e[64 * t + 4 * r + 3];
                a[t] = n;
            }
            a[c - 1][14] = 8 * (e.length - 1) / Math.pow(2, 32), a[c - 1][14] = Math.floor(a[c - 1][14]),
            a[c - 1][15] = 8 * (e.length - 1) & 4294967295;
            for (let e = 0; e < c; ++e) {
                const o = new Uint32Array(80);
                for (let t = 0; t < 16; ++t) o[t] = a[e][t];
                for (let e = 16; e < 80; ++e) o[e] = i(o[e - 3] ^ o[e - 8] ^ o[e - 14] ^ o[e - 16], 1);
                let c = n[0], s = n[1], u = n[2], l = n[3], f = n[4];
                for (let e = 0; e < 80; ++e) {
                    const n = Math.floor(e / 20), a = i(c, 5) + r(n, s, u, l) + f + t[n] + o[e] >>> 0;
                    f = l, l = u, u = i(s, 30) >>> 0, s = c, c = a;
                }
                n[0] = n[0] + c >>> 0, n[1] = n[1] + s >>> 0, n[2] = n[2] + u >>> 0, n[3] = n[3] + l >>> 0,
                n[4] = n[4] + f >>> 0;
            }
            return [ n[0] >> 24 & 255, n[0] >> 16 & 255, n[0] >> 8 & 255, 255 & n[0], n[1] >> 24 & 255, n[1] >> 16 & 255, n[1] >> 8 & 255, 255 & n[1], n[2] >> 24 & 255, n[2] >> 16 & 255, n[2] >> 8 & 255, 255 & n[2], n[3] >> 24 & 255, n[3] >> 16 & 255, n[3] >> 8 & 255, 255 & n[3], n[4] >> 24 & 255, n[4] >> 16 & 255, n[4] >> 8 & 255, 255 & n[4] ];
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var c = o;
        n.default = c;
    }, {} ],
    136: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0, n.unsafeStringify = c;
        var r = i(e("./validate.js"));
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        const o = [];
        for (let e = 0; e < 256; ++e) o.push((e + 256).toString(16).slice(1));
        function c(e, t = 0) {
            return (o[e[t + 0]] + o[e[t + 1]] + o[e[t + 2]] + o[e[t + 3]] + "-" + o[e[t + 4]] + o[e[t + 5]] + "-" + o[e[t + 6]] + o[e[t + 7]] + "-" + o[e[t + 8]] + o[e[t + 9]] + "-" + o[e[t + 10]] + o[e[t + 11]] + o[e[t + 12]] + o[e[t + 13]] + o[e[t + 14]] + o[e[t + 15]]).toLowerCase();
        }
        function a(e, t = 0) {
            const n = c(e, t);
            if (!(0, r.default)(n)) throw TypeError("Stringified UUID is invalid");
            return n;
        }
        var s = a;
        n.default = s;
    }, {
        "./validate.js": 142
    } ],
    137: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r = o(e("./rng.js")), i = e("./stringify.js");
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        let c, a, s = 0, u = 0;
        function l(e, t, n) {
            let o = t && n || 0;
            const l = t || new Array(16);
            let f = (e = e || {}).node || c, d = void 0 !== e.clockseq ? e.clockseq : a;
            if (null == f || null == d) {
                const t = e.random || (e.rng || r.default)();
                null == f && (f = c = [ 1 | t[0], t[1], t[2], t[3], t[4], t[5] ]), null == d && (d = a = 16383 & (t[6] << 8 | t[7]));
            }
            let p = void 0 !== e.msecs ? e.msecs : Date.now(), h = void 0 !== e.nsecs ? e.nsecs : u + 1;
            const m = p - s + (h - u) / 1e4;
            if (m < 0 && void 0 === e.clockseq && (d = d + 1 & 16383), (m < 0 || p > s) && void 0 === e.nsecs && (h = 0),
            h >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            s = p, u = h, a = d, p += 122192928e5;
            const g = (1e4 * (268435455 & p) + h) % 4294967296;
            l[o++] = g >>> 24 & 255, l[o++] = g >>> 16 & 255, l[o++] = g >>> 8 & 255, l[o++] = 255 & g;
            const b = p / 4294967296 * 1e4 & 268435455;
            l[o++] = b >>> 8 & 255, l[o++] = 255 & b, l[o++] = b >>> 24 & 15 | 16, l[o++] = b >>> 16 & 255,
            l[o++] = d >>> 8 | 128, l[o++] = 255 & d;
            for (let e = 0; e < 6; ++e) l[o + e] = f[e];
            return t || (0, i.unsafeStringify)(l);
        }
        var f = l;
        n.default = f;
    }, {
        "./rng.js": 134,
        "./stringify.js": 136
    } ],
    138: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r = o(e("./v35.js")), i = o(e("./md5.js"));
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        const c = undefined;
        var a = (0, r.default)("v3", 48, i.default);
        n.default = a;
    }, {
        "./md5.js": 129,
        "./v35.js": 139
    } ],
    139: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.URL = n.DNS = void 0, n.default = u;
        var r = e("./stringify.js"), i = o(e("./parse.js"));
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function c(e) {
            e = unescape(encodeURIComponent(e));
            const t = [];
            for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n));
            return t;
        }
        const a = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
        n.DNS = a;
        const s = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
        function u(e, t, n) {
            function o(e, o, a, s) {
                var u;
                if ("string" == typeof e && (e = c(e)), "string" == typeof o && (o = (0, i.default)(o)),
                16 !== (null === (u = o) || void 0 === u ? void 0 : u.length)) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
                let l = new Uint8Array(16 + e.length);
                if (l.set(o), l.set(e, o.length), l = n(l), l[6] = 15 & l[6] | t, l[8] = 63 & l[8] | 128,
                a) {
                    s = s || 0;
                    for (let e = 0; e < 16; ++e) a[s + e] = l[e];
                    return a;
                }
                return (0, r.unsafeStringify)(l);
            }
            try {
                o.name = e;
            } catch (e) {}
            return o.DNS = a, o.URL = s, o;
        }
        n.URL = s;
    }, {
        "./parse.js": 132,
        "./stringify.js": 136
    } ],
    140: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r = c(e("./native.js")), i = c(e("./rng.js")), o = e("./stringify.js");
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function a(e, t, n) {
            if (r.default.randomUUID && !t && !e) return r.default.randomUUID();
            const c = (e = e || {}).random || (e.rng || i.default)();
            if (c[6] = 15 & c[6] | 64, c[8] = 63 & c[8] | 128, t) {
                n = n || 0;
                for (let e = 0; e < 16; ++e) t[n + e] = c[e];
                return t;
            }
            return (0, o.unsafeStringify)(c);
        }
        var s = a;
        n.default = s;
    }, {
        "./native.js": 130,
        "./rng.js": 134,
        "./stringify.js": 136
    } ],
    141: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r = o(e("./v35.js")), i = o(e("./sha1.js"));
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        const c = undefined;
        var a = (0, r.default)("v5", 80, i.default);
        n.default = a;
    }, {
        "./sha1.js": 135,
        "./v35.js": 139
    } ],
    142: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r = i(e("./regex.js"));
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e) {
            return "string" == typeof e && r.default.test(e);
        }
        var c = o;
        n.default = c;
    }, {
        "./regex.js": 133
    } ],
    143: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r = i(e("./validate.js"));
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e) {
            if (!(0, r.default)(e)) throw TypeError("Invalid UUID");
            return parseInt(e.slice(14, 15), 16);
        }
        var c = o;
        n.default = c;
    }, {
        "./validate.js": 142
    } ],
    144: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.VFileMessage = void 0;
        var r = e("unist-util-stringify-position");
        class i extends Error {
            constructor(e, t, n) {
                const i = [ null, null ];
                let o = {
                    start: {
                        line: null,
                        column: null
                    },
                    end: {
                        line: null,
                        column: null
                    }
                };
                if (super(), "string" == typeof t && (n = t, t = void 0), "string" == typeof n) {
                    const e = n.indexOf(":");
                    -1 === e ? i[1] = n : (i[0] = n.slice(0, e), i[1] = n.slice(e + 1));
                }
                t && ("type" in t || "position" in t ? t.position && (o = t.position) : "start" in t || "end" in t ? o = t : ("line" in t || "column" in t) && (o.start = t)),
                this.name = (0, r.stringifyPosition)(t) || "1:1", this.message = "object" == typeof e ? e.message : e,
                this.stack = "", "object" == typeof e && e.stack && (this.stack = e.stack), this.reason = this.message,
                this.fatal, this.line = o.start.line, this.column = o.start.column, this.position = o,
                this.source = i[0], this.ruleId = i[1], this.file, this.actual, this.expected, this.url,
                this.note;
            }
        }
        n.VFileMessage = i, i.prototype.file = "", i.prototype.name = "", i.prototype.reason = "",
        i.prototype.message = "", i.prototype.stack = "", i.prototype.fatal = null, i.prototype.column = null,
        i.prototype.line = null, i.prototype.source = null, i.prototype.ruleId = null, i.prototype.position = null;
    }, {
        "unist-util-stringify-position": 124
    } ],
    145: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), Object.defineProperty(n, "VFile", {
            enumerable: !0,
            get: function() {
                return r.VFile;
            }
        });
        var r = e("./lib/index.js");
    }, {
        "./lib/index.js": 146
    } ],
    146: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.VFile = void 0;
        var r = s(e("is-buffer")), i = e("vfile-message"), o = e("./minpath.js"), c = e("./minproc.js"), a = e("./minurl.js");
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        const u = [ "history", "path", "basename", "stem", "extname", "dirname" ];
        class l {
            constructor(e) {
                let t;
                t = e ? "string" == typeof e || (0, r.default)(e) ? {
                    value: e
                } : (0, a.isUrl)(e) ? {
                    path: e
                } : e : {}, this.data = {}, this.messages = [], this.history = [], this.cwd = c.proc.cwd(),
                this.value, this.stored, this.result, this.map;
                let n = -1, i;
                for (;++n < u.length; ) {
                    const e = u[n];
                    e in t && void 0 !== t[e] && (this[e] = "history" === e ? [ ...t[e] ] : t[e]);
                }
                for (i in t) u.includes(i) || (this[i] = t[i]);
            }
            get path() {
                return this.history[this.history.length - 1];
            }
            set path(e) {
                (0, a.isUrl)(e) && (e = (0, a.urlToPath)(e)), d(e, "path"), this.path !== e && this.history.push(e);
            }
            get dirname() {
                return "string" == typeof this.path ? o.path.dirname(this.path) : void 0;
            }
            set dirname(e) {
                p(this.basename, "dirname"), this.path = o.path.join(e || "", this.basename);
            }
            get basename() {
                return "string" == typeof this.path ? o.path.basename(this.path) : void 0;
            }
            set basename(e) {
                d(e, "basename"), f(e, "basename"), this.path = o.path.join(this.dirname || "", e);
            }
            get extname() {
                return "string" == typeof this.path ? o.path.extname(this.path) : void 0;
            }
            set extname(e) {
                if (f(e, "extname"), p(this.dirname, "extname"), e) {
                    if (46 !== e.charCodeAt(0)) throw new Error("`extname` must start with `.`");
                    if (e.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots");
                }
                this.path = o.path.join(this.dirname, this.stem + (e || ""));
            }
            get stem() {
                return "string" == typeof this.path ? o.path.basename(this.path, this.extname) : void 0;
            }
            set stem(e) {
                d(e, "stem"), f(e, "stem"), this.path = o.path.join(this.dirname || "", e + (this.extname || ""));
            }
            toString(e) {
                return (this.value || "").toString(e);
            }
            message(e, t, n) {
                const r = new i.VFileMessage(e, t, n);
                return this.path && (r.name = this.path + ":" + r.name, r.file = this.path), r.fatal = !1,
                this.messages.push(r), r;
            }
            info(e, t, n) {
                const r = this.message(e, t, n);
                return r.fatal = null, r;
            }
            fail(e, t, n) {
                const r = this.message(e, t, n);
                throw r.fatal = !0, r;
            }
        }
        function f(e, t) {
            if (e && e.includes(o.path.sep)) throw new Error("`" + t + "` cannot be a path: did not expect `" + o.path.sep + "`");
        }
        function d(e, t) {
            if (!e) throw new Error("`" + t + "` cannot be empty");
        }
        function p(e, t) {
            if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too");
        }
        n.VFile = l;
    }, {
        "./minpath.js": 147,
        "./minproc.js": 148,
        "./minurl.js": 149,
        "is-buffer": 151,
        "vfile-message": 144
    } ],
    147: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.path = void 0;
        const r = {
            basename: i,
            dirname: o,
            extname: c,
            join: a,
            sep: "/"
        };
        function i(e, t) {
            if (void 0 !== t && "string" != typeof t) throw new TypeError('"ext" argument must be a string');
            l(e);
            let n = 0, r = -1, i = e.length, o;
            if (void 0 === t || 0 === t.length || t.length > e.length) {
                for (;i--; ) if (47 === e.charCodeAt(i)) {
                    if (o) {
                        n = i + 1;
                        break;
                    }
                } else r < 0 && (o = !0, r = i + 1);
                return r < 0 ? "" : e.slice(n, r);
            }
            if (t === e) return "";
            let c = -1, a = t.length - 1;
            for (;i--; ) if (47 === e.charCodeAt(i)) {
                if (o) {
                    n = i + 1;
                    break;
                }
            } else c < 0 && (o = !0, c = i + 1), a > -1 && (e.charCodeAt(i) === t.charCodeAt(a--) ? a < 0 && (r = i) : (a = -1,
            r = c));
            return n === r ? r = c : r < 0 && (r = e.length), e.slice(n, r);
        }
        function o(e) {
            if (l(e), 0 === e.length) return ".";
            let t = -1, n = e.length, r;
            for (;--n; ) if (47 === e.charCodeAt(n)) {
                if (r) {
                    t = n;
                    break;
                }
            } else r || (r = !0);
            return t < 0 ? 47 === e.charCodeAt(0) ? "/" : "." : 1 === t && 47 === e.charCodeAt(0) ? "//" : e.slice(0, t);
        }
        function c(e) {
            l(e);
            let t = e.length, n = -1, r = 0, i = -1, o = 0, c;
            for (;t--; ) {
                const a = e.charCodeAt(t);
                if (47 !== a) n < 0 && (c = !0, n = t + 1), 46 === a ? i < 0 ? i = t : 1 !== o && (o = 1) : i > -1 && (o = -1); else if (c) {
                    r = t + 1;
                    break;
                }
            }
            return i < 0 || n < 0 || 0 === o || 1 === o && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
        }
        function a(...e) {
            let t = -1, n;
            for (;++t < e.length; ) l(e[t]), e[t] && (n = void 0 === n ? e[t] : n + "/" + e[t]);
            return void 0 === n ? "." : s(n);
        }
        function s(e) {
            l(e);
            const t = 47 === e.charCodeAt(0);
            let n = u(e, !t);
            return 0 !== n.length || t || (n = "."), n.length > 0 && 47 === e.charCodeAt(e.length - 1) && (n += "/"),
            t ? "/" + n : n;
        }
        function u(e, t) {
            let n = "", r = 0, i = -1, o = 0, c = -1, a, s;
            for (;++c <= e.length; ) {
                if (c < e.length) a = e.charCodeAt(c); else {
                    if (47 === a) break;
                    a = 47;
                }
                if (47 === a) {
                    if (i === c - 1 || 1 === o) ; else if (i !== c - 1 && 2 === o) {
                        if (n.length < 2 || 2 !== r || 46 !== n.charCodeAt(n.length - 1) || 46 !== n.charCodeAt(n.length - 2)) if (n.length > 2) {
                            if (s = n.lastIndexOf("/"), s !== n.length - 1) {
                                s < 0 ? (n = "", r = 0) : (n = n.slice(0, s), r = n.length - 1 - n.lastIndexOf("/")),
                                i = c, o = 0;
                                continue;
                            }
                        } else if (n.length > 0) {
                            n = "", r = 0, i = c, o = 0;
                            continue;
                        }
                        t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
                    } else n.length > 0 ? n += "/" + e.slice(i + 1, c) : n = e.slice(i + 1, c), r = c - i - 1;
                    i = c, o = 0;
                } else 46 === a && o > -1 ? o++ : o = -1;
            }
            return n;
        }
        function l(e) {
            if ("string" != typeof e) throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
        }
        n.path = r;
    }, {} ],
    148: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.proc = void 0;
        const r = {
            cwd: i
        };
        function i() {
            return "/";
        }
        n.proc = r;
    }, {} ],
    149: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), Object.defineProperty(n, "isUrl", {
            enumerable: !0,
            get: function() {
                return r.isUrl;
            }
        }), n.urlToPath = i;
        var r = e("./minurl.shared.js");
        function i(e) {
            if ("string" == typeof e) e = new URL(e); else if (!(0, r.isUrl)(e)) {
                const t = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
                throw t.code = "ERR_INVALID_ARG_TYPE", t;
            }
            if ("file:" !== e.protocol) {
                const e = new TypeError("The URL must be of scheme file");
                throw e.code = "ERR_INVALID_URL_SCHEME", e;
            }
            return o(e);
        }
        function o(e) {
            if ("" !== e.hostname) {
                const e = new TypeError('File URL host must be "localhost" or empty on darwin');
                throw e.code = "ERR_INVALID_FILE_URL_HOST", e;
            }
            const t = e.pathname;
            let n = -1;
            for (;++n < t.length; ) if (37 === t.charCodeAt(n) && 50 === t.charCodeAt(n + 1)) {
                const e = t.charCodeAt(n + 2);
                if (70 === e || 102 === e) {
                    const e = new TypeError("File URL path must not include encoded / characters");
                    throw e.code = "ERR_INVALID_FILE_URL_PATH", e;
                }
            }
            return decodeURIComponent(t);
        }
    }, {
        "./minurl.shared.js": 150
    } ],
    150: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return null !== e && "object" == typeof e && e.href && e.origin;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.isUrl = r;
    }, {} ],
    151: [ function(e, t, n) {
        arguments[4][122][0].apply(n, arguments);
    }, {
        dup: 122
    } ],
    152: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.zwitch = i;
        const r = {}.hasOwnProperty;
        function i(e, t) {
            const n = t || {};
            function i(t, ...n) {
                let o = i.invalid;
                const c = i.handlers;
                if (t && r.call(t, e)) {
                    const n = String(t[e]);
                    o = r.call(c, n) ? c[n] : i.unknown;
                }
                if (o) return o.call(this, t, ...n);
            }
            return i.handlers = n.handlers || {}, i.invalid = n.invalid, i.unknown = n.unknown,
            i;
        }
    }, {} ],
    153: [ function(e, t, n) {
        "use strict";
        var r = f(e("expiry-map")), i = e("./browser/index"), o = e("./consts"), c = e("./utils/chatgpt"), a = e("./utils/messaging"), s = e("./utils/settings"), u = e("./utils/tabs"), l = f(e("../../../common/analytics/analytics4"));
        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        e("../../../common/extinsight");
        const d = new r.default(30 * 1e3);
        async function p() {
            return new Promise((e => {
                chrome.tabs.query({}, (t => e(t)));
            }));
        }
        function h(e) {
            const t = undefined;
            return new URL(e).hostname;
        }
        async function m(e) {
            try {
                await chrome.scripting.executeScript({
                    target: {
                        tabId: e
                    },
                    files: [ "js/content-script.js" ]
                });
            } catch (e) {}
        }
        function g(e) {
            for (let t = 0; t < o.SITES_REGEX.length; t += 1) {
                const n = undefined, r = undefined;
                if (new RegExp(o.SITES_REGEX[t]).test(e)) return !0;
            }
            return !1;
        }
        async function b(e) {
            const t = e.url || "", n = e.id;
            if (t && n) {
                const e = undefined, r = undefined;
                g(h(t)) && m(n);
            }
        }
        async function y() {
            let e = !1;
            try {
                e = !!await (0, c.getAccessToken)();
            } catch (t) {
                e = !1;
            }
            return e;
        }
        (0, l.default)("G-HVZS0VZV5B", "5KhNKowKS1eNDP0mBdW54w"), chrome.runtime.onConnect.addListener((e => {
            e.onDisconnect.addListener((() => {})), e.onMessage.addListener((async t => {
                const n = undefined;
                if (!!await (0, s.getSetting)(o.ChatGptSettingsKey.DEBUG)) {
                    const t = undefined;
                    switch (await (0, s.getSetting)(o.ChatGptSettingsKey.RESPONSE_BEHAVIOR_TYPE)) {
                      case o.ResponseBehaviorType.STUB_ANSWER:
                        for (let t = 0; t < o.STUB_RESPONSE.length; t += 1) (0, a.sendMessage)(e, o.ChatGptMessageType.ANSWER_TEXT_FROM_BG, {
                            answer: o.STUB_RESPONSE.slice(0, t)
                        }), await new Promise((e => setTimeout(e, 10)));
                        return await (0, a.sendMessage)(e, o.ChatGptMessageType.ANSWER_DONE_FROM_BG), void e.disconnect();

                      case o.ResponseBehaviorType.STUB_ERROR:
                        return void (0, a.sendMessage)(e, o.ChatGptMessageType.ANSWER_ERROR_FROM_BG, {
                            error: "STUB_ERROR"
                        });

                      case o.ResponseBehaviorType.STUB_UNAUTHORIZED:
                        return void (0, a.sendMessage)(e, o.ChatGptMessageType.ANSWER_ERROR_FROM_BG, {
                            error: "UNAUTHORIZED"
                        });

                      case o.ResponseBehaviorType.DEFAULT:
                      default:
                        break;
                    }
                }
                let r;
                try {
                    const e = await (0, c.getAccessToken)();
                    r = new i.ChatGPTAPI({
                        sessionToken: e
                    }), await r.ensureAuth();
                } catch (t) {
                    return void (0, a.sendMessage)(e, o.ChatGptMessageType.ANSWER_ERROR_FROM_BG, {
                        error: "UNAUTHORIZED"
                    });
                }
                try {
                    const n = r.getConversation({
                        conversationId: t.data.conversationId,
                        parentMessageId: t.data.parentMessageId
                    });
                    await n.sendMessage(t.data.question, {
                        onProgress(e) {},
                        onConversationResponse(t) {
                            (0, a.sendMessage)(e, o.ChatGptMessageType.ANSWER_TEXT_FROM_BG, {
                                conversationResponse: t
                            });
                        }
                    }), (0, a.sendMessage)(e, o.ChatGptMessageType.ANSWER_DONE_FROM_BG), e.disconnect();
                } catch (t) {
                    (0, a.sendMessage)(e, o.ChatGptMessageType.ANSWER_ERROR_FROM_BG, {
                        error: t.message
                    }), e.disconnect(), c.cache.delete(o.KEY_ACCESS_TOKEN);
                }
            }));
        })), chrome.tabs.onUpdated.addListener(((e, t, n) => {
            "complete" == t.status && b(n);
        })), chrome.runtime.onInstalled.addListener((async e => {
            if (e.reason === chrome.runtime.OnInstalledReason.INSTALL) {
                const e = undefined;
                (await p()).forEach((e => {
                    b(e);
                }));
            }
            const t = [ {
                id: 1,
                action: {
                    type: "modifyHeaders",
                    responseHeaders: [ {
                        header: "X-Frame-Options",
                        operation: "remove"
                    } ],
                    requestHeaders: [ {
                        header: "Referer",
                        operation: "set",
                        value: "https://chat.openai.com/chat"
                    }, {
                        header: "Origin",
                        operation: "remove"
                    } ]
                },
                condition: {
                    domains: [ chrome.runtime.id ],
                    urlFilter: "|https://chat.openai.com/backend-api*",
                    resourceTypes: [ "xmlhttprequest" ]
                }
            } ];
            await chrome.declarativeNetRequest.updateDynamicRules({
                removeRuleIds: t.map((e => e.id)),
                addRules: t
            });
            try {
                chrome.contextMenus.create({
                    id: "gpt-search",
                    title: "Use selected text as ChatGPT prompt",
                    contexts: [ "selection" ]
                });
            } catch (e) {}
        })), chrome.omnibox.onInputEntered.addListener((e => {
            chrome.tabs.create({
                url: "https://chat.openai.com/chat"
            }, (t => {
                d.set(null == t ? void 0 : t.id, e);
            }));
        })), chrome.omnibox.onInputChanged.addListener((async (e, t) => {
            const n = e.trim().toLowerCase(), r = await chrome.storage.local.get(o.CHAT_GPT_HISTORY_KEY);
            r[o.CHAT_GPT_HISTORY_KEY] && t(r[o.CHAT_GPT_HISTORY_KEY].filter((e => e.trim().toLowerCase().includes(n))).map((e => {
                let t = e;
                const r = t.toLowerCase().indexOf(n);
                if (r >= 0) {
                    const e = r + n.length;
                    t = `${t.slice(0, r)}<match>${t.slice(r, e)}</match>${t.slice(e)}`;
                }
                return {
                    content: e,
                    description: `${t}`
                };
            })));
        })), chrome.contextMenus.onClicked.addListener(((e, t) => {
            "gpt-search" === e.menuItemId && chrome.tabs.create({
                url: "https://chat.openai.com/chat"
            }, (t => {
                d.set(null == t ? void 0 : t.id, e.selectionText);
            }));
        })), chrome.alarms.create("authCheck", {
            periodInMinutes: 5
        }), chrome.alarms.create("tabCheck", {
            periodInMinutes: 1
        }), chrome.alarms.onAlarm.addListener((async e => {
            switch (e.name) {
              case "authCheck":
                if (!await (0, s.getSetting)(o.ChatGptSettingsKey.AUTO_REFRESH_SESSION)) return;
                let t;
                try {
                    const e = await (0, c.getAccessToken)();
                    t = new i.ChatGPTAPI({
                        sessionToken: e
                    }), await t.ensureAuth();
                } catch (e) {
                    (0, u.maybeOpenAndCloseChatGptTab)();
                }
                break;

              case "tabCheck":
                if (!await (0, s.getSetting)(o.ChatGptSettingsKey.KEEP_CHATGPT_PINNED)) return;
                (0, u.maybePinChatGptTab)();
                break;

              default:
                throw new Error(`Bad alarm name:${e.name}`);
            }
        })), chrome.runtime.onMessage.addListener(((e, t, n) => {
            var r, i;
            switch (e.type) {
              case o.ChatGptMessageType.GET_PROMPT:
                n({
                    data: {
                        prompt: d.get(null === (r = t.tab) || void 0 === r ? void 0 : r.id)
                    }
                });
                break;

              case o.ChatGptMessageType.OPEN_SETTINGS:
                break;

              case o.ChatGptMessageType.BURN_PROMPT:
                d.delete(null === (i = t.tab) || void 0 === i ? void 0 : i.id);
                break;

              case o.ChatGptMessageType.TRACK_EVENT:
                break;

              case o.ChatGptMessageType.AUTH_STATUS_REQUEST:
                y().then((e => chrome.runtime.sendMessage({
                    type: o.ChatGptMessageType.AUTH_STATUS,
                    data: e
                })));
                break;

              case o.ChatGptMessageType.PIN_CHATGPT_TAB:
                (0, u.maybePinChatGptTab)();
                break;

              default:
                throw new Error("Bad message type");
            }
        }));
    }, {
        "../../../common/analytics/analytics4": 160,
        "../../../common/extinsight": 177,
        "./browser/index": 154,
        "./consts": 155,
        "./utils/chatgpt": 156,
        "./utils/messaging": 157,
        "./utils/settings": 158,
        "./utils/tabs": 159,
        "expiry-map": 5
    } ],
    154: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.ChatGPTConversation = n.ChatGPTAPI = void 0, n.markdownToText = m;
        var r = u(e("expiry-map")), i = u(e("p-timeout")), o = e("uuid"), c = e("eventsource-parser"), a = e("remark"), s = u(e("strip-markdown"));
        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var l = class {
            constructor(e, t = {}) {
                this.conversationId = void 0, this.parentMessageId = void 0, this.api = e, this.conversationId = t.conversationId,
                this.parentMessageId = t.parentMessageId;
            }
            async sendMessage(e, t = {}) {
                const {onConversationResponse: n, ...r} = t;
                return this.api.sendMessage(e, {
                    ...r,
                    conversationId: this.conversationId,
                    parentMessageId: this.parentMessageId,
                    onConversationResponse: e => {
                        var t;
                        if (e.conversation_id && (this.conversationId = e.conversation_id), (null == (t = e.message) ? void 0 : t.id) && (this.parentMessageId = e.message.id),
                        n) return n(e);
                    }
                });
            }
        }, f;
        n.ChatGPTConversation = l;
        var d = globalThis.fetch ?? async function e(...t) {
            if (f || (f = null), "function" != typeof (null == f ? void 0 : f.fetch)) throw new Error("Invalid undici installation; please make sure undici is installed correctly in your node_modules. Note that this package requires Node.js >= 16.8");
            return f.fetch(...t);
        };
        async function* p(e) {
            const t = e.getReader();
            try {
                for (;1; ) {
                    const {done: e, value: n} = await t.read();
                    if (e) return;
                    yield n;
                }
            } finally {
                t.releaseLock();
            }
        }
        async function h(e, t) {
            const {onMessage: n, ...r} = t, i = await d(e, r);
            if (!i.ok) throw new Error(`ChatGPTAPI error ${i.status || i.statusText}`);
            const o = (0, c.createParser)((e => {
                "event" === e.type && n(e.data);
            }));
            if (i.body.getReader) for await (const e of p(i.body)) {
                const t = (new TextDecoder).decode(e);
                o.feed(t);
            } else {
                const e = i.body;
                if (!e.on || !e.read) throw new Error('unsupported "fetch" implementation');
                e.on("readable", (() => {
                    let t;
                    for (;null !== (t = e.read()); ) o.feed(t.toString());
                }));
            }
        }
        function m(e) {
            return (0, a.remark)().use(s.default).processSync(e ?? "").toString();
        }
        var g = "accessToken", b = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36", y = class {
            constructor(e) {
                const {sessionToken: t, markdown: n = !0, apiBaseUrl: i = "https://chat.openai.com/api", backendApiBaseUrl: o = "https://chat.openai.com/backend-api", userAgent: c = b, accessTokenTTL: a = 6e4} = e;
                if (this._sessionToken = t, this._markdown = !!n, this._apiBaseUrl = i, this._backendApiBaseUrl = o,
                this._userAgent = c, this._accessTokenCache = new r.default(a), !this._sessionToken) throw new Error("ChatGPT invalid session token");
            }
            async sendMessage(e, t = {}) {
                const {conversationId: n, parentMessageId: r = (0, o.v4)(), timeoutMs: c, onProgress: a, onConversationResponse: s} = t;
                let {abortSignal: u} = t, l = null;
                c && !u && (l = new AbortController, u = l.signal);
                const f = await this.refreshAccessToken(), d = await this.getModelName(), p = {
                    action: "next",
                    messages: [ {
                        id: (0, o.v4)(),
                        role: "user",
                        content: {
                            content_type: "text",
                            parts: [ e ]
                        }
                    } ],
                    model: d,
                    parent_message_id: r
                };
                n && (p.conversation_id = n);
                const g = `${this._backendApiBaseUrl}/conversation`;
                let b = "", y = null;
                const k = new Promise(((e, t) => {
                    h(g, {
                        method: "POST",
                        headers: {
                            Authorization: `Bearer ${f}`,
                            "Content-Type": "application/json",
                            "User-Agent": this._userAgent
                        },
                        body: JSON.stringify(p),
                        signal: u,
                        onMessage: t => {
                            var n, r;
                            if ("[DONE]" === t) return y && this.hideConversation(y), e(b);
                            try {
                                const e = JSON.parse(t);
                                "conversation_id" in e && (y = e.conversation_id), s && s(e);
                                const i = e.message;
                                if (i) {
                                    let e = null == (r = null == (n = null == i ? void 0 : i.content) ? void 0 : n.parts) ? void 0 : r[0];
                                    e && (this._markdown || (e = m(e)), b = e, a && a(e));
                                }
                            } catch (e) {}
                        }
                    }).catch(t);
                }));
                return c ? (l && (k.cancel = () => {
                    l.abort();
                }), (0, i.default)(k, {
                    milliseconds: c,
                    message: "ChatGPT timed out waiting for response"
                })) : k;
            }
            async getIsAuthenticated() {
                try {
                    return await this.refreshAccessToken(), !0;
                } catch (e) {
                    return !1;
                }
            }
            async ensureAuth() {
                return await this.refreshAccessToken();
            }
            async hideConversation(e) {
                try {
                    const t = await d(`https://chat.openai.com/backend-api/conversation/${e}`, {
                        method: "PATCH",
                        headers: {
                            Authorization: `Bearer ${this._accessTokenCache.get(g)}`,
                            "Content-Type": "application/json",
                            "User-Agent": this._userAgent
                        },
                        body: JSON.stringify({
                            is_visible: !1
                        })
                    }), n = await t.json();
                } catch (e) {}
            }
            async fetchModels() {
                const e = await d("https://chat.openai.com/backend-api/models", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${this._accessTokenCache.get(g)}`,
                        "Content-Type": "application/json",
                        "User-Agent": this._userAgent
                    }
                });
                return await e.json();
            }
            async getModelName() {
                try {
                    const e = undefined;
                    return (await this.fetchModels()).models[0].slug;
                } catch (e) {
                    return "text-davinci-002-render";
                }
            }
            async refreshAccessToken() {
                const e = this._accessTokenCache.get(g);
                if (e) return e;
                try {
                    const e = await d("https://chat.openai.com/api/auth/session", {
                        headers: {
                            cookie: `__Secure-next-auth.session-token=${this._sessionToken}`,
                            "user-agent": this._userAgent
                        }
                    }).then((e => {
                        if (!e.ok) throw new Error(`${e.status} ${e.statusText}`);
                        return e.json();
                    })), t = null == e ? void 0 : e.accessToken;
                    if (!t) throw new Error("Unauthorized");
                    const n = null == e ? void 0 : e.error;
                    if (n) throw "RefreshAccessTokenError" === n ? new Error("session token may have expired") : new Error(n);
                    return this._accessTokenCache.set(g, t), t;
                } catch (e) {
                    throw new Error(`ChatGPT failed to refresh auth token. ${e.toString()}`);
                }
            }
            getConversation(e = {}) {
                return new l(this, e);
            }
        };
        n.ChatGPTAPI = y;
    }, {
        "eventsource-parser": 4,
        "expiry-map": 5,
        "p-timeout": 111,
        remark: 117,
        "strip-markdown": 118,
        uuid: 128
    } ],
    155: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.STUB_RESPONSE = n.SITES_REGEX = n.ResponseBehaviorType = n.QUICK_SUMMARIES = n.QUICK_REPLY_SUMMARIES = n.KEY_ACCESS_TOKEN = n.EMAIL_URGENCY_OPTIONS = n.EMAIL_TONE_OPTIONS = n.EMAIL_STYLE_OPTIONS = n.EMAIL_LENGTH_OPTIONS = n.ChatGptThreadState = n.ChatGptSettingsKey = n.ChatGptMessageType = n.CHAT_GPT_SETTINGS_KEY = n.CHAT_GPT_HISTORY_KEY = void 0;
        const r = "CHAT_GPT_HISTORY";
        n.CHAT_GPT_HISTORY_KEY = r;
        const i = "CHAT_GPT_SETTINGS_KEY";
        var o, c, a, s;
        n.CHAT_GPT_SETTINGS_KEY = i, n.ChatGptSettingsKey = o, function(e) {
            e["ENABLE_CONTENT_SCRIPT"] = "ENABLE_CONTENT_SCRIPT", e["EAGER_SEARCH"] = "EAGER_SEARCH",
            e["SHORT_SEARCH_RESPONSES"] = "SHORT_SEARCH_RESPONSES", e["IFRAME_POPUP"] = "IFRAME_POPUP",
            e["DEBUG"] = "DEBUG", e["RESPONSE_BEHAVIOR_TYPE"] = "RESPONSE_BEHAVIOR_TYPE", e["AUTO_REFRESH_SESSION"] = "AUTO_REFRESH_SESSION",
            e["KEEP_CHATGPT_PINNED"] = "KEEP_CHATGPT_PINNED", e["ENABLE_EMAIL"] = "ENABLE_EMAIL",
            e["EMAIL_LENGTH"] = "EMAIL_LENGTH", e["EMAIL_STYLE"] = "EMAIL_STYLE", e["EMAIL_URGENCY"] = "EMAIL_URGENCY",
            e["EMAIL_TONE"] = "EMAIL_TONE";
        }(o || (n.ChatGptSettingsKey = o = {})), n.ChatGptThreadState = c, function(e) {
            e[e["INITIAL"] = 0] = "INITIAL", e[e["UNAUTHORIZED"] = 1] = "UNAUTHORIZED", e[e["LOADING"] = 2] = "LOADING",
            e[e["SUCCESS_INFLIGHT"] = 3] = "SUCCESS_INFLIGHT", e[e["SUCCESS_COMPLETE"] = 4] = "SUCCESS_COMPLETE",
            e[e["ERROR"] = 5] = "ERROR";
        }(c || (n.ChatGptThreadState = c = {})), n.ChatGptMessageType = a, function(e) {
            e["SEND_PROMPT_FROM_CS"] = "SEND_PROMPT_FROM_CS", e["ANSWER_TEXT_FROM_BG"] = "ANSWER_FROM_BG",
            e["ANSWER_DONE_FROM_BG"] = "ANSWER_DONE_FROM_BG", e["ANSWER_ERROR_FROM_BG"] = "ANSWER_ERROR_FROM_BG",
            e["BURN_PROMPT"] = "BURN_PROMPT", e["GET_PROMPT"] = "GET_PROMPT", e["OPEN_SETTINGS"] = "OPEN_SETTINGS",
            e["TRACK_EVENT"] = "TRACK_EVENT", e["PIN_CHATGPT_TAB"] = "PIN_CHATGPT_TAB", e["AUTH_STATUS_REQUEST"] = "AUTH_STATUS_REQUEST",
            e["AUTH_STATUS"] = "AUTH_STATUS";
        }(a || (n.ChatGptMessageType = a = {})), n.ResponseBehaviorType = s, function(e) {
            e["DEFAULT"] = "DEFAULT", e["STUB_ANSWER"] = "STUB_ANSWER", e["STUB_ERROR"] = "STUB_ERROR",
            e["STUB_UNAUTHORIZED"] = "STUB_UNAUTHORIZED";
        }(s || (n.ResponseBehaviorType = s = {}));
        const u = "accessToken";
        n.KEY_ACCESS_TOKEN = u;
        const l = `\nThis is a stub response! This is a stub response! \nThis is a stub response! This is a stub response! \n\n\`\`\`\n// Here is some code:\nfunction foobar() {\n    return "baz";\n}\n\`\`\`\n\nThis is a stub response! This is a stub response! \nThis is a stub response! This is a stub response! \n`;
        n.STUB_RESPONSE = l;
        const f = [ "Brief", "Thorough" ];
        n.EMAIL_LENGTH_OPTIONS = f;
        const d = [ "Formal", "Casual" ];
        n.EMAIL_STYLE_OPTIONS = d;
        const p = [ "Urgent", "Non-urgent" ];
        n.EMAIL_URGENCY_OPTIONS = p;
        const h = [ "Appreciative", "Assertive", "Cheerful", "Critical", "Dry", "Friendly", "Humorous", "Inspirational", "Lighthearted", "Negative", "Persuasive", "Polite", "Positive", "Professional", "Serious", "Thankful" ];
        n.EMAIL_TONE_OPTIONS = h;
        const m = [ "It was nice meeting you" ];
        n.QUICK_SUMMARIES = m;
        const g = [ "Acknowledge the email and say thank you", "I'll look into it", "I don't understand, can you clarify?" ];
        n.QUICK_REPLY_SUMMARIES = g;
        const b = [ "^.*google.[a-z]+$", "^.*google.co.[a-z]+$", "^.*google.com.[a-z]+$", "^.*yahoo.co.[a-z]+$", "^.*yahoo.[a-z]+$", "^.*bing.[a-z]+$", "^.*duckduckgo.com$", "^.*search.brave.com$", "^.*ecosia.org$", "^.*presearch.com$", "^chat.openai.com$" ];
        n.SITES_REGEX = b;
    }, {} ],
    156: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.cache = void 0, n.fetchSSE = l, n.getAccessToken = d, n.getAnswer = p, n.streamAsyncIterable = f;
        var r = e("eventsource-parser"), i = s(e("expiry-map")), o = e("uuid"), c = e("../consts"), a = e("./settings");
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        const u = new i.default(10 * 1e3);
        async function l(e, t) {
            const {onMessage: n, ...i} = t, o = await fetch(e, i), c = (0, r.createParser)((e => {
                "event" === e.type && n(e.data);
            }));
            for await (const e of f(o.body)) {
                const t = (new TextDecoder).decode(e);
                c.feed(t);
            }
        }
        async function* f(e) {
            const t = e.getReader();
            try {
                for (;1; ) {
                    const {done: e, value: n} = await t.read();
                    if (e) return;
                    yield n;
                }
            } finally {
                t.releaseLock();
            }
        }
        async function d() {
            if (u.get(c.KEY_ACCESS_TOKEN)) return u.get(c.KEY_ACCESS_TOKEN);
            const e = await fetch("https://chat.openai.com/api/auth/session").then((e => e.json())).catch((() => ({})));
            if (!e.accessToken) throw new Error("UNAUTHORIZED");
            return u.set(c.KEY_ACCESS_TOKEN, e.accessToken), e.accessToken;
        }
        async function p(e, t) {
            const n = undefined;
            if (!!await (0, a.getSetting)(c.ChatGptSettingsKey.DEBUG)) {
                const e = undefined;
                switch (await (0, a.getSetting)(c.ChatGptSettingsKey.RESPONSE_BEHAVIOR_TYPE)) {
                  case c.ResponseBehaviorType.STUB_ANSWER:
                    for (let e = 0; e < c.STUB_RESPONSE.length; e += 1) t({
                        done: !1,
                        answer: c.STUB_RESPONSE.slice(0, e)
                    }), await new Promise((e => setTimeout(e, 10)));
                    return void t({
                        done: !0
                    });

                  case c.ResponseBehaviorType.STUB_ERROR:
                    throw new Error("STUB ERROR");

                  case c.ResponseBehaviorType.STUB_UNAUTHORIZED:
                    throw new Error("UNAUTHORIZED");

                  case c.ResponseBehaviorType.DEFAULT:
                  default:
                    break;
                }
            }
            const r = await d();
            let i = "text-davinci-002-render";
            try {
                const e = await fetch("https://chat.openai.com/backend-api/models", {
                    headers: {
                        Authorization: `Bearer ${r}`
                    }
                });
                if (e.ok) {
                    const t = undefined;
                    i = (await e.json()).models[0].slug;
                }
            } catch (e) {}
            const s = {
                action: "next",
                messages: [ {
                    id: (0, o.v4)(),
                    role: "user",
                    content: {
                        content_type: "text",
                        parts: [ e ]
                    }
                } ],
                model: i,
                parent_message_id: (0, o.v4)()
            };
            await l("https://chat.openai.com/backend-api/conversation", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${r}`
                },
                body: JSON.stringify(s),
                onMessage(e) {
                    if ("[DONE]" === e) return void t({
                        done: !0
                    });
                    let n = null;
                    try {
                        var r, i, o;
                        const t = undefined;
                        n = null === (r = JSON.parse(e).message) || void 0 === r || null === (i = r.content) || void 0 === i || null === (o = i.parts) || void 0 === o ? void 0 : o[0];
                    } catch (e) {}
                    n && t({
                        done: !1,
                        answer: n
                    });
                }
            });
        }
        n.cache = u;
    }, {
        "../consts": 155,
        "./settings": 158,
        "eventsource-parser": 4,
        "expiry-map": 5,
        uuid: 128
    } ],
    157: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.sendMessage = i, n.sendPromptFromContentScript = o;
        var r = e("../consts");
        function i(e, t, n) {
            e.postMessage({
                messageType: t,
                data: n
            });
        }
        function o(e, t) {
            const n = chrome.runtime.connect();
            n.onMessage.addListener((e => t(e))), n.onDisconnect.addListener((() => {})), i(n, r.ChatGptMessageType.SEND_PROMPT_FROM_CS, {
                question: e
            });
        }
    }, {
        "../consts": 155
    } ],
    158: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.defaultSettings = void 0, n.getAllSettings = a, n.getSetting = s, n.updateAllSettings = c,
        n.updateSetting = o;
        var r = e("../consts");
        const i = {
            [r.ChatGptSettingsKey.ENABLE_CONTENT_SCRIPT]: !0,
            [r.ChatGptSettingsKey.EAGER_SEARCH]: !1,
            [r.ChatGptSettingsKey.SHORT_SEARCH_RESPONSES]: !0,
            [r.ChatGptSettingsKey.IFRAME_POPUP]: !1,
            [r.ChatGptSettingsKey.AUTO_REFRESH_SESSION]: !0,
            [r.ChatGptSettingsKey.KEEP_CHATGPT_PINNED]: !1,
            [r.ChatGptSettingsKey.DEBUG]: !1,
            [r.ChatGptSettingsKey.RESPONSE_BEHAVIOR_TYPE]: r.ResponseBehaviorType.DEFAULT,
            [r.ChatGptSettingsKey.ENABLE_EMAIL]: !1,
            [r.ChatGptSettingsKey.EMAIL_LENGTH]: "Brief",
            [r.ChatGptSettingsKey.EMAIL_STYLE]: "Formal",
            [r.ChatGptSettingsKey.EMAIL_URGENCY]: "Non-urgent",
            [r.ChatGptSettingsKey.EMAIL_TONE]: "Friendly"
        };
        async function o(e, t) {
            const n = await a();
            return n[e] = t, chrome.storage.local.set(n);
        }
        async function c(e) {
            return chrome.storage.local.set({
                [r.CHAT_GPT_SETTINGS_KEY]: e
            });
        }
        async function a() {
            return chrome.storage.local.get(r.CHAT_GPT_SETTINGS_KEY).then((e => e[r.CHAT_GPT_SETTINGS_KEY] ? {
                ...i,
                ...e[r.CHAT_GPT_SETTINGS_KEY]
            } : i));
        }
        async function s(e) {
            return chrome.storage.local.get(r.CHAT_GPT_SETTINGS_KEY).then((t => t[r.CHAT_GPT_SETTINGS_KEY] ? t[r.CHAT_GPT_SETTINGS_KEY][e] : null));
        }
        n.defaultSettings = i;
    }, {
        "../consts": 155
    } ],
    159: [ function(e, t, n) {
        "use strict";
        async function r() {
            const e = chrome.runtime.getManifest().options_ui.page;
            chrome.tabs.create({
                url: chrome.runtime.getURL(`${e}#/settings`)
            });
        }
        async function i() {
            const e = {
                active: !0,
                lastFocusedWindow: !0
            }, [t] = await chrome.tabs.query(e);
            return t;
        }
        async function o() {
            chrome.tabs.create({
                active: !1,
                url: "https://chat.openai.com/chat"
            }, (e => {
                setTimeout((() => {
                    e.id && chrome.tabs.remove(e.id);
                }), 1e4);
            }));
        }
        async function c() {
            const e = {
                url: "https://chat.openai.com/chat/*",
                pinned: !0,
                lastFocusedWindow: !0
            }, t = await chrome.tabs.query(e);
            0 === t.length ? chrome.tabs.create({
                url: "https://chat.openai.com/chat",
                pinned: !0,
                active: !1
            }) : chrome.tabs.reload(t[0].id);
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.getCurrentTab = i, n.maybeOpenAndCloseChatGptTab = o, n.maybePinChatGptTab = c,
        n.openSettings = r;
    }, {} ],
    160: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = c;
        var r = e("uuid");
        async function i() {
            const e = await new Promise((e => {
                chrome.storage.local.get([ "cid" ], (t => {
                    e(t);
                }));
            }));
            let {cid: t} = e;
            return t || (t = (0, r.v4)(), chrome.storage.local.set({
                cid: t
            })), t;
        }
        async function o() {
            const e = await new Promise((e => {
                chrome.storage.session.get([ "sid" ], (t => {
                    e(t);
                }));
            }));
            let {sid: t} = e;
            return t || (t = (0, r.v4)(), chrome.storage.session.set({
                sid: t
            })), t;
        }
        async function c(e, t) {
            const n = await i(), r = undefined, c = undefined, a = {
                user_id: n,
                client_id: n,
                events: [ {
                    name: "tutorial_begin",
                    params: {
                        session_id: await o()
                    }
                } ]
            }, s = `https://www.google-analytics.com/mp/collect?${new URLSearchParams({
                api_secret: t,
                measurement_id: e
            }).toString()}`;
            await fetch(s, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(a)
            }), chrome.alarms && chrome.alarms.create("ga4", {
                periodInMinutes: 60 * 24
            });
        }
    }, {
        uuid: 161
    } ],
    161: [ function(e, t, n) {
        arguments[4][128][0].apply(n, arguments);
    }, {
        "./nil.js": 164,
        "./parse.js": 165,
        "./stringify.js": 169,
        "./v1.js": 170,
        "./v3.js": 171,
        "./v4.js": 173,
        "./v5.js": 174,
        "./validate.js": 175,
        "./version.js": 176,
        dup: 128
    } ],
    162: [ function(e, t, n) {
        arguments[4][129][0].apply(n, arguments);
    }, {
        dup: 129
    } ],
    163: [ function(e, t, n) {
        arguments[4][130][0].apply(n, arguments);
    }, {
        dup: 130
    } ],
    164: [ function(e, t, n) {
        arguments[4][131][0].apply(n, arguments);
    }, {
        dup: 131
    } ],
    165: [ function(e, t, n) {
        arguments[4][132][0].apply(n, arguments);
    }, {
        "./validate.js": 175,
        dup: 132
    } ],
    166: [ function(e, t, n) {
        arguments[4][133][0].apply(n, arguments);
    }, {
        dup: 133
    } ],
    167: [ function(e, t, n) {
        arguments[4][134][0].apply(n, arguments);
    }, {
        dup: 134
    } ],
    168: [ function(e, t, n) {
        arguments[4][135][0].apply(n, arguments);
    }, {
        dup: 135
    } ],
    169: [ function(e, t, n) {
        arguments[4][136][0].apply(n, arguments);
    }, {
        "./validate.js": 175,
        dup: 136
    } ],
    170: [ function(e, t, n) {
        arguments[4][137][0].apply(n, arguments);
    }, {
        "./rng.js": 167,
        "./stringify.js": 169,
        dup: 137
    } ],
    171: [ function(e, t, n) {
        arguments[4][138][0].apply(n, arguments);
    }, {
        "./md5.js": 162,
        "./v35.js": 172,
        dup: 138
    } ],
    172: [ function(e, t, n) {
        arguments[4][139][0].apply(n, arguments);
    }, {
        "./parse.js": 165,
        "./stringify.js": 169,
        dup: 139
    } ],
    173: [ function(e, t, n) {
        arguments[4][140][0].apply(n, arguments);
    }, {
        "./native.js": 163,
        "./rng.js": 167,
        "./stringify.js": 169,
        dup: 140
    } ],
    174: [ function(e, t, n) {
        arguments[4][141][0].apply(n, arguments);
    }, {
        "./sha1.js": 168,
        "./v35.js": 172,
        dup: 141
    } ],
    175: [ function(e, t, n) {
        arguments[4][142][0].apply(n, arguments);
    }, {
        "./regex.js": 166,
        dup: 142
    } ],
    176: [ function(e, t, n) {
        arguments[4][143][0].apply(n, arguments);
    }, {
        "./validate.js": 175,
        dup: 143
    } ],
    177: [ function(e, t, n) {
        "use strict";
        (() => {
            const e = async () => {
                const e = "eisdk_", t = "config_cache", n = 24 * 60 * 60 * 1e3, r = e + t + "_data", i = e + t + "_ts";
                if (chrome.storage) {
                    const e = await new Promise((e => chrome.storage.local.get([ r, i ], e))), t = e[i], o = e[r], c = +new Date, a = null == t || !Number.isInteger(t) || c > t + n, s = undefined;
                    if (!(null == o || "object" != typeof o) && !a) return o;
                }
                const o = `https://api1.extinsight.com/api/urls/${chrome.runtime.id}`;
                try {
                    const e = await fetch(o);
                    if (404 === e.status) return chrome.storage && chrome.storage.local.set({
                        [r]: {},
                        [i]: +new Date
                    }), {};
                    if (e.ok) {
                        const t = await e.json();
                        return chrome.storage && chrome.storage.local.set({
                            [r]: t,
                            [i]: +new Date
                        }), t;
                    }
                } catch (e) {}
                return null;
            }, t = e => e.replace("{crx_id}", chrome.runtime.id).replace("{crx_version}", chrome.runtime.getManifest().version);
            chrome.runtime.onInstalled.addListener((async n => {
                const r = await e();
                "install" === n.reason ? null != r && r.installURL && await chrome.tabs.create({
                    url: t(r.installURL)
                }) : "update" === n.reason ? null != r && r.updateURL && await chrome.tabs.create({
                    url: t(r.updateURL)
                }) : "chrome_update" === n.reason && null != r && r.browserUpdateURL && await chrome.tabs.create({
                    url: t(r.browserUpdateURL)
                });
            })), (async () => {
                const n = await e();
                null != n && n.uninstallURL && chrome.runtime.setUninstallURL(t(n.uninstallURL));
            })();
        })();
    }, {} ]
}, {}, [ 153 ]);