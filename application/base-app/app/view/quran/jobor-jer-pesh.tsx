import {RapidAppContext, RapidComponent, RapidComponentState, RapidProps, RapidUtil, React} from "react-rapid-app";
import {Button, Table, TableBody, TableCell, TableHead, TableRow} from "react-rapid-bootstrap";
import zimAenLam from "../../assets/audio/alphabet/concat/zim-aen-lam.mp3"
import alifFS from "../../assets/audio/fathah/single/alif-fs.mp3"
import baFS from "../../assets/audio/fathah/single/ba-fs.mp3"
import taFS from "../../assets/audio/fathah/single/ta-fs.mp3"
import saFS from "../../assets/audio/fathah/single/sa-fs.mp3"
import jimFS from "../../assets/audio/fathah/single/jim-fs.mp3"
import haFS from "../../assets/audio/fathah/single/ha-fs.mp3"
import khFS from "../../assets/audio/fathah/single/kh-fs.mp3"
import dalFS from "../../assets/audio/fathah/single/dal-fs.mp3"
import jalFS from "../../assets/audio/fathah/single/jal-fs.mp3"
import roFS from "../../assets/audio/fathah/single/ro-fs.mp3"
import jhaFS from "../../assets/audio/fathah/single/jha-fs.mp3"
import sinFS from "../../assets/audio/fathah/single/sin-fs.mp3"
import shinFS from "../../assets/audio/fathah/single/shin-fs.mp3"
import sodFS from "../../assets/audio/fathah/single/sod-fs.mp3"
import dodFS from "../../assets/audio/fathah/single/dod-fs.mp3"
import toFS from "../../assets/audio/fathah/single/to-fs.mp3"
import joFS from "../../assets/audio/fathah/single/jo-fs.mp3"
import aenFS from "../../assets/audio/fathah/single/aen-fs.mp3"
import gaenFS from "../../assets/audio/fathah/single/gaen-fs.mp3"
import faFS from "../../assets/audio/fathah/single/fa-fs.mp3"
import kofFS from "../../assets/audio/fathah/single/kof-fs.mp3"
import kafFS from "../../assets/audio/fathah/single/kaf-fs.mp3"
import lamFS from "../../assets/audio/fathah/single/lam-fs.mp3"
import mimFS from "../../assets/audio/fathah/single/mim-fs.mp3"
import nunFS from "../../assets/audio/fathah/single/nun-fs.mp3"
import owaoFS from "../../assets/audio/fathah/single/owao-fs.mp3"
import haaFS from "../../assets/audio/fathah/single/haa-fs.mp3"
import hamjaFS from "../../assets/audio/fathah/single/hamja-fs.mp3"
import eaFS from "../../assets/audio/fathah/single/ea-fs.mp3"

import alifKS from "../../assets/audio/kasrah/single/alif-ks.mp3"
import baKS from "../../assets/audio/kasrah/single/ba-ks.mp3"
import taKS from "../../assets/audio/kasrah/single/ta-ks.mp3"
import saKS from "../../assets/audio/kasrah/single/sa-ks.mp3"
import jimKS from "../../assets/audio/kasrah/single/jim-ks.mp3"
import haKS from "../../assets/audio/kasrah/single/ha-ks.mp3"
import khKS from "../../assets/audio/kasrah/single/kh-ks.mp3"
import dalKS from "../../assets/audio/kasrah/single/dal-ks.mp3"
import jalKS from "../../assets/audio/kasrah/single/jal-ks.mp3"
import roKS from "../../assets/audio/kasrah/single/ro-ks.mp3"
import jhaKS from "../../assets/audio/kasrah/single/jha-ks.mp3"
import sinKS from "../../assets/audio/kasrah/single/sin-ks.mp3"
import shinKS from "../../assets/audio/kasrah/single/shin-ks.mp3"
import sodKS from "../../assets/audio/kasrah/single/sod-ks.mp3"
import dodKS from "../../assets/audio/kasrah/single/dod-ks.mp3"
import toKS from "../../assets/audio/kasrah/single/to-ks.mp3"
import joKS from "../../assets/audio/kasrah/single/jo-ks.mp3"
import aenKS from "../../assets/audio/kasrah/single/aen-ks.mp3"
import gaenKS from "../../assets/audio/kasrah/single/gaen-ks.mp3"
import faKS from "../../assets/audio/kasrah/single/fa-ks.mp3"
import kofKS from "../../assets/audio/kasrah/single/kof-ks.mp3"
import kafKS from "../../assets/audio/kasrah/single/kaf-ks.mp3"
import lamKS from "../../assets/audio/kasrah/single/lam-ks.mp3"
import mimKS from "../../assets/audio/kasrah/single/mim-ks.mp3"
import nunKS from "../../assets/audio/kasrah/single/nun-ks.mp3"
import owaoKS from "../../assets/audio/kasrah/single/owao-ks.mp3"
import haaKS from "../../assets/audio/kasrah/single/haa-ks.mp3"
import hamjaKS from "../../assets/audio/kasrah/single/hamja-ks.mp3"
import eaKS from "../../assets/audio/kasrah/single/ea-ks.mp3"


