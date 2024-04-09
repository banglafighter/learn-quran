import {RapidAppContext, RapidComponent, RapidComponentState, RapidProps, RapidUtil, React} from "react-rapid-app";
import {Button, Table, TableBody, TableCell, TableHead, TableRow} from "react-rapid-bootstrap";
import alif from "../../assets/audio/alphabet/alif.mp3"
import ba from "../../assets/audio/alphabet/ba.mp3"
import ta from "../../assets/audio/alphabet/ta.mp3"
import sa from "../../assets/audio/alphabet/sa.mp3"
import jim from "../../assets/audio/alphabet/jim.mp3"
import ha from "../../assets/audio/alphabet/ha.mp3"
import kh from "../../assets/audio/alphabet/kh.mp3"
import ea from "../../assets/audio/alphabet/ea.mp3"
import oyao from "../../assets/audio/alphabet/oyao.mp3"
import haa from "../../assets/audio/alphabet/haa.mp3"
import nun from "../../assets/audio/alphabet/nun.mp3"
import mim from "../../assets/audio/alphabet/mim.mp3"
import lam from "../../assets/audio/alphabet/lam.mp3"
import kaf from "../../assets/audio/alphabet/kaf.mp3"
import kof from "../../assets/audio/alphabet/kof.mp3"
import fa from "../../assets/audio/alphabet/fa.mp3"
import goen from "../../assets/audio/alphabet/goen.mp3"
import aen from "../../assets/audio/alphabet/aen.mp3"
import jo from "../../assets/audio/alphabet/jo.mp3"
import to from "../../assets/audio/alphabet/to.mp3"
import dot from "../../assets/audio/alphabet/dot.mp3"
import sod from "../../assets/audio/alphabet/sod.mp3"
import shin from "../../assets/audio/alphabet/shin.mp3"
import sin from "../../assets/audio/alphabet/sin.mp3"
import ja from "../../assets/audio/alphabet/ja.mp3"
import ro from "../../assets/audio/alphabet/ro.mp3"
import jal from "../../assets/audio/alphabet/jal.mp3"
import dal from "../../assets/audio/alphabet/dal.mp3"


interface Props extends RapidProps {
}

class State extends RapidComponentState {
    selectedRow: any
    isStarted: boolean = false
    payAllButtonLabel: any = "Play All"
}

export default class AlphabetView extends RapidComponent<Props, State> {

    state: State = new State();
    static contextType = RapidAppContext

    static defaultProps = {}

    constructor(props: Props) {
        super(props);
    }

    getData() {
        return [
            {final: "ـأ", middle: "ـأ", initial: "أ", isolated: "أ", audio: alif},
            {final: "ﺐ", middle: "ـبـ", initial: "بـ", isolated: "ب", audio: ba},
            {final: "ﺖ", middle: "ـتـ", initial: "تـ", isolated: "ت", audio: ta},
            {final: "ـث", middle: "ـثـ", initial: "ﺛ", isolated: "ث", audio: sa},
            {final: "ـج", middle: "ـجـ", initial: "جـ", isolated: "ج", audio: jim},
            {final: "ـح", middle: "ـحـ", initial: "حـ", isolated: "ح", audio: ha},
            {final: "ـخ", middle: "ـخـ", initial: "خـ", isolated: "خ", audio: kh},
            {final: "ـد", middle: "ـد", initial: "د", isolated: "د", audio: dal},
            {final: "ـذ", middle: "ـذ", initial: "ذ", isolated: "ذ", audio: jal},
            {final: "ـر", middle: "ـر", initial: "ر", isolated: "ر", audio: ro},
            {final: "ـز", middle: "ـز", initial: "ز", isolated: "ز", audio: ja},
            {final: "ـس", middle: "ـسـ", initial: "سـ", isolated: "س", audio: sin},
            {final: "ـش", middle: "ـشـ", initial: "شـ", isolated: "ش", audio: shin},
            {final: "ـص", middle: "ـصـ", initial: "صـ", isolated: "ص", audio: sod},
            {final: "ـض", middle: "ـضـ", initial: "ضـ", isolated: "ض", audio: dot},
            {final: "ـط", middle: "ﻄ", initial: "طـ", isolated: "ط", audio: to},
            {final: "ـظ", middle: "ـظـ", initial: "ظـ", isolated: "ظ", audio: jo},
            {final: "ـع", middle: "ـعـ", initial: "عـ", isolated: "ع", audio: aen},
            {final: "ـغ", middle: "ـغـ", initial: "غـ", isolated: "غ", audio: goen},
            {final: "ـف", middle: "ـفـ", initial: "فـ", isolated: "ف", audio: fa},
            {final: "ـق", middle: "ـقـ", initial: "قـ", isolated: "ق", audio: kof},
            {final: "ـك", middle: "ـكـ", initial: "كـ", isolated: "ك", audio: kaf},
            {final: "ـل", middle: "ـلـ", initial: "لـ", isolated: "ل", audio: lam},
            {final: "ـم", middle: "ـمـ", initial: "مـ", isolated: "م", audio: mim},
            {final: "ـن", middle: "ـنـ", initial: "نـ", isolated: "ن", audio: nun},
            {final: "ـه", middle: "ـهـ", initial: "هـ", isolated: "ہ", audio: haa},
            {final: "ـو", middle: "ـو", initial: "و", isolated: "و", audio: oyao},
            {final: "ي", middle: "ـيـ", initial: "يـ", isolated: "ي", audio: ea},
        ]
    }

    playAudio(index: any, startText?: any, stopText?: any) {
        const _this = this
        let data: any = this.getData()
        _this.setState({selectedRow: index})
        if (data.length > index && this.state.isStarted) {
            _this.setState({payAllButtonLabel: stopText})
            if (data[index].audio !== "" && data[index].audio) {
                let audio: any = new Audio(data[index].audio)
                audio.onended = () => {
                    _this.playAudio(index + 1, startText, stopText)
                }
                audio.play()
            } else {
                _this.playAudio(index + 1, startText, stopText)
            }
        } else {
            _this.setState({payAllButtonLabel: startText, isStarted: false, selectedRow: -1})
        }
    }

    renderUI() {
        const _this = this;

        return (
            <div>
                <div className={"top-action mb-2 m-2 d-flex flex-row-reverse"}>
                    <div className="btn-group" role="group">
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.state.isStarted = !this.state.isStarted
                                this.playAudio(0, "Play All", "Stop")
                            }}
                        >
                            {this.state.payAllButtonLabel}
                        </button>
                    </div>
                </div>
                <Table className={"text-center"} variant={"bordered"} isHoverEffectInRow={true}>
                    <TableHead>
                        <TableRow>
                            <th colSpan={3}>Different Form</th>
                            <th rowSpan={2}>Isolated Form</th>
                            <th rowSpan={2}>Play</th>
                        </TableRow>
                        <TableRow>
                            <th>Final</th>
                            <th>Middle</th>
                            <th>Initial</th>
                        </TableRow>
                    </TableHead>
                    <TableBody className={"majeed-quranic"}>
                        {this.getData().map((row: any, index: any) => (
                            <TableRow key={index} className={_this.state.selectedRow === index ? "table-secondary" : ""}>
                                <TableCell>{row.final}</TableCell>
                                <TableCell>{row.middle}</TableCell>
                                <TableCell>{row.initial}</TableCell>
                                <TableCell>{row.isolated}</TableCell>
                                <TableCell>
                                    <Button onClick={()=>{
                                        let audio: any = new Audio(row.audio)
                                        audio.play()
                                    }}>Play</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        )
    }
}