-- 1.Create
CREATE DATABASE MAHASISWA;
CREATE TABLE dosen(
    NIDN serial PRIMARY KEY NOT NULL, 
    namaDosen varchar (200) NOT NULL, 
    JK char (1) NOT NULL
);
INSERT INTO dosen (NIDN, namaDosen, JK) values 
('1234', 'Yayan Suparman', 'L'), 
('2345', 'Siti Nurhaliza', 'P'), 
('3456', 'Gugun Setyawan', 'L'), 
('4567', 'Yuni Juwita', 'P'), 
('5678', 'Dwi Ayu', 'P');

-- 2. Read
SELECT * FROM dosen;
SELECT namaDosen FROM dosen;

-- 3. Update
UPDATE dosen  SET  namaMahasiswa = 'Dwi Ningsih' 
WHERE NIM = '5678';

4.Delete
DELETE FROM  dosen WHERE NIDN = ‘22’;