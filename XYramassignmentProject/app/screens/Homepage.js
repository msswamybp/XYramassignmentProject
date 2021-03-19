

import * as data from './test.json';
import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    ActivityIndicator,
    ImageBackground,
    BackHandler,
    Dimensions,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    ScrollView,
    TextInput

} from 'react-native';
import GridCardComponent from './GridCardComponent'
import CardComponent from './CardComponent'
import Images from './../config/images';
import { SceneView } from 'react-navigation';
import DatePicker from 'react-native-datepicker'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
var radio_props = [
    { label: 'param1', value: 0 },
    { label: 'param2', value: 1 }
];
import { Picker } from '@react-native-community/picker';
class Homepage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: "2016-05-15",
            value: 0,
            title: '',
            gender: 'Male',
            age: '20-30'
        }
    }

    rendertest1() {
        return (
            <View >
                <FlatList
                    horizontal={false}

                    keyExtractor={(item, index) => index.toString()}
                    data={data.entry}
                    renderItem={({ item, index }) => {
                        return (
                            <CardComponent
                                resource={item.resource}
                                id={item.resource.id}
                                family={item.resource.name[0].family}
                                gender={item.resource.gender}
                                age={this.calculate_age(item.resource.birthDate)}
                                name={this.get_name(item.resource.name[0].given)}
                                birthDate={item.resource.birthDate}
                                navigation={this.props.navigation}
                                telecom={item.resource.telecom[0].value}
                            />
                        );
                    }}
                />
            </View>
        );
    }
    get_telecomvalue(value) {

    }
    calculate_age = (dob1) => {
        var today = new Date();
        var birthDate = new Date(dob1);  // create a date object directly from `dob1` argument
        var age_now = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age_now--;
        }

        return age_now;
    }
    get_name(name) {
        var name1 = ''
        if (name.length > 0) {
            for (i = 0; i < name.length; i++) {
                name1 = name1 + name[i]
            }
        }
        return name1
    }

    render() {
        return (
            <View style={{ flex: 1, }}>
                {/* <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    onPress={(value) => { this.setState({ value: value }) }}
                /> */}
                <View style={{ height: Dimensions.get('window').height * 0.02, width: Dimensions.get('window').width }}>

                </View>
                <View style={{ height: Dimensions.get('window').height * 0.05, width: Dimensions.get('window').width, borderWidth: 1, }}>
                    <TextInput
                        placeholder='Name'
                        placeholderTextColor='grey'
                        onChangeText={(title) => this.setState({ title })}

                    />
                </View>
                <View style={{ height: Dimensions.get('window').height * 0.02, width: Dimensions.get('window').width }}>

                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ height: Dimensions.get('window').height * 0.3, width: Dimensions.get('window').width * 0.95, borderWidth: 1, }}>

                        <DatePicker
                            style={{ height: Dimensions.get('window').height * 0.05, width: Dimensions.get('window').width * 0.9 }}
                            date={this.state.date}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate="2016-05-01"
                            maxDate="2016-06-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => { this.setState({ date: date }) }}
                        />
                        <View style={{ height: Dimensions.get('window').height * 0.05, width: Dimensions.get('window').width }}>

                        </View>

                        <View style={{ height: Dimensions.get('window').height * 0.05, width: Dimensions.get('window').width, flexDirection: 'row', justifyContent: 'space-around' }}>
                            <View style={{ height: Dimensions.get('window').height * 0.05, width: Dimensions.get('window').width * 0.3, borderWidth: 1 }}>
                                <Picker
                                    selectedValue={this.state.age}
                                    style={{ height: Dimensions.get('window').height * 0.05, width: Dimensions.get('window').width * 0.3 }}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ age: itemValue })
                                    }>
                                    <Picker.Item label="20-30" value="Y" />
                                    <Picker.Item label="30-40" value="FM" />
                                    <Picker.Item label="40-50" value="M" />
                                    <Picker.Item label="50-60" value="O" />
                                </Picker>
                            </View>
                            <View style={{ height: Dimensions.get('window').height * 0.05, width: Dimensions.get('window').width * 0.3, borderWidth: 1 }}>
                                <Picker
                                    selectedValue={this.state.gender}
                                    style={{ height: Dimensions.get('window').height * 0.05, width: Dimensions.get('window').width * 0.3 }}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ gender: itemValue })
                                    }>
                                    <Picker.Item label="Male" value="M" />
                                    <Picker.Item label="Female" value="FM" />
                                </Picker>
                            </View>
                        </View>
                        <View style={{ height: Dimensions.get('window').height * 0.05, width: Dimensions.get('window').width, flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                            <View style={{ height: Dimensions.get('window').height * 0.05, width: Dimensions.get('window').width * 0.3, borderWidth: 1, borderColor: 'blue', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'blue' }}>Clear Search</Text>
                            </View>
                            <View style={{ height: Dimensions.get('window').height * 0.05, width: Dimensions.get('window').width * 0.3, borderWidth: 1, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'white' }}>Search</Text>
                            </View>
                        </View>

                    </View>
                </View>
                <ScrollView
                    style={{
                        paddingTop: Dimensions.get('window').height * 0.075,
                    }}>
                    {
                        this.rendertest1()
                    }
                </ScrollView>
            </View >
        );
    }
}

export default Homepage