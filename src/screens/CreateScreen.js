import { useState } from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const CreateScreen = ({ data, setdata }) => {
  const [itemName, setitemName] = useState('');
  const [stockAmount, setStockAmount] = useState('');
  const [isEdit, setisEdit] = useState(false);
  const [editItemId, seteditItemId] = useState(null)

  const addItemHandler = () => {
    const newAddItem = {
      id: Date.now(),
      name: itemName,
      stock: stockAmount,
    };
    setdata([...data, newAddItem]);
    setitemName('');
    setStockAmount('');
    setisEdit(false);
  };

  const deleteItemHandler = (id) => {
    setdata(data.filter((item) => item.id !== id))
  }

  const editItemHandler = (item) => {
    setisEdit(true)
    setitemName(item.name)
    seteditItemId(item.id)
  }

  const updateItemHandler = () => {
    setdata(data.map((item) => (
      item.id === editItemId ? {...item, name:itemName, stock:stockAmount} : item
    )))
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter item name..."
        placeholderTextColor="#999"
        style={styles.input}
        value={itemName}
        onChangeText={item => setitemName(item)}
      />
      <TextInput
        placeholder="Enter stock amount..."
        placeholderTextColor="#999"
        style={styles.input}
        value={stockAmount}
        onChangeText={item => setStockAmount(item)}
      />

      <Pressable style={styles.addButton} onPress={() => isEdit ? updateItemHandler() : addItemHandler()}>
        <Text style={styles.btnText}>{isEdit ? 'EDIT ITEM IN STOCK' : 'ADD ITEM IN STOCK'}</Text>
      </Pressable>

      <View>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>All Items in the stocks</Text>
        </View>

        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.itemContainer,
                { backgroundColor: item.stock < 20 ? '#FFCCCC' : '#D7F68FFF' },
              ]}
            >
              <Text style={styles.itemText}>{item.name}</Text>
              <View style={{ flexDirection: 'row', gap: 20 }}>
                <Text style={styles.itemText}>{item.stock}</Text>
                <Pressable onPress={()=> editItemHandler(item)}>
                  <Text style={styles.itemText}>Edit</Text>
                </Pressable>
                <Pressable onPress={()=> deleteItemHandler(item.id)}>
                  <Text style={styles.itemText}>Delete</Text>
                </Pressable>
              </View>
            </View>
          )}
          contentContainerStyle={{ gap: 10 }}
        />
      </View>
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: '4%',
    gap: 10,
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#72C37AFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
  },
  addButton: {
    backgroundColor: '#CABFEEFF',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headingText: {
    fontWeight: '700',
    fontSize: 18,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
  },
  itemText: {
    fontWeight: '500',
    fontSize: 16,
  },
});
