import React, { Component } from 'react';
import { connect } from 'react-redux';
import { calculate } from './calculate';

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
        const value = target.type === 'radio' ? target.value : target.checked;
        const name = target.name;
        this.setState({ 
            [name]: value
        });
    };
    // onDiscountChange = (e) => {
    //     const discount = e.target.value;
    //     this.setState(() => ({ discount }));
    // };
    onMaterialChange = (e) => {
        const material = e.target.value;
        this.setState(() => ({ material }));
    };
    onSpaceChange = (e) => {
        const space = e.target.value;
        this.setState(() => ({ space }));
    };
    onMultiMaterialChange = (e) => {
        const multiMaterial = e.target.value;
        this.setState(() => ({ multiMaterial }));
    };
    onStitchAlignmentChange = (e) => {
        const stitchAlignment = e.target.value;
        this.setState(() => ({ stitchAlignment }));
    };
    onCustomStitchChange = (e) => {
        const customStitch = e.target.value;
        this.setState(() => ({ customStitch }));
    };
    onCutChange = (e) => {
        const cut = e.target.value;
        this.setState(() => ({ cut }));
    };
    onCurveChange = (e) => {
        const curve = e.target.value;
        this.setState(() => ({ curve }));
    };
    onAngleChange = (e) => {
        const angle = e.target.value;
        this.setState(() => ({ angle }));
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
                <p>Филиал {data.branchName}</p>
                <section>
                    <div className="wrapper">
                        <div className="container">
                            <form onSubmit={this.handleSubmit}>
                                <div className="group">
                                    <label>Обычный</label>
                                    <input
                                        name="discount"
                                        type="radio"
                                        value="price"
                                        checked={this.state.discount === "price"}
                                        onChange={this.handleInputChange}
                                    />
                                    <label>Золото</label>
                                    <input
                                        name="discount"
                                        type="radio"
                                        value="priceGold"
                                        checked={this.state.discount === "priceGold"}
                                        onChange={this.handleInputChange}
                                    />
                                    <label>Платина</label>
                                    <input
                                        name="discount"
                                        type="radio"
                                        value="pricePlatinum"
                                        checked={this.state.discount === "pricePlatinum"}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <div className="group">
                                    <select value={this.state.material} onChange={this.onMaterialChange}>
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
                                        type="text"
                                        placeholder="площадь"
                                        value={this.state.space}
                                        onChange={this.onSpaceChange}
                                    />
                                    <label>Углы</label>
                                    <input
                                        type="text"
                                        placeholder="углы"
                                        value={this.state.angles}
                                        onChange={this.onAngleChange}
                                    />
                                </div>

                                <div className="group">
                                    <label>Кривая {data.curvePrice}:</label>
                                    <input
                                        type="number"
                                        value={this.state.curve}
                                        onChange={this.onCurveChange}
                                    />
                                </div>

                                <div className="group">
                                    <label>Вырез {data.cutPrice}:</label>
                                    <input
                                        type="number"
                                        value={this.state.cut}
                                        onChange={this.onCutChange}
                                    />
                                </div>
                                <div className="group">
                                    <label>Заданный шов {data.customStitch}:</label>
                                    <input
                                        type="radio"
                                        value="no"
                                        checked={this.state.customStitch === "no"}
                                        onChange={this.onCustomStitchChange}
                                    />
                                    <input
                                        type="radio"
                                        value="yes"
                                        checked={this.state.customStitch === "yes"}
                                        onChange={this.onCustomStitchChange}
                                    />
                                </div>
                                <div className="group">
                                    <label>Центровка швов {data.stitchAlignment}:</label>
                                    <input
                                        type="radio"
                                        value="no"
                                        checked={this.state.stitchAlignment === "no"}
                                        onChange={this.onStitchAlignmentChange}
                                    />
                                    <input
                                        type="radio"
                                        value="yes"
                                        checked={this.state.stitchAlignment === "yes"}
                                        onChange={this.onStitchAlignmentChange}
                                    />
                                </div>
                                <div className="group">
                                    <label>Многофактурность {data.multiMaterial}:</label>
                                    <input
                                        type="radio"
                                        value="no"
                                        checked={this.state.multiMaterial === "no"}
                                        onChange={this.onMultiMaterialChange}
                                    />
                                    <input
                                        type="radio"
                                        value="yes"
                                        checked={this.state.multiMaterial === "yes"}
                                        onChange={this.onMultiMaterialChange}
                                    />
                                </div>
                                <button>Рассчитать</button>
                            </form>
                        </div>
                        <p>Результат: {this.state.result}</p>
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