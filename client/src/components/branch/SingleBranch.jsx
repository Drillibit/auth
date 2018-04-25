import React, { Component } from 'react';
import { connect } from 'react-redux';
import { calculate } from './calculate';
import { startRemoveBranch } from '../../actions/branch';
import '../../styles/single_branch.css';

class SingleBranch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            material: 0,
            space: 0,
            angle: 0,
            curve: 0,
            cut: 0,
            customStitch: "no" || '',
            stitchAlignment: "no" || '',
            multiMaterial: "no" || '',
            discount: 'price' || '',
            result: 0
        };
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
    };

    render() {
        //stores initial branch data
        const data = { ...this.props.location.state };
        return (
            <div>
                <h3>Филиал {data.branchName}</h3>
                <section>
                        <div className="container">
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
                                        value={this.state.material} 
                                        onChange={this.handleInputChange}>
                                        <option value="0">Выберете материал</option>
                                        {this.props.materials.map((material) => {
                                            return (material.branch === data.branchName) ? (<option
                                                key={material._id}
                                                value={
                                                    this.state.discount === 'priceGold' ? material.priceGold :
                                                        this.state.discount === 'pricePlatinum' ? material.pricePlatinum : material.price
                                                }>
                                                {material.name}
                                                {
                                                    this.state.discount === 'priceGold' ? material.priceGold :
                                                        this.state.discount === 'pricePlatinum' ? material.pricePlatinum : material.price
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
                                        type="text"
                                        placeholder="площадь"
                                        value={this.state.space}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <div className="group">
                                    <label>Углы</label>
                                    <input
                                        name="angles"
                                        type="text"
                                        placeholder="углы"
                                        value={this.state.angles}
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
        );
    }
};

const mapStateToProps = (state) => {
    return {
        materials: state.materials
    }
}

export default connect(mapStateToProps)(SingleBranch);