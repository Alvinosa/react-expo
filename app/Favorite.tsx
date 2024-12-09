import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const favorites = [
  {
    id: '1',
    title: 'Baju stylish korea',
    description: 'Pilih warna untuk penampilan yang lebih cerah!',
    image: 'https://example.com/lipstick.png',
    icon: 'heart',
  },
  {
    id: '2',
    title: 'Tas menawan imut',
    description: 'Tas ini bisa membuatmu semakin bergaya.',
    image: 'https://example.com/bracelet.png',
    icon: 'heart',
  },
  {
    id: '3',
    title: 'Sepatu cantik',
    description: 'Kenyamanan dan gaya dalam satu langkah!',
    image: 'https://example.com/shoes.png',
    icon: 'heart',
  },
  // Tambahkan item favorit lainnya jika diperlukan
];

export default function Favorite() {
  const renderItem = ({ item }) => (
    <View style={[styles.favoriteCard, { backgroundColor: item.id % 2 === 0 ? '#ffcad4' : '#ffb3c6' }]}>
      <View style={styles.iconContainer}>
        <Ionicons name={item.icon} size={24} color="#FF69B4" />
      </View>
      <Image source={{ uri: item.image }} style={styles.favoriteImage} />
      <View style={styles.favoriteContent}>
        <Text style={styles.favoriteTitle}>{item.title}</Text>
        <Text style={styles.favoriteDescription}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>✨ FAVORITMU ✨</Text>
      <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Tambah Lagi Yuk! 🛍️</Text>
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
  favoriteCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffe6f0',
    marginRight: 10,
  },
  favoriteImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 12,
  },
  favoriteContent: {
    flex: 1,
  },
  favoriteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF69B4',
  },
  favoriteDescription: {
    fontSize: 14,
    color: '#333',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#FFB3D9',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 50,
    marginTop: 20,
    shadowColor: '#d43384',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  buttonText: {
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
