import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { calculate } from './calculate';
import { startRemoveBranch } from '../../actions/branch';
import { addDisplayMat } from '../../actions/displayMat';

import DisplayMatMain from './materials/DisplayMatMain';
import '../../styles/single_branch.css';

class SingleBranch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            material: {
                name: '',
                price: 0
            },
            space: 0,
            angle: 4,
            curve: 0,
            cut: 0,
            customStitch: "no" || '',
            stitchAlignment: "no" || '',
            multiMaterial: "no" || '',
            discount: 'price' || '',
            result: 0
        };
    };

    handleMatChange = (e) => {
        let material = e.target.value;
        let data = this.props.materials.find(mat => mat.name === material);
        const discount = this.state.discount;
        this.setState({
            material: {
                name:   data.name,
                price:  discount === 'priceGold' ? data.priceGold :
                        discount === 'pricePlatinum' ? data.pricePlatinum :
                        data.price
            }
                
        })
    };

    handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({ 
            [name]: value
        });
    };
    handleSubmit = (e) => {
        const data = { ...this.props.location.state };
        const state = this.state;
        e.preventDefault();
        this.setState(() => ({ result: calculate(data, state) }));
        let mat = {
            id: uuid(),
            name: this.state.material.name,
            price: calculate(data, state)
        };
        this.props.dispatch(addDisplayMat(mat));
    };

    render() {
        //stores initial branch data
        const data = { ...this.props.location.state };
        return (
            <div className="branch_container">
                <div className="branch_display">
                <h3 className="single_branch_header">Филиал {data.branchName}</h3>
                <section>
                        <div className="">
                            <form className="single_branch" onSubmit={this.handleSubmit}>
                                <div className="group radio">
                                    <p>Цена:</p>
                                    <label>Обычная</label>
                                    <input
                                        name="discount"
                                        type="radio"
                                        value="price"
                                        checked={this.state.discount === "price"}
                                        onChange={this.handleInputChange}
                                    />
                                    <label>vip-1</label>
                                    <input
                                        name="discount"
                                        type="radio"
                                        value="priceGold"
                                        checked={this.state.discount === "priceGold"}
                                        onChange={this.handleInputChange}
                                    />
                                    <label>vip-2</label>
                                    <input
                                        name="discount"
                                        type="radio"
                                        value="pricePlatinum"
                                        checked={this.state.discount === "pricePlatinum"}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <div className="group">
                                    <select
                                        name="material" 
                                        value={this.state.material.name} 
                                        onChange={this.handleMatChange}>
                                        <option value="0">Выберете материал</option>
                                        {this.props.materials.map((material) => {
                                            const discount = this.state.discount;
                                            return (material.branch === data.branchName || material.branch === 'all') ? (<option
                                                key={material._id}
                                                value={
                                                    material.name
                                                }>
                                                {material.name}
                                                {
                                                    discount === 'priceGold' ? material.priceGold :
                                                    discount === 'pricePlatinum' ? material.pricePlatinum : material.price
                                                }тг
                                            </option>) : '';
                                        })}
                                    </select>
                                </div>
                                <div className="group">
                                    <label>Площадь</label>
                                    <input
                                        required
                                        name="space"
                                        type="number"
                                        placeholder="площадь"
                                        value={this.state.space}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <div className="group">
                                    <label>Углы</label>
                                    <input
                                        name="angle"
                                        type="number"
                                        placeholder="4"
                                        value={this.state.angle}
                                        onChange={this.handleInputChange}
                                    />
                                </div>

                                <div className="group">
                                    <label>Кривая {data.curvePrice}:</label>
                                    <input
                                        name="curve"
                                        type="number"
                                        value={this.state.curve}
                                        onChange={this.handleInputChange}
                                    />
                                </div>

                                <div className="group">
                                    <label>Вырез {data.cutPrice}:</label>
                                    <input
                                        name="cut"
                                        type="number"
                                        value={this.state.cut}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <div className="group">
                                    <label>Заданный шов {data.customStitch}:</label>
                                    <input
                                        name="customStitch"
                                        type="radio"
                                        value="no"
                                        checked={this.state.customStitch === "no"}
                                        onChange={this.handleInputChange}
                                    />
                                    <input
                                        name="customStitch"
                                        type="radio"
                                        value="yes"
                                        checked={this.state.customStitch === "yes"}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <div className="group">
                                    <label>Центровка швов {data.stitchAlignment}:</label>
                                    <input
                                        name="stitchAlignment"
                                        type="radio"
                                        value="no"
                                        checked={this.state.stitchAlignment === "no"}
                                        onChange={this.handleInputChange}
                                    />
                                    <input
                                        name="stitchAlignment"
                                        type="radio"
                                        value="yes"
                                        checked={this.state.stitchAlignment === "yes"}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <div className="group">
                                    <label>Многофактурность {data.multiMaterial}:</label>
                                    <input
                                        name="multiMaterial"
                                        type="radio"
                                        value="no"
                                        checked={this.state.multiMaterial === "no"}
                                        onChange={this.handleInputChange}
                                    />
                                    <input
                                        name="multiMaterial"
                                        type="radio"
                                        value="yes"
                                        checked={this.state.multiMaterial === "yes"}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <p>Результат: {this.state.result}</p>
                                <button className="form_btn">Рассчитать</button>
                            </form>
                            <button className="btn_red" onClick={() => {
                                this.props.dispatch(startRemoveBranch({ _id: data._id }))
                            }}>Удалить филиал {data.branchName}</button>
                        </div>
                    </section>
                </div>
                <DisplayMatMain />
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        materials: state.materials
    }
}

export default connect(mapStateToProps)(SingleBranch);