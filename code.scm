(defrel (appendo l r o)
    (conde
        ((== l '()) (== r o))

        ((fresh (h tl to)
            (== l `(,h . ,tl))
            (== o `(,h . ,to))
            (appendo tl r to)))))

(defrel (riffleo x y z)
    