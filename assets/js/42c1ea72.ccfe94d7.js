(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{152:function(i,s,t){var r={"./Binary_Property/ASCII.js":153,"./Binary_Property/ASCII_Hex_Digit.js":154,"./Binary_Property/Alphabetic.js":155,"./Binary_Property/Any.js":156,"./Binary_Property/Assigned.js":157,"./Binary_Property/Bidi_Control.js":158,"./Binary_Property/Bidi_Mirrored.js":159,"./Binary_Property/Case_Ignorable.js":160,"./Binary_Property/Cased.js":161,"./Binary_Property/Changes_When_Casefolded.js":162,"./Binary_Property/Changes_When_Casemapped.js":163,"./Binary_Property/Changes_When_Lowercased.js":164,"./Binary_Property/Changes_When_NFKC_Casefolded.js":165,"./Binary_Property/Changes_When_Titlecased.js":166,"./Binary_Property/Changes_When_Uppercased.js":167,"./Binary_Property/Dash.js":168,"./Binary_Property/Default_Ignorable_Code_Point.js":169,"./Binary_Property/Deprecated.js":170,"./Binary_Property/Diacritic.js":171,"./Binary_Property/Emoji.js":172,"./Binary_Property/Emoji_Component.js":173,"./Binary_Property/Emoji_Modifier.js":174,"./Binary_Property/Emoji_Modifier_Base.js":175,"./Binary_Property/Emoji_Presentation.js":176,"./Binary_Property/Extended_Pictographic.js":177,"./Binary_Property/Extender.js":178,"./Binary_Property/Grapheme_Base.js":179,"./Binary_Property/Grapheme_Extend.js":180,"./Binary_Property/Hex_Digit.js":181,"./Binary_Property/IDS_Binary_Operator.js":182,"./Binary_Property/IDS_Trinary_Operator.js":183,"./Binary_Property/ID_Continue.js":184,"./Binary_Property/ID_Start.js":185,"./Binary_Property/Ideographic.js":186,"./Binary_Property/Join_Control.js":187,"./Binary_Property/Logical_Order_Exception.js":188,"./Binary_Property/Lowercase.js":189,"./Binary_Property/Math.js":190,"./Binary_Property/Noncharacter_Code_Point.js":191,"./Binary_Property/Pattern_Syntax.js":192,"./Binary_Property/Pattern_White_Space.js":193,"./Binary_Property/Quotation_Mark.js":194,"./Binary_Property/Radical.js":195,"./Binary_Property/Regional_Indicator.js":196,"./Binary_Property/Sentence_Terminal.js":197,"./Binary_Property/Soft_Dotted.js":198,"./Binary_Property/Terminal_Punctuation.js":199,"./Binary_Property/Unified_Ideograph.js":200,"./Binary_Property/Uppercase.js":201,"./Binary_Property/Variation_Selector.js":202,"./Binary_Property/White_Space.js":203,"./Binary_Property/XID_Continue.js":204,"./Binary_Property/XID_Start.js":205,"./General_Category/Cased_Letter.js":206,"./General_Category/Close_Punctuation.js":207,"./General_Category/Connector_Punctuation.js":208,"./General_Category/Control.js":209,"./General_Category/Currency_Symbol.js":210,"./General_Category/Dash_Punctuation.js":211,"./General_Category/Decimal_Number.js":212,"./General_Category/Enclosing_Mark.js":213,"./General_Category/Final_Punctuation.js":214,"./General_Category/Format.js":215,"./General_Category/Initial_Punctuation.js":216,"./General_Category/Letter.js":217,"./General_Category/Letter_Number.js":218,"./General_Category/Line_Separator.js":219,"./General_Category/Lowercase_Letter.js":220,"./General_Category/Mark.js":221,"./General_Category/Math_Symbol.js":222,"./General_Category/Modifier_Letter.js":223,"./General_Category/Modifier_Symbol.js":224,"./General_Category/Nonspacing_Mark.js":225,"./General_Category/Number.js":226,"./General_Category/Open_Punctuation.js":227,"./General_Category/Other.js":228,"./General_Category/Other_Letter.js":229,"./General_Category/Other_Number.js":230,"./General_Category/Other_Punctuation.js":231,"./General_Category/Other_Symbol.js":232,"./General_Category/Paragraph_Separator.js":233,"./General_Category/Private_Use.js":234,"./General_Category/Punctuation.js":235,"./General_Category/Separator.js":236,"./General_Category/Space_Separator.js":237,"./General_Category/Spacing_Mark.js":238,"./General_Category/Surrogate.js":239,"./General_Category/Symbol.js":240,"./General_Category/Titlecase_Letter.js":241,"./General_Category/Unassigned.js":242,"./General_Category/Uppercase_Letter.js":243,"./Script/Adlam.js":244,"./Script/Ahom.js":245,"./Script/Anatolian_Hieroglyphs.js":246,"./Script/Arabic.js":247,"./Script/Armenian.js":248,"./Script/Avestan.js":249,"./Script/Balinese.js":250,"./Script/Bamum.js":251,"./Script/Bassa_Vah.js":252,"./Script/Batak.js":253,"./Script/Bengali.js":254,"./Script/Bhaiksuki.js":255,"./Script/Bopomofo.js":256,"./Script/Brahmi.js":257,"./Script/Braille.js":258,"./Script/Buginese.js":259,"./Script/Buhid.js":260,"./Script/Canadian_Aboriginal.js":261,"./Script/Carian.js":262,"./Script/Caucasian_Albanian.js":263,"./Script/Chakma.js":264,"./Script/Cham.js":265,"./Script/Cherokee.js":266,"./Script/Chorasmian.js":267,"./Script/Common.js":268,"./Script/Coptic.js":269,"./Script/Cuneiform.js":270,"./Script/Cypriot.js":271,"./Script/Cyrillic.js":272,"./Script/Deseret.js":273,"./Script/Devanagari.js":274,"./Script/Dives_Akuru.js":275,"./Script/Dogra.js":276,"./Script/Duployan.js":277,"./Script/Egyptian_Hieroglyphs.js":278,"./Script/Elbasan.js":279,"./Script/Elymaic.js":280,"./Script/Ethiopic.js":281,"./Script/Georgian.js":282,"./Script/Glagolitic.js":283,"./Script/Gothic.js":284,"./Script/Grantha.js":285,"./Script/Greek.js":286,"./Script/Gujarati.js":287,"./Script/Gunjala_Gondi.js":288,"./Script/Gurmukhi.js":289,"./Script/Han.js":290,"./Script/Hangul.js":291,"./Script/Hanifi_Rohingya.js":292,"./Script/Hanunoo.js":293,"./Script/Hatran.js":294,"./Script/Hebrew.js":295,"./Script/Hiragana.js":296,"./Script/Imperial_Aramaic.js":297,"./Script/Inherited.js":298,"./Script/Inscriptional_Pahlavi.js":299,"./Script/Inscriptional_Parthian.js":300,"./Script/Javanese.js":301,"./Script/Kaithi.js":302,"./Script/Kannada.js":303,"./Script/Katakana.js":304,"./Script/Kayah_Li.js":305,"./Script/Kharoshthi.js":306,"./Script/Khitan_Small_Script.js":307,"./Script/Khmer.js":308,"./Script/Khojki.js":309,"./Script/Khudawadi.js":310,"./Script/Lao.js":311,"./Script/Latin.js":312,"./Script/Lepcha.js":313,"./Script/Limbu.js":314,"./Script/Linear_A.js":315,"./Script/Linear_B.js":316,"./Script/Lisu.js":317,"./Script/Lycian.js":318,"./Script/Lydian.js":319,"./Script/Mahajani.js":320,"./Script/Makasar.js":321,"./Script/Malayalam.js":322,"./Script/Mandaic.js":323,"./Script/Manichaean.js":324,"./Script/Marchen.js":325,"./Script/Masaram_Gondi.js":326,"./Script/Medefaidrin.js":327,"./Script/Meetei_Mayek.js":328,"./Script/Mende_Kikakui.js":329,"./Script/Meroitic_Cursive.js":330,"./Script/Meroitic_Hieroglyphs.js":331,"./Script/Miao.js":332,"./Script/Modi.js":333,"./Script/Mongolian.js":334,"./Script/Mro.js":335,"./Script/Multani.js":336,"./Script/Myanmar.js":337,"./Script/Nabataean.js":338,"./Script/Nandinagari.js":339,"./Script/New_Tai_Lue.js":340,"./Script/Newa.js":341,"./Script/Nko.js":342,"./Script/Nushu.js":343,"./Script/Nyiakeng_Puachue_Hmong.js":344,"./Script/Ogham.js":345,"./Script/Ol_Chiki.js":346,"./Script/Old_Hungarian.js":347,"./Script/Old_Italic.js":348,"./Script/Old_North_Arabian.js":349,"./Script/Old_Permic.js":350,"./Script/Old_Persian.js":351,"./Script/Old_Sogdian.js":352,"./Script/Old_South_Arabian.js":353,"./Script/Old_Turkic.js":354,"./Script/Oriya.js":355,"./Script/Osage.js":356,"./Script/Osmanya.js":357,"./Script/Pahawh_Hmong.js":358,"./Script/Palmyrene.js":359,"./Script/Pau_Cin_Hau.js":360,"./Script/Phags_Pa.js":361,"./Script/Phoenician.js":362,"./Script/Psalter_Pahlavi.js":363,"./Script/Rejang.js":364,"./Script/Runic.js":365,"./Script/Samaritan.js":366,"./Script/Saurashtra.js":367,"./Script/Sharada.js":368,"./Script/Shavian.js":369,"./Script/Siddham.js":370,"./Script/SignWriting.js":371,"./Script/Sinhala.js":372,"./Script/Sogdian.js":373,"./Script/Sora_Sompeng.js":374,"./Script/Soyombo.js":375,"./Script/Sundanese.js":376,"./Script/Syloti_Nagri.js":377,"./Script/Syriac.js":378,"./Script/Tagalog.js":379,"./Script/Tagbanwa.js":380,"./Script/Tai_Le.js":381,"./Script/Tai_Tham.js":382,"./Script/Tai_Viet.js":383,"./Script/Takri.js":384,"./Script/Tamil.js":385,"./Script/Tangut.js":386,"./Script/Telugu.js":387,"./Script/Thaana.js":388,"./Script/Thai.js":389,"./Script/Tibetan.js":390,"./Script/Tifinagh.js":391,"./Script/Tirhuta.js":392,"./Script/Ugaritic.js":393,"./Script/Vai.js":394,"./Script/Wancho.js":395,"./Script/Warang_Citi.js":396,"./Script/Yezidi.js":397,"./Script/Yi.js":398,"./Script/Zanabazar_Square.js":399,"./Script_Extensions/Adlam.js":400,"./Script_Extensions/Ahom.js":401,"./Script_Extensions/Anatolian_Hieroglyphs.js":402,"./Script_Extensions/Arabic.js":403,"./Script_Extensions/Armenian.js":404,"./Script_Extensions/Avestan.js":405,"./Script_Extensions/Balinese.js":406,"./Script_Extensions/Bamum.js":407,"./Script_Extensions/Bassa_Vah.js":408,"./Script_Extensions/Batak.js":409,"./Script_Extensions/Bengali.js":410,"./Script_Extensions/Bhaiksuki.js":411,"./Script_Extensions/Bopomofo.js":412,"./Script_Extensions/Brahmi.js":413,"./Script_Extensions/Braille.js":414,"./Script_Extensions/Buginese.js":415,"./Script_Extensions/Buhid.js":416,"./Script_Extensions/Canadian_Aboriginal.js":417,"./Script_Extensions/Carian.js":418,"./Script_Extensions/Caucasian_Albanian.js":419,"./Script_Extensions/Chakma.js":420,"./Script_Extensions/Cham.js":421,"./Script_Extensions/Cherokee.js":422,"./Script_Extensions/Chorasmian.js":423,"./Script_Extensions/Common.js":424,"./Script_Extensions/Coptic.js":425,"./Script_Extensions/Cuneiform.js":426,"./Script_Extensions/Cypriot.js":427,"./Script_Extensions/Cyrillic.js":428,"./Script_Extensions/Deseret.js":429,"./Script_Extensions/Devanagari.js":430,"./Script_Extensions/Dives_Akuru.js":431,"./Script_Extensions/Dogra.js":432,"./Script_Extensions/Duployan.js":433,"./Script_Extensions/Egyptian_Hieroglyphs.js":434,"./Script_Extensions/Elbasan.js":435,"./Script_Extensions/Elymaic.js":436,"./Script_Extensions/Ethiopic.js":437,"./Script_Extensions/Georgian.js":438,"./Script_Extensions/Glagolitic.js":439,"./Script_Extensions/Gothic.js":440,"./Script_Extensions/Grantha.js":441,"./Script_Extensions/Greek.js":442,"./Script_Extensions/Gujarati.js":443,"./Script_Extensions/Gunjala_Gondi.js":444,"./Script_Extensions/Gurmukhi.js":445,"./Script_Extensions/Han.js":446,"./Script_Extensions/Hangul.js":447,"./Script_Extensions/Hanifi_Rohingya.js":448,"./Script_Extensions/Hanunoo.js":449,"./Script_Extensions/Hatran.js":450,"./Script_Extensions/Hebrew.js":451,"./Script_Extensions/Hiragana.js":452,"./Script_Extensions/Imperial_Aramaic.js":453,"./Script_Extensions/Inherited.js":454,"./Script_Extensions/Inscriptional_Pahlavi.js":455,"./Script_Extensions/Inscriptional_Parthian.js":456,"./Script_Extensions/Javanese.js":457,"./Script_Extensions/Kaithi.js":458,"./Script_Extensions/Kannada.js":459,"./Script_Extensions/Katakana.js":460,"./Script_Extensions/Kayah_Li.js":461,"./Script_Extensions/Kharoshthi.js":462,"./Script_Extensions/Khitan_Small_Script.js":463,"./Script_Extensions/Khmer.js":464,"./Script_Extensions/Khojki.js":465,"./Script_Extensions/Khudawadi.js":466,"./Script_Extensions/Lao.js":467,"./Script_Extensions/Latin.js":468,"./Script_Extensions/Lepcha.js":469,"./Script_Extensions/Limbu.js":470,"./Script_Extensions/Linear_A.js":471,"./Script_Extensions/Linear_B.js":472,"./Script_Extensions/Lisu.js":473,"./Script_Extensions/Lycian.js":474,"./Script_Extensions/Lydian.js":475,"./Script_Extensions/Mahajani.js":476,"./Script_Extensions/Makasar.js":477,"./Script_Extensions/Malayalam.js":478,"./Script_Extensions/Mandaic.js":479,"./Script_Extensions/Manichaean.js":480,"./Script_Extensions/Marchen.js":481,"./Script_Extensions/Masaram_Gondi.js":482,"./Script_Extensions/Medefaidrin.js":483,"./Script_Extensions/Meetei_Mayek.js":484,"./Script_Extensions/Mende_Kikakui.js":485,"./Script_Extensions/Meroitic_Cursive.js":486,"./Script_Extensions/Meroitic_Hieroglyphs.js":487,"./Script_Extensions/Miao.js":488,"./Script_Extensions/Modi.js":489,"./Script_Extensions/Mongolian.js":490,"./Script_Extensions/Mro.js":491,"./Script_Extensions/Multani.js":492,"./Script_Extensions/Myanmar.js":493,"./Script_Extensions/Nabataean.js":494,"./Script_Extensions/Nandinagari.js":495,"./Script_Extensions/New_Tai_Lue.js":496,"./Script_Extensions/Newa.js":497,"./Script_Extensions/Nko.js":498,"./Script_Extensions/Nushu.js":499,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":500,"./Script_Extensions/Ogham.js":501,"./Script_Extensions/Ol_Chiki.js":502,"./Script_Extensions/Old_Hungarian.js":503,"./Script_Extensions/Old_Italic.js":504,"./Script_Extensions/Old_North_Arabian.js":505,"./Script_Extensions/Old_Permic.js":506,"./Script_Extensions/Old_Persian.js":507,"./Script_Extensions/Old_Sogdian.js":508,"./Script_Extensions/Old_South_Arabian.js":509,"./Script_Extensions/Old_Turkic.js":510,"./Script_Extensions/Oriya.js":511,"./Script_Extensions/Osage.js":512,"./Script_Extensions/Osmanya.js":513,"./Script_Extensions/Pahawh_Hmong.js":514,"./Script_Extensions/Palmyrene.js":515,"./Script_Extensions/Pau_Cin_Hau.js":516,"./Script_Extensions/Phags_Pa.js":517,"./Script_Extensions/Phoenician.js":518,"./Script_Extensions/Psalter_Pahlavi.js":519,"./Script_Extensions/Rejang.js":520,"./Script_Extensions/Runic.js":521,"./Script_Extensions/Samaritan.js":522,"./Script_Extensions/Saurashtra.js":523,"./Script_Extensions/Sharada.js":524,"./Script_Extensions/Shavian.js":525,"./Script_Extensions/Siddham.js":526,"./Script_Extensions/SignWriting.js":527,"./Script_Extensions/Sinhala.js":528,"./Script_Extensions/Sogdian.js":529,"./Script_Extensions/Sora_Sompeng.js":530,"./Script_Extensions/Soyombo.js":531,"./Script_Extensions/Sundanese.js":532,"./Script_Extensions/Syloti_Nagri.js":533,"./Script_Extensions/Syriac.js":534,"./Script_Extensions/Tagalog.js":535,"./Script_Extensions/Tagbanwa.js":536,"./Script_Extensions/Tai_Le.js":537,"./Script_Extensions/Tai_Tham.js":538,"./Script_Extensions/Tai_Viet.js":539,"./Script_Extensions/Takri.js":540,"./Script_Extensions/Tamil.js":541,"./Script_Extensions/Tangut.js":542,"./Script_Extensions/Telugu.js":543,"./Script_Extensions/Thaana.js":544,"./Script_Extensions/Thai.js":545,"./Script_Extensions/Tibetan.js":546,"./Script_Extensions/Tifinagh.js":547,"./Script_Extensions/Tirhuta.js":548,"./Script_Extensions/Ugaritic.js":549,"./Script_Extensions/Vai.js":550,"./Script_Extensions/Wancho.js":551,"./Script_Extensions/Warang_Citi.js":552,"./Script_Extensions/Yezidi.js":553,"./Script_Extensions/Yi.js":554,"./Script_Extensions/Zanabazar_Square.js":555,"./index.js":556,"./unicode-version.js":557};function n(i){var s=e(i);return t(s)}function e(i){if(!t.o(r,i)){var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}return r[i]}n.keys=function(){return Object.keys(r)},n.resolve=e,i.exports=n,n.id=152},58:function(i,s,t){"use strict";t.r(s),t.d(s,"default",(function(){return p}));var r=t(0),n=t.n(r),e=t(62),a=t.n(e),o=t(566),c=t(567);function p(){return n.a.createElement("div",{className:a.a.examples},n.a.createElement("h2",{className:a.a.examplesTitle},"Domain"),n.a.createElement("div",{className:a.a.exampleContent},n.a.createElement("h3",null,"ENTITIES"),n.a.createElement("div",{className:a.a.exampleCode},n.a.createElement(c.b,{theme:o.a,code:"entity('Item', {\n  id: field(Number),\n  \n  isDone: field(Boolean, {\n    default: false\n  }),\n  \n  position: field(Number, { \n    validation: { presence: true } \n  }),\n\n  description: field(String, { \n    default: \"\", \n    validation: { presence: true, length: { minimum: 3 } }\n  })\n\n})\n\nentity('To Do List', {\n  id: field(Number),\n\n  name: field(String, {\n      validation: { presence: true, length: { minimum: 3 } }\n  }),\n\n  items: field([Item])\n\n  isDone() {\n    return this.items.length === this.items.filter(i => i.isDone).length\n  }\n  \n})\n"},n.a.createElement(c.a,{className:a.a.examplesEditor})))),n.a.createElement("div",{className:a.a.exampleContent},n.a.createElement("h3",null,"USE CASES"),n.a.createElement("div",{className:a.a.exampleCode},n.a.createElement(c.b,{theme:o.a,code:"usecase('Create List', {\n    // Input/Request fields and types\n    request: { name: String },\n\n    // Output/Response type\n    response: TodoList,\n\n    // Use case constructor\n    setup: ctx => (ctx.di = Object.assign({}, dependency, injection)),\n\n    // Authorization check and audit\n    authorize: user => (user.canCreateList ? Ok() : Err()),\n\n    // Steps description and audit\n    'Check if the List is valid': step(ctx => {\n      const list = ctx.list = new TodoList()\n      list.id = Math.floor(Math.random() * 100000)\n      list.name = ctx.req.name\n\n      if (!list.isValid()) return Err(list.errors)\n      return Ok()\n    }),\n\n    'Save the List': step(async ctx => {\n      const listRepo = new ctx.di.ListRepository(injection)\n      return (ctx.ret = await listRepo.insert(ctx.list))\n    }),\n  })\n"},n.a.createElement(c.a,{className:a.a.examplesEditor})))),n.a.createElement("div",{className:a.a.exampleArrow},n.a.createElement("img",{src:"img/arrow.png",alt:"down-arrow"})))}}}]);