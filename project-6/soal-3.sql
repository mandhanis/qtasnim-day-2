CREATE TABLE ngajar (
    id_ngajar serial PRIMARY KEY not null, 
    NIDN serial not null, 
    NIM serial not null, 
    FOREIGN KEY (NIDN) REFERENCES dosen (NIDN), 
    FOREIGN KEY (NIM) REFERENCES mahasiswa (NIM)
);

INSERT INTO ngajar (id_ngajar, NIDN, NIM) VALUES 
('1029', '1234', '0987'), 
('2938', '2345', '9876'), 
('3847', '3456', '8765'), 
('4756', '4567', '7654'), 
('5665', '5678', '6543');

SELECT ngajar.id_ngajar, dosen.namaDosen, mahasiswa.namaMahasiswa 
FROM ngajar 
INNER JOIN dosen ON dosen.NIDN = ngajar.NIDN 
INNER JOIN mahasiswa ON mahasiswa.NIM = ngajar.NIM;