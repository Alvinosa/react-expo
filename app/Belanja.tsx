import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Data produk
const products = [
  {
    id: '1',
    title: 'Tas Pink Cantik',
    description: 'Tas rajut yang cocok untuk healing!',
    price: 'Rp. 150.000',
    image: require('../assets/images/tas rajut.jpg'),
    icon: 'cart',
  },
  {
    id: '2',
    title: 'Sepatu Imut',
    description: 'Buat langkahmu semakin percaya diri dengan sepatu imut ini.',
    price: 'Rp. 200.000',
    image: require('../assets/images/sepatu.jpg'),
    icon: 'cart',
  },
  {
    id: '3',
    title: 'koren style',
    description: 'Tampil modis dengan baju terbaru dari koleksi kami.',
    price: 'Rp. 300.000',
    image: require('../assets/images/korean style.jpg'),
    icon: 'cart',
  },
  {
   id: '4',
    title: 'sepatu channel',
    description: 'Tampil elegan dengan channel dari koleksi sepatu terbaru kami.',
    price: 'Rp. 1.000.000',
    image: require('../assets/images/cannel.jpg'),
    icon: 'cart',
  },
  {
    id: '3',
    title: 'tas',
    description: 'Tampil manis dengan pilihan tas berkualitas terbaru dari koleksi kami, dengan harga yang ramah dikantong ',
    price: 'Rp. 100.000',
    image: require('../assets/images/tas unik.jpg'),
    icon: 'cart',
  },
  {
    id: '3',
    title: 'kemeja',
    description: 'sangat cocok untuk kuliah dan jalan-jalan.',
    price: 'Rp. 150.000',
    image: require('../assets/images/kemeja.jpg'),
    icon: 'cart',
  },
  {
    id: '3',
    title: 'fantouvle',
    description: 'Tampil modis dengan sepatu fantuvle terbaik dari koleksi kami.',
    price: 'Rp. 250.000',
    image: require('../assets/images/terbaik.jpg'),
    icon: 'cart',
  }
];

// Komponen utama
export default function Belanja() {
  const renderItem = ({ item }) => (
    <View style={[styles.productCard, { backgroundColor: item.id % 2 === 0 ? '#FFEBF1' : '#FFF0F6' }]}>
      <View style={styles.iconContainer}>
        <Ionicons name={item.icon} size={20} color="#FF69B4" />
      </View>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productContent}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Tambah ke Keranjang 🛒</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🛍️ Belanja Seru! 🛍️</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Lanjut ke Pembayaran 💳</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF69B4',
    marginBottom: 16,
    textAlign: 'center',
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#FF69B4',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFDDEE',
    marginRight: 10,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 12,
  },
  productContent: {
    flex: 1,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF69B4',
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  productPrice: {
    fontSize: 16,
    color: '#FF69B4',
    fontWeight: 'bold',
    marginTop: 8,
  },
  addButton: {
    backgroundColor: '#FF69B4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 10,
    shadowColor: '#FF69B4',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  checkoutButton: {
    backgroundColor: '#FF69B4',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 20,
    shadowColor: '#FF69B4',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  checkoutButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#f2f2f2',
    marginVertical: 8,
  },
});
