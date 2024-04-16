import {
    _t,
    FieldSpecification,
    RapidAppContext,
    RapidComponent,
    RapidComponentState,
    RapidProps
} from "react-rapid-app";
import {Column, Row, Table, TableBody, TableCell, TableHead, TableRow, TextField} from "react-rapid-bootstrap";
import React from "react";
import "./../../assets/css/keyboard.css"


interface Props extends RapidProps {
}

class State extends RapidComponentState {
}

export default class TypeView extends RapidComponent<Props, State> {

    state: State = new State();
    static contextType = RapidAppContext

    static defaultProps = {}

    componentDidMount() {}

    fieldDefinition(field: FieldSpecification) {
        field.textArea({name: "type", label: _t("Type Text")})
        field.textArea({name: "jsKeyboard", label: _t("JS Keyboard")})
    }

    setArabicLetter(english: string, normal: string, shift: string) {
        return (
            <div className={"key one d-flex justify-content-center"}>
                <div className={"me-2"}>{english}</div>
                <div className={"d-flex flex-column arabic-font"}>
                    <div>{shift}</div>
                    <div>{normal}</div>
                </div>
            </div>
        )
    }

    getKeyboardView() {
        return (
            <div className="keyboard">

                <section className="key-row">
                    <div className="key one">~</div>
                    {this.setArabicLetter("1", "١", "")}
                    {this.setArabicLetter("2", "٢", "")}
                    {this.setArabicLetter("3", "٣", "")}
                    {this.setArabicLetter("4", "٤", "")}
                    {this.setArabicLetter("5", "٥", "")}
                    {this.setArabicLetter("6", "٦", "")}
                    {this.setArabicLetter("7", "٧", "")}
                    {this.setArabicLetter("8", "٨", "")}
                    {this.setArabicLetter("9", "٩", "")}
                    {this.setArabicLetter("0", "٠", "")}
                    <div className="key one">-</div>
                    <div className="key one">=</div>
                    <div className="key two">backspace</div>
                </section>

                <section className="key-row">
                    <div className="key one-one-half l">tab</div>
                    {this.setArabicLetter("q", "ة", "۝")}
                    {this.setArabicLetter("w", "ِ", "ٍ")}
                    {this.setArabicLetter("e", "ى", "آ")}
                    {this.setArabicLetter("r", "ر", "")}
                    {this.setArabicLetter("t", "ت", "ط")}
                    {this.setArabicLetter("y", "ع", "")}
                    {this.setArabicLetter("u", "ٳ", "أ")}
                    {this.setArabicLetter("i", "ي", "ئ")}
                    {this.setArabicLetter("o", "و", "ؤ")}
                    {this.setArabicLetter("p", "ُ", "ٌ")}
                    <div className="key one">[</div>
                    <div className="key one">]</div>
                    <div className="key one">\</div>
                </section>

                <section className="key-row">
                    <div className="key one-one-half l">search</div>
                    {this.setArabicLetter("a", "ا", "ء")}
                    {this.setArabicLetter("s", "س", "ش")}
                    {this.setArabicLetter("d", "د", "ض")}
                    {this.setArabicLetter("f", "ف", "")}
                    {this.setArabicLetter("g", "غ", "")}
                    {this.setArabicLetter("h", "ه", "ح")}
                    {this.setArabicLetter("j", "ج", "ذ")}
                    {this.setArabicLetter("k", "ك", "ق")}
                    {this.setArabicLetter("l", "ل", " ْ")}
                    {this.setArabicLetter(";", "", "")}
                    {this.setArabicLetter("'", "", "")}
                    <div className="key two r">enter</div>
                </section>

                <section className="key-row">
                    <div className="key two-two-half l">shift</div>
                    {this.setArabicLetter("z", "ز", "ظ")}
                    {this.setArabicLetter("x", "خ", "")}
                    {this.setArabicLetter("c", "ث", "ص")}
                    {this.setArabicLetter("v", "َ", "ً")}
                    {this.setArabicLetter("b", "ب", "ٰ")}
                    {this.setArabicLetter("n", "ن", "ٖ")}
                    {this.setArabicLetter("m", "م", "ٗ")}
                    <div className="key one">&lt;</div>
                    <div className="key one">&gt;</div>
                    <div className="key one">/</div>
                    <div className="key two-two-half r">shift</div>
                </section>

                <section className="key-row">
                    <div className="key two l">ctrl</div>
                    <div className="key two l">alt</div>
                    <div className="key five">Spacebar</div>
                    <div className="key one-one-half">alt</div>
                    <div className="key one">ctrl</div>
                    <div className="arrowkey-container two-two-half">

                    </div>
                </section>

            </div>
        )
    }

