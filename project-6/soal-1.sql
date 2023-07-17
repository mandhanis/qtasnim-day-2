create database mahasiswa;

create table mahasiswa(
    NIM serial primary key not null, 
    namaMahasiswa varchar (200) not null, 
    JK char (1) not null
); 

insert into mahasiswa (NIM, namaMahasiswa, JK) values 
('6543', 'Adriansyah', 'L'), 
('7654', 'Nara Yunita', 'P'), 
('8765', 'Farrel Abdillah', 'L'), 
('9876', 'Juan Akbar', 'L'), 
('0987', 'Mayasari', 'P');

create table dosen(
    NIDN serial PRIMARY KEY NOT NULL, 
    namaDosen varchar (200) NOT NULL, 
    JK char (1) NOT NULL
);

insert into dosen (NIDN, namaDosen, JK) values 
('1234', 'Yayan Suparman', 'L'), 
('2345', 'Siti Nurhaliza', 'P'), 
('3456', 'Gugun Setyawan', 'L'), 
('4567', 'Yuni Juwita', 'P'), 
('5678', 'Dwi Ayu', 'P');

create table ngajar (
    id_ngajar serial primary key not null, 
    NIDN serial not null, 
    NIM serial not null, 
    foreign key (NIDN) references dosen (NIDN), 
    foreign key (NIM) references mahasiswa (NIM)
);

insert into ngajar (id_ngajar, NIDN, NIM) values 
('1029', '1234', '0987'), 
('2938', '2345', '9876'), 
('3847', '3456', '8765'), 
('4756', '4567', '7654'), 
('5665', '5678', '6543');
