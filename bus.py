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
print(f'lista original : {numeros}')

numeros[0] =111
print(f' \n lista actualizada = {numeros}')

numero[1] = numeros[4]
print(f' \n lista nueva es : {numeros}')

print(f' \n la longitud de la lista es : {len(numeros)}')
