package com.wanted.wanted.entidades;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "Naruto")
public class Naruto {

    @Id
    @GeneratedValue
    // @Min(value=1, message = "{mascota.id.mayorquecero}")
    @Column(nullable = false, unique = true)
    private Long id;

    private String nombre;

    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "tipo_arco", referencedColumnName = "nombre")
    // mirar si esto es necesario a la hora de hacer base de datos
    private Arco arco;

    private String precio;
    private String des;
    private String url;
}
