import {
    _t,
    FieldSpecification,
    RapidAppContext,
    RapidComponent,
    RapidComponentState,
    RapidProps
} from "react-rapid-app";
import {Column, Row, TextField} from "react-rapid-bootstrap";
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
    }

    setArabicLetter(english: string, normal: string, shift: string) {
        return (
            <div className={"key one d-flex justify-content-center"}>
                <div className={"me-2"}>{english}</div>
                <div className={"d-flex flex-column arabic-font"}>
                    <div>{normal}</div>
                    <div>{shift}</div>
                </div>
            </div>
        )
    }

    getKeyboardView() {
        return (
            <div className="keyboard">

                <section className="key-row">
                    <div className="key one">~</div>
                    {this.setArabicLetter("1", "١", "َ")}
                    {this.setArabicLetter("2", "٢", "ِ")}
                    {this.setArabicLetter("3", "٣", "ُ")}
                    {this.setArabicLetter("4", "٤", "ً ")}
                    {this.setArabicLetter("5", "٥", "ٍ ")}
                    {this.setArabicLetter("6", "٦", "ٌ")}
                    {this.setArabicLetter("7", "٧", "ٰ")}
                    {this.setArabicLetter("8", "٨", "ٖ")}
                    {this.setArabicLetter("9", "٩", "ٗ")}
                    {this.setArabicLetter("0", "٠", "۝")}
                    <div className="key one">-</div>
                    <div className="key one">=</div>
                    <div className="key two">backspace</div>
                </section>

                <section className="key-row">
                    <div className="key one-one-half l">tab</div>
                    {this.setArabicLetter("q", "ة", "")}
                    {this.setArabicLetter("w", "ّ", "")}
                    {this.setArabicLetter("e", "ى", "آ")}
                    {this.setArabicLetter("r", "ر", "")}
                    {this.setArabicLetter("t", "ت", "ط")}
                    {this.setArabicLetter("y", "ع", "")}
                    {this.setArabicLetter("u", "ٳ", "أ")}
                    {this.setArabicLetter("i", "ي", "ئ")}
                    {this.setArabicLetter("o", "و", "ؤ")}
                    {this.setArabicLetter("p", "ٓ", "")}
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
                    {this.setArabicLetter("l", "ل", "")}
                    {this.setArabicLetter(";", "", "")}
                    {this.setArabicLetter("'", "", "")}
                    <div className="key two r">enter</div>
                </section>

                <section className="key-row">
                    <div className="key two-two-half l">shift</div>
                    {this.setArabicLetter("z", "ز", "ظ")}
                    {this.setArabicLetter("x", "خ", "")}
                    {this.setArabicLetter("c", "ث", "ص")}
                    {this.setArabicLetter("v", "ْ", "")}
                    {this.setArabicLetter("b", "ب", "")}
                    {this.setArabicLetter("n", "ن", "")}
                    {this.setArabicLetter("m", "م", "")}
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

    renderUI() {
        const _this = this;
        return (
            <Row className={"arabic"}>
                <Column spanMedium={12}>
                    {this.getKeyboardView()}
                </Column>
                <TextField {...this.setupFieldAttrs("type")} addWrapperClass={"col-md-12"}/>
            </Row>
        )
    }
}