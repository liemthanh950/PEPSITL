import { View, Text, ImageBackground, Image, TouchableOpacity, Dimensions, TextInput,  ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import images from '../constants/image'
import styles from './style';
import axios from 'axios';
import DropDownPicker from 'react-native-dropdown-picker';
import { Picker } from '@react-native-picker/picker'
import { AGENCY } from '../models/pepsi';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const { width } = Dimensions.get('window');

interface responseChild {
    uri: string,
    fileName?: string
}
interface subNavigation {
    navigate: (where: string, params?: string) => void;
}

interface typeProps {
    navigation: subNavigation;
}
const handleNavigation = (myEvent: subNavigation) => {
    myEvent.navigate("Success");
}

const Register = (prop: typeProps) => {
    const [image1, setImage1] = useState<responseChild | null>(null);
    const [image2, setImage2] = useState<responseChild | null>(null);
    const [image3, setImage3] = useState<responseChild | null>(null);

    const selectImage1 = () => {
        const options: any = {
           
        };
        launchImageLibrary(options, (response: any) => {
            if (response.didCancel) {
                console.log('User  image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorCode);
            } else if (response.errorMessage) {
                console.log('User  custom button: ', response.errorMessage);
            } else {
                const source = { uri: response.assets[0].uri, fileName: response.assets[0].fileName };
                setImage1(source);
            }
        });
    };
    const selectImage2 = () => {
        const options: any = {
           
        };

        launchImageLibrary(options, (response: any) => {
            if (response.didCancel) {
                console.log('User  image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorCode);
            } else if (response.errorMessage) {
                console.log('User  custom button: ', response.errorMessage);
            } else {
                const source = { uri: response.assets[0].uri, fileName: response.assets[0].fileName };
                setImage2(source);
            }
        });
    };

    const selectImage3 = () => {
        const options: any = {
          
        };
        launchImageLibrary(options, (response: any) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorCode);
            } else if (response.errorMessage) {
                console.log('User tapped custom button: ', response.errorMessage);
            } else {
                const source = { uri: response.assets[0].uri, fileName: response.assets[0].fileName };
                setImage3(source);
            }
        });
    };

    const [selectedProvince, setSelectedProvince] = useState();
    const [dataProvince, setDataProvince] = useState<any[]>([])
    const [selectedDistrict, setSelectedDistrict] = useState();
    const [dataDistrict, setDataDistrict] = useState(null);
    const [openAgency, setOpenAgency] = useState(false);
    const [agencyValue, setAgencyValue] = useState<string | null>(null);
    const [agency, setAgency] = useState(AGENCY);

    useEffect(() => {
        axios.get(`https://provinces.open-api.vn/api/?p==1`).then((res) => {
            console.log('log');
            setDataProvince(res["data"])
        });
    }, []);

    useEffect(() => {
        axios.get(`https://provinces.open-api.vn/api/p/${selectedProvince}?depth=2`).then((res) => {
            console.log('log');
            setDataDistrict(res["data"]?.districts);
        });
    }, [selectedProvince]);

    const Item = (props: any) => {
        return (
            <View key={props.item}>
                <TouchableOpacity onPress={() => {
                    props.handleSetOpen(false);
                    props.handleSetValue(props.value)
                }}>
                    <Text style={{ color: "black", fontSize: 14 }}>
                        {props.item.value}
                    </Text>
                    <Text style={{ color: "black", }}>
                        {props.item.address}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [dateTime, setDateTime] = useState('Ch???n ')
    const showDatePicker = () => {

        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {

        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: any) => {
        console.warn("A date has been picked: ", date);
        console.log('ngafy', date);
        setDateTime(date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' - ' + date.getHours() + ':' + date.getMinutes());
        hideDatePicker();
    };
    const { navigation } = prop
    return (

        <ImageBackground source={images.bg} style={styles.container}>
            <Image source={images.nav} style={styles.nav_style} />
            <ScrollView>
                <Image source={images.textRegister} style={styles.text_register} />
                <View >
                    <View style={styles.contain_content_style}>
                        <Text style={styles.blue_text_style}>TH??NG TIN MUA H??NG</Text>
                        <View>
                            <View style={styles.contain_style}>
                                <View>
                                    <Text style={styles.white_text_style}>T???nh / Th??nh Ph???</Text>
                                    <View
                                        style={{
                                            backgroundColor: 'white',
                                            elevation: 1,
                                            borderWidth: 0.8,
                                            width: width / 2.2,
                                            borderRadius: 5,
                                        }}
                                    >
                                        <Picker
                                            selectedValue={selectedProvince}
                                            style={{
                                                fontSize: 18,
                                                color: 'grey',
                                                fontWeight: "bold",
            
                                                borderRadius: 10,
                                            }}
                                            onValueChange={(itemValue, itemIndex) => {
                                                setSelectedProvince(itemValue)
                                            }}
                                        >
                                            
                                            {dataProvince &&
                                                dataProvince.map((province: any) => (
                                                    <Picker.Item
                                                        key={province.code}
                                                        value={selectedProvince}
                                                        label={province.name}
                                                        value={province.code}
                                                    />
                                                ))}
                                        </Picker>
                                    </View>
                                </View>

                                <View >
                                    <Text style={styles.white_text_style}>Qu???n / huy???n</Text>
                                    <View
                                        style={{
                                            backgroundColor: 'white',
                                            elevation: 1,
                                            borderWidth: 0.8,
                                            width: width / 2.3,
                                            borderRadius: 5,
                                           
                                        }}
                                    >
                                        <Picker
                                            selectedValue={selectedDistrict}
                                            style={{
                                               
                                                fontSize: 18,
                                                color: 'grey',
                                                fontWeight: "bold",
                                               
                                            }}
                                            onValueChange={(itemValue, itemIndex) => {
                                                setSelectedDistrict(itemValue)
                                            }}
                                        >
                                          
                                            {dataDistrict &&
                                                dataDistrict.map((district: any) => (
                                                    <Picker.Item
                                                        key={district.code}
                                                        value={selectedDistrict}
                                                        label={district.name}
                                                        value={district.code}
                                                    />
                                                ))}
                                        </Picker>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.white_text_style}>?????i l??</Text>
                                <DropDownPicker
                                    open={openAgency}
                                    value={agencyValue}
                                    items={agency}
                                    setOpen={setOpenAgency}
                                    setValue={setAgencyValue}
                                    setItems={setAgency}
                                    listMode="SCROLLVIEW"
                                    style={styles.inputCity}
                                    containerStyle={{
                                        width: "100%",
                                        borderRadius: 5
                                    }}
                                    placeholder="Ch???n ?????i l??"
                                    selectedItemContainerStyle={{
                                        backgroundColor: "#84E5FF",

                                    }}
                                    listItemLabelStyle={{
                                        color: "#00355A"
                                    }}
                                    selectedItemLabelStyle={{
                                        color: "#00355A"
                                    }}
                                    dropDownContainerStyle={{
                                        marginTop: 4,
                                        borderRadius: 5,
                                    }}
                                    onSelectItem={(item) => {
                                        console.log(item);
                                    }}
                                    renderListItem={(props) => <Item {...props} handleSetOpen={(payload: boolean) => setOpenAgency(payload)} handleSetValue={(payload: string | null) => setAgencyValue(payload)} />}
                               
                                />
                            </View>
                            <Text style={{ alignSelf: 'center', color: '#429ACE' }}>________________________________________________</Text>
                            <Text style={styles.blue_text_style}>TH??NG TIN NG?????I THAM GIA</Text>
                            <View>
                                <View style={styles.contain_style}>
                                    <View>
                                        <Text style={styles.white_text_style}>H??? v?? t??n</Text>
                                        <TextInput style={styles.input_style} placeholder='Nh???p h??? t??n' placeholderTextColor='black' />
                                    </View>

                                    <View>
                                        <Text style={styles.white_text_style}>S??? ??i???n tho???i</Text>
                                        <TextInput style={styles.input_style} placeholder='Nh???p s??? ??i???n tho???i' placeholderTextColor='black' />
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.blue_text_style}>TH??NG TIN TI???C</Text>
                                <View style={styles.contain_style}>
                                    <View>
                                        <Text style={styles.white_text_style}>T???nh / Th??nh Ph???</Text>

                                        <View
                                        style={{
                                            backgroundColor: 'white',
                                            elevation: 1,
                                            borderWidth: 0.8,
                                            width: width / 2.2,
                                            borderRadius: 5,
                                        }}
                                    >
                                        <Picker
                                            selectedValue={selectedProvince}
                                            style={{
                                                fontSize: 18,
                                                color: 'grey',
                                                fontWeight: "bold",
                        
                                                borderRadius: 10,
                                            }}
                                            onValueChange={(itemValue, itemIndex) => {
                                                setSelectedProvince(itemValue)
                                            }}
                                        >
                                          
                                            {dataProvince &&
                                                dataProvince.map((province: any) => (
                                                    <Picker.Item
                                                        key={province.code}
                                                        value={selectedProvince}
                                                        label={province.name}
                                                        value={province.code}
                                                    />
                                                ))}
                                        </Picker>
                                    </View>
                                    </View>

                                    <View >
                                        <Text style={styles.white_text_style}>Qu???n / huy???n</Text>
                                        <View
                                            style={{
                                                backgroundColor: 'white',
                                                elevation: 1,
                                                borderWidth: 0.8,
                                                width: width / 2.3,
                                                borderRadius: 5,
                                            }}
                                        >
                                            <Picker
                                                selectedValue={selectedDistrict}
                                                style={{
                                                    fontSize: 18,
                                                    color: 'grey',
                                                    fontWeight: "bold",
                                                }}
                                                onValueChange={(itemValue, itemIndex) => {
                                                    setSelectedDistrict(itemValue)
                                                }}
                                            >
                                                
                                                {dataDistrict &&
                                                    dataDistrict.map((district: any) => (
                                                        <Picker.Item
                                                            key={district.code}
                                                            value={selectedDistrict}
                                                            label={district.name}
                                                            value={district.code}
                                                        />
                                                    ))}
                                            </Picker>
                                        </View>
                                    </View>
                                </View>
                                <Text style={styles.white_text_style}>S??? nh??</Text>
                                <TextInput style={styles.input_party} placeholder='Nh???p s??? nh??' placeholderTextColor='black' />
                                <Text style={styles.white_text_style}>Th???i gian ti???c</Text>
                                <View>
                                    <View >
                                        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', justifyContent: 'space-between', alignItems: 'center',height:35,borderRadius:5 }} onPress={showDatePicker}>
                                            <Text style={styles.text_view}>{dateTime}</Text>
                                            <Image source={images.time} />
                                        </TouchableOpacity>
                                    </View>
                                    <DateTimePickerModal
                                        isVisible={isDatePickerVisible}
                                        mode="datetime"
                                        onConfirm={handleConfirm}
                                        onCancel={hideDatePicker}
                                    />
                                </View>
                            </View>
                            <View>
                                <Text style={styles.blue_text_style}>H??NH ???NH</Text>
                                <View>
                                    <Text style={styles.white_text_style}>H??nh thi???p c?????i</Text>
                                    <View style={styles.view_style}>
                                        <TouchableOpacity onPress={selectImage1}>
                                        <Image source={images.imageicon}style={styles.iconStyle} />
                                            <TextInput style={ { paddingLeft: 50 }} value={image1?.fileName} editable={false} placeholder="????nh k??m ???nh" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.white_text_style}>H??nh h??a ????n b??n h??ng</Text>
                                    <View style={styles.view_style}>
                                        <TouchableOpacity onPress={selectImage2}>
                                        <Image source={images.imageicon}style={styles.iconStyle} />
                                            <View>
                                               
                                                <TextInput style={ { paddingLeft: 50 }} value={image2?.fileName} editable={false} placeholder="????nh k??m ???nh" />

                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.white_text_style}>H??nh kh???i s???n ph???m</Text>
                                    <View style={styles.view_style}>
                                        <TouchableOpacity onPress={selectImage3}>
                                        <Image source={images.imageicon}style={styles.iconStyle} />
                                            <View>
                                               
                                                <TextInput style={ { paddingLeft: 50 }} value={image3?.fileName} editable={false} placeholder="????nh k??m ???nh" />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>

                <TouchableOpacity onPress={() => handleNavigation(navigation)}>
                    <Image source={images.btnRegister} style={styles.btn_register} />
                </TouchableOpacity>
            </ScrollView>
        </ImageBackground>


    )
}

export default Register