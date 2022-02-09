//Soal 3
function biji(jumlah) {
    const hasil = jumlah.map((el) => {
      const arrayBaru = '';
  
      return (el += arrayBaru);
    });
    const split = hasil[3].split(',');
    hasil.pop();
    console.log(hasil, split.join(' '));
  }
  biji(['hallo', 'nama', 'saya', ['fitriani', 'saadah', ['kelas', ['11', ['rpl', '2']]]]]);
  
  //Soal 4
  const obj = {
    nama: 'fitriani',
    kelas: 'RPL 2',
    umur: 17,
    nikah: false,
    Hp: {
      nama: 'oppo a15',
      spesifikasiHp: {
        chipset: 'tek helio p35',
        ram: '3,00 GB',
        rom: '32,0 GB',
        camera: '13mp',
      },
    },
  };
  console.log(obj.Hp);