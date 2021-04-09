import React, { Component } from 'react'
import history from '../history'
import Topbar from './Topbar'
import firestore from "../firebase/firestore"
import Hamburger from './Hamburger'
import { IoIosCloseCircle } from "react-icons/io";
import styled from 'styled-components'
import { connect } from 'react-redux';
import { Input, Paper } from '@material-ui/core';
import { CC, EOQ, TC, OC } from '../pic'
import './Modal.css';
import DatePicker from 'react-datepicker';
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, ComposedChart, Line, CartesianGrid } from 'recharts';
const Font = styled.div`
  && {
    color: #000000;
    font-size: 16px;
    font-weight: bold;
  }
`

class InvenCost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.userList[this.props.userList.length - 1],
            modal1: false,
            modal2: false,
            modal3: false,
            modal4: false,
            maodal5: false,
            date: new Date(),
            currentMont: new Date().getMonth(),
            jVal: 0,
            fVal: 0,
            mVal: 0,
            aVal: 0,
            mayVal: 0,
            junVal: 0,
            julVal: 0,
            augVal: 0,
            sepVal: 0,
            octVal: 0,
            novVal: 0,
            decVal: 0,
            extraCost: 0,
            oCost:null
        };
        
    }
    

    handleModalClose1 = (e) => {
        this.setState({ modal1: false });
    };

    handleModalOpen1 = () => {
        this.setState({ modal1: true });
    };

    handleModalClose2 = (e) => {
        this.setState({ modal2: false });
    };

    handleModalOpen2 = () => {
        this.setState({ modal2: true });
    };
    handleModalClose3 = (e) => {
        this.setState({ modal3: false });
    };

    handleModalOpen3 = () => {
        this.setState({ modal3: true });
    };

    handleModalClose4 = (e) => {
        this.setState({ modal4: false });
    };

    handleModalOpen4 = () => {
        this.setState({ modal4: true });
    };

    handleModalClose5 = (e) => {
        this.setState({ modal5: false });
    };

    handleModalOpen5 = () => {
        this.setState({ modal5: true });
    };
    handleClick = () => {
        if(this.state.currentMont === 0){
            this.setState({jVal: this.state.jVal += parseInt(this.state.extraCost) })
        }
        if(this.state.currentMont === 1){
            this.setState({fVal: this.state.fVal += parseInt(this.state.extraCost) })
        }
        if(this.state.currentMont === 2){
            this.setState({mVal: this.state.mVal += parseInt(this.state.extraCost) })
        }
        if(this.state.currentMont === 3){
            this.setState({aVal: this.state.aVal += parseInt(this.state.extraCost) })
        }
        if(this.state.currentMont === 4){
            this.setState({mayVal: this.state.mayVal += parseInt(this.state.extraCost) })
        }
        if(this.state.currentMont === 5){
            this.setState({junVal: this.state.junVal += parseInt(this.state.extraCost) })
        }
        if(this.state.currentMont === 6){
            this.setState({julVal: this.state.julVal += parseInt(this.state.extraCost)})
        }
        if(this.state.currentMont === 7){
            this.setState({augVal: this.state.augVal += parseInt(this.state.extraCost) })
        }
        if(this.state.currentMont === 8){
            this.setState({sepVal: this.state.sepVal += parseInt(this.state.extraCost) })
        }
        if(this.state.currentMont === 9){
            this.setState({octVal: this.state.octVal += parseInt(this.state.extraCost) })
        }
        if(this.state.currentMont === 10){
            this.setState({novVal: this.state.novVal += parseInt(this.state.extraCost) })
        }
        if(this.state.currentMont === 11){
            this.setState({decVal: this.state.decVal += parseInt(this.state.extraCost) })
        }
        const oCost = {
            Apr: this.state.aVal,
            Aug: this.state.augVal,
            Dec: this.state.decVal,
            Feb: this.state.fVal,
            Jan: this.state.jVal,
            Jul: this.state.julVal,
            Jun: this.state.junVal,
            Mar: this.state.mVal,
            May: this.state.mayVal,
            Nov: this.state.novVal,
            Oct: this.state.octVal,
            Sep: this.state.sepVal,
        } 
        firestore.updateCost(oCost,this.updateSuccess,this.updateReject)

    }
    componentDidMount =  ()=>{
        firestore.getAllCost(this.getSuccess,this.getReject)
    }
    updateSuccess = () => {
        console.log("Success")
    }
    updateReject = (e) =>{
        console.log(e)
    }
    getSuccess = (querySnapshot)=>{
        let oCost
        querySnapshot.forEach(doc => {
            oCost = doc.data()
            oCost.id = doc.id
            this.setState({ oCost: oCost })
        });
        this.setState(
        {
            jVal: oCost.Jan,
            fVal: oCost.Feb,
            mVal: oCost.Mar,
            aVal: oCost.Apr,
            mayVal: oCost.May,
            junVal: oCost.Jun,
            julVal: oCost.Jul,
            augVal: oCost.Aug,
            sepVal: oCost.Sep,
            octVal: oCost.Oct,
            novVal: oCost.Nov,
            decVal: oCost.Dec,
        })
    }
    getReject = (e) =>{
        console.log(e)
    }

    render() {

        let barData = [
            {
                name: 'Jan', Cost: this.state.jVal,
            },
            {
                name: 'Feb', Cost: this.state.fVal,
            },
            {
                name: 'Mar', Cost: this.state.mVal,
            },
            {
                name: 'Apr', Cost: this.state.aVal,
            },
            {
                name: 'May', Cost: this.state.mayVal,
            },
            {
                name: 'Jun', Cost: this.state.junVal,
            },
            {
                name: 'Jul', Cost: this.state.julVal,
            },
            {
                name: 'Aug', Cost: this.state.augVal,
            },
            {
                name: 'Sep', Cost: this.state.sepVal,
            },
            {
                name: 'Oct', Cost: this.state.octVal,
            },
            {
                name: 'Nov', Cost: this.state.novVal,
            },
            {
                name: 'Dec', Cost: this.state.decVal,
            },
        ];
        return (
            <div className="bg">
                <Hamburger page='INVENTORY COST' user={this.state.user} />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingTop: '7%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
                        <div style={{ paddingRight: 70 }}>
                            <Paper className="paperInEOQ" onClick={this.handleModalOpen1}>
                                <img className="picIn1" src={EOQ}></img>
                                <p className="textInventC" style={{ paddingTop: '8%' }}>Economic Order
                                Quantity
                            </p>
                            </Paper>
                        </div>

                        <div style={{ paddingTop: 70 }}>
                            <Paper className="paperInEOQ" onClick={this.handleModalOpen3}>
                                <img className="picIn2" src={CC}></img>
                                <p className="textInventC" style={{ paddingTop: '8%' }}>Carrying
                            Cost</p>
                            </Paper>
                        </div>

                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Paper className="paperInEOQ" onClick={this.handleModalOpen2} >
                            <img className="picIn3" src={OC}></img>
                            <p className="textInventC" style={{ paddingTop: '8%' }}>Ordering
                            Cost</p>
                        </Paper>
                        <div style={{ paddingTop: 70 }}>
                            <Paper className="paperInEOQ" onClick={this.handleModalOpen4}>
                                <img className="picIn3" src={TC}></img>
                                <p className="textInventC" style={{ paddingTop: '8%' }}>Total
                            Cost</p>
                            </Paper>
                        </div>

                    </div>

                </div>
                <div hidden={!this.state.modal1}>
                    <div className="modal-background">
                        <div className="modal-card" style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ paddingLeft: '95%', cursor: 'pointer' }}><IoIosCloseCircle style={{ width: '40px', height: '40px' }} onClick={this.handleModalClose1}></IoIosCloseCircle></div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <img style={{ width: '160px', height: '70px', marginLeft: '5%' }} src={EOQ}></img>
                                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '5%' }}>
                                    <p>number of work days in the year</p>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <input style={{ width: '45px', borderWidth: '0', paddingLeft: '9px', marginLeft: '30%' }}></input>
                                        <button style={{ width: '60px', borderWidth: '0', marginLeft: '2%', backgroundColor: 'salmon', borderRadius: '15px', fontSize: '12px' }}>Save</button>
                                    </div>
                                </div>
                                <button style={{ fontWeight: 'lighter', color: 'white', height: '70px', width: '120px', borderWidth: '0', marginLeft: '10%', backgroundColor: '#40BA8E', borderRadius: '10px' }} onClick={this.handleModalOpen5}>EOQ MANUAL</button>
                            </div>
                            <div style={{ paddingTop: '40px' }}><Paper className='eoqTable' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                    <Font>Product Name</Font>
                                    <Font>EOQ</Font>
                                    <Font>Number of orders/year</Font>
                                    <Font>Order lead time</Font>
                                </div>
                            </Paper></div>
                        </div>
                    </div>
                </div>
                <div hidden={!this.state.modal2}>
                    <div className="modal-background" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className="modal-card">
                            <div style={{ paddingLeft: '95%', cursor: 'pointer' }}><IoIosCloseCircle style={{ width: '40px', height: '40px' }} onClick={this.handleModalClose2}></IoIosCloseCircle></div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <img style={{ width: '140px', height: '80px', marginLeft: '5%' }} src={OC}></img>
                                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '7%' }}>
                                    <p>Insert Ordering Cost</p>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <input style={{ width: '100px', borderWidth: '0', paddingLeft: '9px', marginLeft: '5%' }} type="number" name="cost" onChange={txt => this.setState({ extraCost: txt.target.value })}></input>
                                        <button style={{ width: '60px', borderWidth: '0', marginLeft: '2%', backgroundColor: 'salmon', borderRadius: '15px', fontSize: '12px' }} onClick={this.handleClick}>Save</button>
                                    </div>
                                </div>

                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', marginTop: "5%" }}>
                                <ComposedChart
                                    width={750}
                                    height={400}
                                    data={barData}
                                    margin={{
                                        top: 0, right: 0, bottom: 0, left: 0,
                                    }}
                                >
                                    <CartesianGrid stroke="#f5f5f5" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="Cost" barSize={20} fill="#413ea0" />
                                </ComposedChart>
                            </div>
                        </div>
                    </div>
                </div>
                <div hidden={!this.state.modal3}>
                    <div className="modal-background" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className="modal-card">
                            <div style={{ paddingLeft: '95%', cursor: 'pointer' }}><IoIosCloseCircle style={{ width: '40px', height: '40px' }} onClick={this.handleModalClose3}></IoIosCloseCircle></div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <img style={{ width: '140px', height: '80px', marginLeft: '5%' }} src={CC}></img>
                                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '7%' }}>
                                    <p>Insert Carrying Cost</p>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <input style={{ width: '100px', borderWidth: '0', paddingLeft: '9px', marginLeft: '5%' }}></input>
                                        <button style={{ width: '60px', borderWidth: '0', marginLeft: '2%', backgroundColor: 'salmon', borderRadius: '15px', fontSize: '12px' }}>Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div hidden={!this.state.modal4}>
                    <div className="modal-background" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className="modal-card">
                            <div style={{ paddingLeft: '95%', cursor: 'pointer' }}><IoIosCloseCircle style={{ width: '40px', height: '40px' }} onClick={this.handleModalClose4}></IoIosCloseCircle></div>
                            <img style={{ width: '140px', height: '80px', marginLeft: '5%' }} src={TC}></img>
                        </div>
                    </div>
                </div>
                <div hidden={!this.state.modal5}>
                    <div className="modal-backgroundForDash" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className="modal-card">
                            <div style={{ paddingLeft: '95%', cursor: 'pointer' }}><IoIosCloseCircle style={{ width: '40px', height: '40px' }} onClick={this.handleModalClose5}></IoIosCloseCircle></div><div style={{ display: 'flex', flexDirection: 'row' }}>
                                <img style={{ width: '160px', height: '70px', marginLeft: '5%' }} src={EOQ}></img>
                                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '5%' }}>
                                    <p>number of work days in the year</p>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <input style={{ width: '45px', borderWidth: '0', paddingLeft: '9px', marginLeft: '30%' }}></input>
                                        <button style={{ width: '60px', borderWidth: '0', marginLeft: '2%', backgroundColor: 'salmon', borderRadius: '15px', fontSize: '12px' }}>Save</button>
                                    </div>
                                </div>
                            </div>
                            <div style={{ paddingTop: '40px' }}><Paper className='eoqTable' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-around', marginLeft: '1%' }}>
                                    <Font style={{ marginLeft: '3%' }}>Input</Font>
                                    <Font style={{ marginLeft: '5%' }}>EOQ</Font>
                                    <Font>Number of orders/year</Font>
                                    <Font>Order lead time</Font>
                                </div>
                            </Paper></div>
                            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '5%', marginTop: '1%' }}>
                                <p>Demand in units</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <input style={{ width: '45px', borderWidth: '0', paddingLeft: '9px', marginLeft: '5%' }}></input>
                                <button style={{ width: '60px', borderWidth: '0', marginLeft: '2%', backgroundColor: 'salmon', borderRadius: '15px', fontSize: '12px' }}>Save</button>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '5%', marginTop: '1%' }}>
                                <p>Order cost</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <input style={{ width: '45px', borderWidth: '0', paddingLeft: '9px', marginLeft: '5%' }}></input>
                                <button style={{ width: '60px', borderWidth: '0', marginLeft: '2%', backgroundColor: 'salmon', borderRadius: '15px', fontSize: '12px' }}>Save</button>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '5%', marginTop: '1%' }}>
                                <p>Holding costs</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <input style={{ width: '45px', borderWidth: '0', paddingLeft: '9px', marginLeft: '5%' }}></input>
                                <button style={{ width: '60px', borderWidth: '0', marginLeft: '2%', backgroundColor: 'salmon', borderRadius: '15px', fontSize: '12px' }}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

const mapStateToProps = (state) => {
    return {
        userList: state.userReducer.userList,
        accountList: state.accountReducer.accountList,
        productList: state.productReducer.productList,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InvenCost);