interface Props extends RapidProps {
}

class State extends RapidComponentState {
    selectedRow: any
    isStarted: boolean = false
    payAllButtonLabel: any = "Play All"
}

export default class JoborJerPeshView extends RapidComponent<Props, State> {

    state: State = new State();
    static contextType = RapidAppContext

    static defaultProps = {}
    randomData: any
    currentlyPlayingIndex: any = 0
    tableItemPerRow: any = 6
    totalDataLength: any = 0

    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        this.generateRandomTableRow()
    }

    getData() {
        return [
            {letter: "اٌ", audio: zimAenLam},
            {letter: "اٍ", audio: zimAenLam},
            {letter: "اً", audio: zimAenLam},
            {letter: "اُ", audio: zimAenLam},
            {letter: "اِ", audio: alifKS},
            {letter: "اَ", audio: alifFS},

            {letter: "بٌ", audio: zimAenLam},
            {letter: "بٍ", audio: zimAenLam},
            {letter: "بً", audio: zimAenLam},
            {letter: "بُ", audio: zimAenLam},
            {letter: "بِ", audio: baKS},
            {letter: "بَ", audio: baFS},

            {letter: "تٌ", audio: zimAenLam},
            {letter: "تٍ", audio: zimAenLam},
            {letter: "تً", audio: zimAenLam},
            {letter: "تُ", audio: zimAenLam},
            {letter: "تِ", audio: taKS},
            {letter: "تَ", audio: taFS},

            {letter: "ثٌ", audio: zimAenLam},
            {letter: "ثٍ", audio: zimAenLam},
            {letter: "ثً", audio: zimAenLam},
            {letter: "ثُ", audio: zimAenLam},
            {letter: "ثِ", audio: saKS},
            {letter: "ثَ", audio: saFS},

            {letter: "جٌ", audio: zimAenLam},
            {letter: "جٍ", audio: zimAenLam},
            {letter: "جً", audio: zimAenLam},
            {letter: "جُ", audio: zimAenLam},
            {letter: "جِ", audio: jimKS},
            {letter: "جَ", audio: jimFS},

            {letter: "حٌ", audio: zimAenLam},
            {letter: "حٍ", audio: zimAenLam},
            {letter: "حً", audio: zimAenLam},
            {letter: "حُ", audio: zimAenLam},
            {letter: "حِ", audio: haKS},
            {letter: "حَ", audio: haFS},

            {letter: "خٌ", audio: zimAenLam},
            {letter: "خٍ", audio: zimAenLam},
            {letter: "خً", audio: zimAenLam},
            {letter: "خُ", audio: zimAenLam},
            {letter: "خِ", audio: khKS},
            {letter: "خَ", audio: khFS},

            {letter: "دٌ", audio: zimAenLam},
            {letter: "دٍ", audio: zimAenLam},
            {letter: "دً", audio: zimAenLam},
            {letter: "دُ", audio: zimAenLam},
            {letter: "دِ", audio: dalKS},
            {letter: "دَ", audio: dalFS},

            {letter: "ذٌ", audio: zimAenLam},
            {letter: "ذٍ", audio: zimAenLam},
            {letter: "ذً", audio: zimAenLam},
            {letter: "ذُ", audio: zimAenLam},
            {letter: "ذِ", audio: jalKS},
            {letter: "ذَ", audio: jalFS},

            {letter: "رٌ", audio: zimAenLam},
            {letter: "رٍ", audio: zimAenLam},
            {letter: "رً", audio: zimAenLam},
            {letter: "رُ", audio: zimAenLam},
            {letter: "رِ", audio: roKS},
            {letter: "رَ", audio: roFS},

            {letter: "زٌ", audio: zimAenLam},
            {letter: "زٍ", audio: zimAenLam},
            {letter: "زً", audio: zimAenLam},
            {letter: "زُ", audio: zimAenLam},
            {letter: "زِ", audio: jhaKS},
            {letter: "زَ", audio: jhaFS},

            {letter: "سٌ", audio: zimAenLam},
            {letter: "سٍ", audio: zimAenLam},
            {letter: "سً", audio: zimAenLam},
            {letter: "سُ", audio: zimAenLam},
            {letter: "سِ", audio: sinKS},
            {letter: "سَ", audio: sinFS},

            {letter: "شٌ", audio: zimAenLam},
            {letter: "شٍ", audio: zimAenLam},
            {letter: "شً", audio: zimAenLam},
            {letter: "شُ", audio: zimAenLam},
            {letter: "شِ", audio: shinKS},
            {letter: "شَ", audio: shinFS},

            {letter: "صٌ", audio: zimAenLam},
            {letter: "صٍ", audio: zimAenLam},
            {letter: "صً", audio: zimAenLam},
            {letter: "صُ", audio: zimAenLam},
            {letter: "صِ", audio: sodKS},
            {letter: "صَ", audio: sodFS},

            {letter: "ضٌ", audio: zimAenLam},
            {letter: "ضٍ", audio: zimAenLam},
            {letter: "ضً", audio: zimAenLam},
            {letter: "ضُ", audio: zimAenLam},
            {letter: "ضِ", audio: dodKS},
            {letter: "ضَ", audio: dodFS},

            {letter: "طٌ", audio: zimAenLam},
            {letter: "طٍ", audio: zimAenLam},
            {letter: "طً", audio: zimAenLam},
            {letter: "طُ", audio: zimAenLam},
            {letter: "طِ", audio: toKS},
            {letter: "طَ", audio: toFS},

            {letter: "ظٌ", audio: zimAenLam},
            {letter: "ظٍ", audio: zimAenLam},
            {letter: "ظً", audio: zimAenLam},
            {letter: "ظُ", audio: zimAenLam},
            {letter: "ظِ", audio: joKS},
            {letter: "ظَ", audio: joFS},

            {letter: "عٌ", audio: zimAenLam},
            {letter: "عٍ", audio: zimAenLam},
            {letter: "عً", audio: zimAenLam},
            {letter: "عُ", audio: zimAenLam},
            {letter: "عِ", audio: aenKS},
            {letter: "عَ", audio: aenFS},

            {letter: "غٌ", audio: zimAenLam},
            {letter: "غٍ", audio: zimAenLam},
            {letter: "غً", audio: zimAenLam},
            {letter: "غُ", audio: zimAenLam},
            {letter: "غِ", audio: gaenKS},
            {letter: "غَ", audio: gaenFS},

            {letter: "فٌ", audio: zimAenLam},
            {letter: "فٍ", audio: zimAenLam},
            {letter: "فً", audio: zimAenLam},
            {letter: "فُ", audio: zimAenLam},
            {letter: "فِ", audio: faKS},
            {letter: "فَ", audio: faFS},

            {letter: "قٌ", audio: zimAenLam},
            {letter: "قٍ", audio: zimAenLam},
            {letter: "قً", audio: zimAenLam},
            {letter: "قُ", audio: zimAenLam},
            {letter: "قِ", audio: kofKS},
            {letter: "قَ", audio: kofFS},

            {letter: "كٌ", audio: zimAenLam},
            {letter: "كٍ", audio: zimAenLam},
            {letter: "كً", audio: zimAenLam},
            {letter: "كُ", audio: zimAenLam},
            {letter: "كِ", audio: kafKS},
            {letter: "كَ", audio: kafFS},

            {letter: "لٌ", audio: zimAenLam},
            {letter: "لٍ", audio: zimAenLam},
            {letter: "لً", audio: zimAenLam},
            {letter: "لُ", audio: zimAenLam},
            {letter: "لِ", audio: lamKS},
            {letter: "لَ", audio: lamFS},

            {letter: "مٌ", audio: zimAenLam},
            {letter: "مٍ", audio: zimAenLam},
            {letter: "مً", audio: zimAenLam},
            {letter: "مُ", audio: zimAenLam},
            {letter: "مِ", audio: mimKS},
            {letter: "مَ", audio: mimFS},

            {letter: "نٌ", audio: zimAenLam},
            {letter: "نٍ", audio: zimAenLam},
            {letter: "نً", audio: zimAenLam},
            {letter: "نُ", audio: zimAenLam},
            {letter: "نِ", audio: nunKS},
            {letter: "نَ", audio: nunFS},

            {letter: "وٌ", audio: zimAenLam},
            {letter: "وٍ", audio: zimAenLam},
            {letter: "وً", audio: zimAenLam},
            {letter: "وُ", audio: zimAenLam},
            {letter: "وِ", audio: owaoKS},
            {letter: "وَ", audio: owaoFS},

            {letter: "هٌ", audio: zimAenLam},
            {letter: "هٍ", audio: zimAenLam},
            {letter: "هً", audio: zimAenLam},
            {letter: "هُ", audio: zimAenLam},
            {letter: "هِ", audio: haaKS},
            {letter: "هَ", audio: haaFS},

            {letter: "ءٌ", audio: zimAenLam},
            {letter: "ءٍ", audio: zimAenLam},
            {letter: "ءً", audio: zimAenLam},
            {letter: "ءُ", audio: zimAenLam},
            {letter: "ءِ", audio: hamjaKS},
            {letter: "ءَ", audio: hamjaFS},

            {letter: "يٌ", audio: zimAenLam},
            {letter: "يٍ", audio: zimAenLam},
            {letter: "يً", audio: zimAenLam},
            {letter: "يُ", audio: zimAenLam},
            {letter: "يِ", audio: eaKS},
            {letter: "يَ", audio: eaFS},

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
        // _this.randomData = _this.getData().sort(() => Math.random() - 0.5)
        _this.randomData = _this.getData()
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
                    <TableBody className={"al-qalam-quran-majeed2"}>
                        {_this.getTableRowHTML()}
                    </TableBody>
                </Table>
            </div>
        )
    }
}