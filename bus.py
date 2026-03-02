tareas = []

while True:
    print("\n--- MENÚ ---")
    print("1. Add New Task")
    print("2. See Task")
    print("3. Exit")

    opcion = input("Elige una opción: ")

    if opcion == "1":
        tarea = input("Escribe la nueva tarea: ")
        tareas.append(tarea)
        print("✅ Tarea agregada correctamente.")

    elif opcion == "2":
        print("\n📋 Lista de tareas:")
        if len(tareas) == 0:
            print("No hay tareas aún.")
        else:
            for i, tarea in enumerate(tareas, 1):
                print(f"{i}. {tarea}")

    elif opcion == "3":
        print("👋 Saliendo del programa...")
        break

    else:
        print("❌ Opción inválida. Intenta de nuevo.")


numeros = [ 10, 5, 7, 2, 1 ]
print(f'\nlista original : {numeros}')

numeros[0] =111
print(f' \nlista actualizada = {numeros}')

numeros[1] = numeros[4]
print(f' \nlista nueva es : {numeros}')

print(f' \nla longitud de la lista es : {len(numeros)}')


beatles = []
print(f' \npaso 1 : {beatles}')

beatles.append('john lennon')
beatles.append('paul Mc Cartny')
beatles.append('George Harrison')

print(f'\npaso 2 : {beatles}')
for miembros in range(2) : beatles.append(input("\nNuevos Miembros de la Banda es :"))

print(f'\npaso 3 {beatles}')
del beatles[-1]
del beatles[-1]
print(f"\npaso 4 : {beatles}")

beatles.insert(0, 'Ringo Starr')
print(f' \nEl grupo finalmente es : {beatles}')
print(f'\nLa cantidad de miembros en el grupo son : {len(beatles)}')

