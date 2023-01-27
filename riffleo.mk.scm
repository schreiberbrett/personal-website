(defrel (riffleo l1 l2 lo)
    (fresh (h1 t1 h2 t2 ho to z0 z1)
        (conde
            ((== `(,l1 ,l2 ,lo)) `(() () ()))
            ((== `(,l1 ,l2 ,lo)) `((,h1 . ,t1) () (,h1 . ,t1)))
            ((== `(,l1 ,l2 ,lo)) `(() (,h2 . ,t2) (,h2 . ,t2)))
            
            
            ;; If `a` is empty and `b` is non-empty, then the output is equal to `b`.
            ((== a '()) (== b `(,car-b . ,cdr-b)) (== o b))
            
            ;; When both `a` and `b` are non-empty
            ((== a `(,car-a . ,cdr-a)) (== b `(,car-b . ,cdr-b)) (== o `(,car-o . ,cdr-o))
                (conde
                    ((== car-o car-a) (== z0 cdr-a) (== z1 b))
                    ((== car-o car-b) (== z0 a) (== z1 cdr-b)))
                    
                (riffleo z0 z1 cdr-o)))))