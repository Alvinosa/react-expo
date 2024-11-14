import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const notifications = [
  {
    id: '1',
    title: 'Promo Spesial!',
    description: 'Dapatkan diskon hingga 50% untuk pembelian hari ini.',
    time: '1 jam yang lalu',
    image: 'https://example.com/promo.png',
    icon: 'pricetag',
  },
  {
    id: '2',
    title: 'Produk Baru!',
    description: 'Produk baru kami telah tersedia. Jangan sampai kehabisan!',
    time: '3 jam yang lalu',
    image: 'https://example.com/new_product.png',
    icon: 'gift',
  },
  {
    id: '3',
    title: 'Pengiriman Diterima',
    description: 'Pesanan Anda telah sampai. Selamat menikmati!',
    time: '1 hari yang lalu',
    image: 'https://example.com/delivery.png',
    icon: 'checkmark-done',
  },
  // Tambahkan notifikasi lainnya jika diperlukan
];

export default function Notifikasi() {
  const renderItem = ({ item }) => (
    <View style={[styles.notificationCard, { backgroundColor: item.id % 2 === 0 ? '#ffcad4' : '#ffb3c6' }]}>
      <View style={styles.iconContainer}>
        <Ionicons name={item.icon} size={24} color="#FF69B4" />
      </View>
      <Image source={{ uri: item.image }} style={styles.notificationImage} />
      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationDescription}>{item.description}</Text>
        <Text style={styles.notificationTime}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifikasi</Text>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
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
  },
  notificationCard: {
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
  notificationImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF69B4',
  },
  notificationDescription: {
    fontSize: 14,
    color: '#333',
    marginTop: 4,
    marginBottom: 4,
  },
  notificationTime: {
    fontSize: 12,
    color: '#888',
  },
  separator: {
    height: 1,
    backgroundColor: '#f2f2f2',
    marginVertical: 8,
  },
});
