import { View, Text, Image, TextInput } from "react-native";

const SearchHeader = ({onSearch}) => {

    return (
        <View style={{ padding: 20 }}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Image source={require('../images/search.png')} 
                    style={{width:20,height:20,}}/>
                    <TextInput
                    placeholder="I want to help..."
                    style={{flex:1}}
                    onChangeText={onSearch}
                    />

            </View>
        </View>


    );
}

export default SearchHeader;