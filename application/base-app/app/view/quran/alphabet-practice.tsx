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
    randomTableRow: any
}

export default class AlphabetPracticeView extends RapidComponent<Props, State> {

    state: State = new State();
    static contextType = RapidAppContext

    static defaultProps = {}
    randomData: any
    currentlyPlayingIndex: any = 0
    tableItemPerRow: any = 5
    totalDataLength: any = 0

    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        this.generateRandomTableRow()
    }

    getData() {
        return [
            {letter: "أ", audio: alif},
            {letter: "ـأ", audio: alif},

            {letter: "ب", audio: ba},
            {letter: "بـ", audio: ba},
            {letter: "ـبـ", audio: ba},
            {letter: "ﺐ", audio: ba},

            {letter: "ت", audio: ta},
            {letter: "تـ", audio: ta},
            {letter: "ـتـ", audio: ta},
            {letter: "ﺖ", audio: ta},

            {letter: "ث", audio: sa},
            {letter: "ﺛ", audio: sa},
            {letter: "ـثـ", audio: sa},
            {letter: "ـث", audio: sa},

            {letter: "ج", audio: jim},
            {letter: "جـ", audio: jim},
            {letter: "ـجـ", audio: jim},
            {letter: "ـج", audio: jim},

            {letter: "ح", audio: ha},
            {letter: "حـ", audio: ha},
            {letter: "ـحـ", audio: ha},
            {letter: "ـح", audio: ha},

            {letter: "خ", audio: kh},
            {letter: "خـ", audio: kh},
            {letter: "ـخـ", audio: kh},
            {letter: "ـخ", audio: kh},

            {letter: "د", audio: dal},
            {letter: "ـد", audio: dal},

            {letter: "ذ", audio: jal},
            {letter: "ـذ", audio: jal},

            {letter: "ر", audio: ro},
            {letter: "ـر", audio: ro},

            {letter: "ز", audio: ja},
            {letter: "ـز", audio: ja},

            {letter: "س", audio: sin},
            {letter: "سـ", audio: sin},
            {letter: "ـسـ", audio: sin},
            {letter: "ـس", audio: sin},

            {letter: "ش", audio: shin},
            {letter: "شـ", audio: shin},
            {letter: "ـشـ", audio: shin},
            {letter: "ـش", audio: shin},

            {letter: "ص", audio: sod},
            {letter: "صـ", audio: sod},
            {letter: "ـصـ", audio: sod},
            {letter: "ـص", audio: sod},

            {letter: "ض", audio: dot},
            {letter: "ضـ", audio: dot},
            {letter: "ـضـ", audio: dot},
            {letter: "ـض", audio: dot},

            {letter: "ط", audio: to},
            {letter: "طـ", audio: to},
            {letter: "ﻄ", audio: to},
            {letter: "ـط", audio: to},

            {letter: "ظ", audio: jo},
            {letter: "ظـ", audio: jo},
            {letter: "ـظـ", audio: jo},
            {letter: "ـظ", audio: jo},

            {letter: "ع", audio: aen},
            {letter: "عـ", audio: aen},
            {letter: "ـعـ", audio: aen},
            {letter: "ـع", audio: aen},

            {letter: "غ", audio: goen},
            {letter: "غـ", audio: goen},
            {letter: "ـغـ", audio: goen},
            {letter: "ـغ", audio: goen},

            {letter: "ف", audio: fa},
            {letter: "فـ", audio: fa},
            {letter: "ـفـ", audio: fa},
            {letter: "ـف", audio: fa},

            {letter: "ق", audio: kof},
            {letter: "ق", audio: kof},
            {letter: "ـقـ", audio: kof},
            {letter: "ـق", audio: kof},

            {letter: "ك", audio: kaf},
            {letter: "كـ", audio: kaf},
            {letter: "ـكـ", audio: kaf},
            {letter: "ـك", audio: kaf},

            {letter: "ل", audio: lam},
            {letter: "لـ", audio: lam},
            {letter: "ـلـ", audio: lam},
            {letter: "ـل", audio: lam},

            {letter: "م", audio: mim},
            {letter: "مـ", audio: mim},
            {letter: "ـمـ", audio: mim},
            {letter: "ـم", audio: mim},

            {letter: "ن", audio: nun},
            {letter: "نـ", audio: nun},
            {letter: "ـنـ", audio: nun},
            {letter: "ـن", audio: nun},

            {letter: "ہ", audio: haa},
            {letter: "هـ", audio: haa},
            {letter: "ـهـ", audio: haa},
            {letter: "ـه", audio: haa},

            {letter: "و", audio: oyao},
            {letter: "ـو", audio: oyao},

            {letter: "ي", audio: ea},
            {letter: "يـ", audio: ea},
            {letter: "ـيـ", audio: ea},
        ]
    }

    playAudio(index: any, startText?: any, stopText?: any) {
        const _this = this
        let data: any = this.randomData
        if (!data) {
            return
        }
        let itemPerRowWithZeroCount: any = _this.tableItemPerRow - 1
        if (index < (this.currentlyPlayingIndex - itemPerRowWithZeroCount) || index === undefined) {
            if (this.currentlyPlayingIndex >= this.totalDataLength) {
                _this.setState({payAllButtonLabel: startText, isStarted: false, selectedRow: -1})
                return;
            }
            index = this.currentlyPlayingIndex + itemPerRowWithZeroCount
            if (index >= this.totalDataLength) {
                index = this.totalDataLength - 1
            }
        }
        this.currentlyPlayingIndex++
        _this.setState({selectedRow: index})
        if (data.length > index && this.state.isStarted) {
            _this.setState({payAllButtonLabel: stopText})
            if (data[index].audio !== "" && data[index].audio) {
                let audio: any = new Audio(data[index].audio)
                audio.onended = () => {
                    _this.playAudio(index - 1, startText, stopText)
                }
                audio.play()
            } else {
                _this.playAudio(index - 1, startText, stopText)
            }
        } else {
            _this.setState({payAllButtonLabel: startText, isStarted: false, selectedRow: -1})
        }
    }

    generateRandomTableRow() {
        const _this = this;
        _this.randomData = _this.getData().sort(() => Math.random() - 0.5)
        this.notifyComponentChange()
    }

    getTableRowHTML(){
        const _this = this;
        if (!_this.randomData) {
            return
        }
        let rowHTML: any = []
        let data: any = _this.randomData
        let itemPerRow: any = _this.tableItemPerRow
        let totalData: any = _this.totalDataLength = data.length
        let numberOfRow: any = Math.ceil(totalData / itemPerRow)
        for (let row = 0; row <= numberOfRow; row++) {
            let maxRunRow: any = (row * itemPerRow) + itemPerRow
            if (maxRunRow > totalData) {
                maxRunRow = totalData
            }
            let cellHTML: any = []
            let itemIndex: any = row * itemPerRow
            for (; itemIndex < maxRunRow; itemIndex++) {
                let dataItem: any = data[itemIndex]
                cellHTML.push(
                    <TableCell key={itemIndex} className={_this.state.selectedRow === itemIndex ? "table-secondary text-center" : "text-center"}>
                        {dataItem.letter}
                        <Button
                            onClick={() => {
                                let audio: any = new Audio(dataItem.audio)
                                audio.play()
                            }}
                            viewSize={"small"}
                            className={"ms-3 text-success"}
                            variant={"light"}>
                            <i className="fa-solid fa-play"></i>
                        </Button>
                    </TableCell>
                )
            }
            rowHTML.push(
                <TableRow key={itemIndex}>{cellHTML}</TableRow>
            )
        }
        return rowHTML;
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
                                this.currentlyPlayingIndex = 0
                                this.playAudio( undefined, "Play All", "Stop")
                            }}
                        >
                            {this.state.payAllButtonLabel}
                        </button>
                    </div>
                </div>
                <Table className={"text-center"} variant={"bordered"}>
                    <TableBody className={"majeed-quranic"}>
                        {_this.getTableRowHTML()}
                    </TableBody>
                </Table>
            </div>
        )
    }
}