    getKeyboardKeyMapping() {
        return(
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell>Arabic</TableCell>
                        <TableCell>Key</TableCell>
                        <TableCell>Arabic</TableCell>
                        <TableCell>Key</TableCell>
                        <TableCell>Arabic</TableCell>
                        <TableCell>Key</TableCell>
                        <TableCell>Arabic</TableCell>
                        <TableCell>Key</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell className={"arabic-font-tr"}>ا</TableCell><TableCell>A</TableCell>
                        <TableCell className={"arabic-font-tr"}>ط</TableCell><TableCell>Shift + T</TableCell>
                        <TableCell className={"arabic-font-tr"}>ة</TableCell><TableCell>Q</TableCell>
                        <TableCell className={"arabic-font-tr"}>ٳ</TableCell><TableCell>U</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={"arabic-font-tr"}>ب</TableCell><TableCell>B</TableCell>
                        <TableCell className={"arabic-font-tr"}>ظ</TableCell><TableCell>Shift + Z</TableCell>
                        <TableCell className={"arabic-font-tr"}>۝</TableCell><TableCell>Shift + Q</TableCell>
                        <TableCell className={"arabic-font-tr"}>أ</TableCell><TableCell>Shift + U</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={"arabic-font-tr"}>ت</TableCell><TableCell>T</TableCell>
                        <TableCell className={"arabic-font-tr"}>ع</TableCell><TableCell>Y</TableCell>
                        <TableCell className={"arabic-font-tr"}>َ</TableCell><TableCell>V</TableCell>
                        <TableCell className={"arabic-font-tr"}>آ</TableCell><TableCell>Shift + E</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={"arabic-font-tr"}>ث</TableCell><TableCell>C</TableCell>
                        <TableCell className={"arabic-font-tr"}>غ</TableCell><TableCell>G</TableCell>
                        <TableCell className={"arabic-font-tr"}>ً</TableCell><TableCell>Shift + V</TableCell>
                        <TableCell className={"arabic-font-tr"}>ئ</TableCell><TableCell>Shift + I</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={"arabic-font-tr"}>ج</TableCell><TableCell>J</TableCell>
                        <TableCell className={"arabic-font-tr"}>ف</TableCell><TableCell>F</TableCell>
                        <TableCell className={"arabic-font-tr"}>ِ</TableCell><TableCell>W</TableCell>
                        <TableCell className={"arabic-font-tr"}></TableCell><TableCell></TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={"arabic-font-tr"}>ح</TableCell><TableCell>H</TableCell>
                        <TableCell className={"arabic-font-tr"}>ق</TableCell><TableCell>K</TableCell>
                        <TableCell className={"arabic-font-tr"}>ٍ</TableCell><TableCell>Shift + W</TableCell>
                        <TableCell className={"arabic-font-tr"}></TableCell><TableCell></TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={"arabic-font-tr"}>خ</TableCell><TableCell>X</TableCell>
                        <TableCell className={"arabic-font-tr"}>ك</TableCell><TableCell>Shift + K</TableCell>
                        <TableCell className={"arabic-font-tr"}>ُ</TableCell><TableCell>P</TableCell>
                        <TableCell className={"arabic-font-tr"}></TableCell><TableCell></TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={"arabic-font-tr"}>د</TableCell><TableCell>D</TableCell>
                        <TableCell className={"arabic-font-tr"}>ل</TableCell><TableCell>L</TableCell>
                        <TableCell className={"arabic-font-tr"}>ٌ</TableCell><TableCell>Shift + P</TableCell>
                        <TableCell className={"arabic-font-tr"}></TableCell><TableCell></TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={"arabic-font-tr"}>ذ</TableCell><TableCell>Shift + J</TableCell>
                        <TableCell className={"arabic-font-tr"}>م</TableCell><TableCell>M</TableCell>
                        <TableCell className={"arabic-font-tr"}>ٰ</TableCell><TableCell>Shift + B</TableCell>
                        <TableCell className={"arabic-font-tr"}></TableCell><TableCell></TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={"arabic-font-tr"}>ر</TableCell><TableCell>R</TableCell>
                        <TableCell className={"arabic-font-tr"}>ن</TableCell><TableCell>N</TableCell>
                        <TableCell className={"arabic-font-tr"}>ٖ</TableCell><TableCell>Shift + N</TableCell>
                        <TableCell className={"arabic-font-tr"}></TableCell><TableCell></TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={"arabic-font-tr"}>ز</TableCell><TableCell>Z</TableCell>
                        <TableCell className={"arabic-font-tr"}>و</TableCell><TableCell>O</TableCell>
                        <TableCell className={"arabic-font-tr"}>ٗ</TableCell><TableCell>Shift + M</TableCell>
                        <TableCell className={"arabic-font-tr"}></TableCell><TableCell></TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={"arabic-font-tr"}>س</TableCell><TableCell>S</TableCell>
                        <TableCell className={"arabic-font-tr"}>ه</TableCell><TableCell>Shift + H</TableCell>
                        <TableCell className={"arabic-font-tr"}> ْ</TableCell><TableCell>Shift + L</TableCell>
                        <TableCell className={"arabic-font-tr"}></TableCell><TableCell></TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={"arabic-font-tr"}>ش</TableCell><TableCell>Shift + S</TableCell>
                        <TableCell className={"arabic-font-tr"}>ء</TableCell><TableCell>Shift + A</TableCell>
                        <TableCell className={"arabic-font-tr"}> ٓ</TableCell><TableCell>Shift + G</TableCell>
                        <TableCell className={"arabic-font-tr"}></TableCell><TableCell></TableCell>

                    </TableRow>

                    <TableRow>
                        <TableCell className={"arabic-font-tr"}>ص</TableCell><TableCell>Shift + C</TableCell>
                        <TableCell className={"arabic-font-tr"}>ي</TableCell><TableCell>I</TableCell>
                        <TableCell className={"arabic-font-tr"}></TableCell><TableCell></TableCell>
                        <TableCell className={"arabic-font-tr"}></TableCell><TableCell></TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={"arabic-font-tr"}>ض</TableCell><TableCell>Shift + D</TableCell>
                        <TableCell className={"arabic-font-tr"}>ى</TableCell><TableCell>E</TableCell>
                        <TableCell className={"arabic-font-tr"}></TableCell><TableCell></TableCell>
                        <TableCell className={"arabic-font-tr"}></TableCell><TableCell></TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        )
    }

    renderUI() {
        const _this = this;
        return (
            <Row className={"arabic"}>
                <Column spanMedium={12}>
                    {this.getKeyboardView()}
                </Column>
                <TextField {...this.setupFieldAttrs("type")} addWrapperClass={"col-md-12"}/>
                {_this.getKeyboardKeyMapping()}
                <TextField {...this.setupFieldAttrs("jsKeyboard")} addWrapperClass={"col-md-12"}/>
            </Row>
        )
    }
}