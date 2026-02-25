tareas = []

while True:
    print("\n--- MENÚ ---")
    print("1. Agregar tarea")
    print("2. Ver tareas")
    print("3. Salir")

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